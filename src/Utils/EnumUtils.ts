/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
export class EnumUtils {
  public static getEnumKeys<T>(myEnum : T) {
    const output : Array<keyof T> = []

    for (const enumMember in myEnum) {
      const isStringProperty = Number.isNaN(Number(enumMember))

      if (isStringProperty) {
        output.push(enumMember)
      }
    }

    return output
  }
}
