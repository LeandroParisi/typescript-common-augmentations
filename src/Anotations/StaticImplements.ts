/* eslint-disable no-unused-expressions */
export function StaticImplements<T>() {
  return <U extends T>(constructor: U) => { constructor }
}
