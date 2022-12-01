interface params {
  decimal? : boolean
  price : number
  coinSymbol : string
}

export class GenericParser {
  public static formatPrice = (
    {
      price,
      decimal = true,
      coinSymbol
    } : params,
  ) => {
    if (decimal) return `${coinSymbol} ${Number(price).toFixed(2)}`
    return `${coinSymbol} ${Number(price)}`
  }

  public static toNumber(string : string) {
    return Number(string.trim())
  }

  public static toUpperTrim(string : string) {
    return string.trim().toUpperCase()
  }

  public static toLowerTrim(string : string) {
    return string.trim().toLowerCase()
  }
}
