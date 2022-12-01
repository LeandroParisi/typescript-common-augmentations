export class TypeUtils {
  public static isArray(t : any) {
    return Array.isArray(t)
  }

  public static isDate(t : any) {
    return t instanceof Date
  }

  public static isObject(o : any) {
    return o === Object(o) && !TypeUtils.isArray(o) && typeof o !== 'function'
  }
}
