
/**
 * Checks if a variable is defined
 * @param arg Any variable that can be undefined
 * @returns False if the variable is undefined, true otherwise
 */
 export function isDefined(arg: unknown): arg is object {
    return arg !== undefined
  }