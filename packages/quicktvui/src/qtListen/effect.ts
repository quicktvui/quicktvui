import { emReactiveFlags } from './reactive'
export type TrunFn = (
  target?: any,
  prop?: any,
  newValue?: any,
  type?: any,
  oldValue?: any,
  oldTarget?: any
) => void

let effectStack: any[] = []
let activeEffect: QtReactiveEffect

function clearupEffect(effect: QtReactiveEffect) {
  const { deeps } = effect
  for (const dep of deeps) {
    dep.delete(effect)
  }
}
export class QtReactiveEffect {
  active = true
  deeps: Set<any>[] = []
  constructor(
    public fn: TrunFn,
    public scheduler?: TrunFn
  ) {}
  run() {
    if (!this.active) {
      return this.fn()
    }
    if (!effectStack.includes(this)) {
      try {
        effectStack.push((activeEffect = this))
        return this.fn()
      } finally {
        effectStack.pop()
        activeEffect = effectStack[effectStack.length - 1]
      }
    }
  }
  stop() {
    if (this.active) {
      clearupEffect(this)
      this.active = false
    }
  }
}
/**
 * 是否可以进行依赖收集
 */
export function qtIsTracking() {
  return activeEffect !== undefined
}
const targetMap = new WeakMap()
export function qtClearupTrack(target: any) {
  if (target) {
    targetMap.delete(target)
  }
}
export function qtTrack(target: any, key: any) {
  if (!qtIsTracking() || target === undefined || target === null) return

  let depsMap: Map<object, Set<object>> = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  if (key != undefined) {
    let dep = depsMap.get(key)
    if (!dep) {
      depsMap.set(key, (dep = new Set()))
    }
    qtTrackEffects(dep)
  }
}
/**
 * 依赖收集
 */
export function qtTrackEffects(dep: Set<object>) {
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect)
    activeEffect.deeps.push(dep)
  }
}
export function qtTrigger(target: any, prop: any, newValue: any, type?: any, oldValue?: any) {
  let depsMap = targetMap.get(target)
  if (!depsMap) return
  let deps: any[] = []

  if (prop != undefined) {
    let propsDep = depsMap.get(prop)
    if (!propsDep) {
      propsDep = depsMap.get(emReactiveFlags.WATCH_ALL)
    }
    if (propsDep) {
      deps.push(propsDep)
    }
  }

  let effects: any[] = []
  for (const dep of deps) {
    effects.push(...dep)
  }

  qtTriggerEffects(effects, target, prop, newValue, type, oldValue)
}
/**
 * 触发依赖更新
 */
export function qtTriggerEffects(
  effects: any,
  target?: any,
  prop?: any,
  newValue?: any,
  type?: any,
  oldValue?: any
) {
  for (const effect of effects) {
    if (effect !== activeEffect) {
      if (effect.scheduler) {
        return effect.scheduler(target, prop, newValue, type, oldValue) // ls-todo
      }
      effect.run(target, prop, newValue, type, oldValue)
    }
  }
}

export function qtEffect(fn: TrunFn) {
  const _effect = new QtReactiveEffect(fn)
  _effect.run()

  const runner: any = _effect.run.bind(_effect)

  runner.effect = _effect
  return runner
}
