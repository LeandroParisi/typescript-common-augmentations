import DevelopmentError from "Errors/DevelopmentError"

/**
 * Check if a variable is not undefined, if it is undefined it breaks the program with an error
 * @param arg Any variable that can be undefined
 * @returns True if the variable is not undefined, otherwise throws a DevelopmentError
 */
 export function isDefinedGuard(arg: unknown): arg is object {
    const isDefined = arg !== undefined
    if (isDefined) {
      return isDefined
    }
    throw new DevelopmentError(`Argument: ${arg} should not be undefined`, isDefinedGuard.name)
  }