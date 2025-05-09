/**
 * vue和android能传递的任意类型
 */
export type QTNativeParams =
  | string
  | number
  | Array<string>
  | Array<number>
  | Record<string, string>
  | Record<string, number>
  | Array<Record<string, string>>
  | Array<Record<string, number>>

/**
 * array
 */
export type QTNativeMap = Record<string, any>

/**
 * map
 */
export type QTNativeArray = Array<any>
