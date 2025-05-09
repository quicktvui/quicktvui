export function warn(msg: string, ..._args: any[]): void
export function warn(msg: string): void {
  // avoid using ...args as it breaks in older Edge builds
  const args = Array.from(arguments).slice(1)
  console.warn.apply(console, ['[Qt warn]: ' + msg].concat(args) as [string, ...any[]])
}
