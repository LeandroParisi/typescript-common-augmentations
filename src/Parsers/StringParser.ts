export class StringParser {
  public static toCamelCase(str : string) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (
        index === 0 ? word.toLowerCase()
          : word.toUpperCase())).replace(/\s+/g, '')
  }

  public static normalize(str : string) : string {
    return str.normalize('NFD').replace(/\p{Diacritic}/gu, '')
  }
}
