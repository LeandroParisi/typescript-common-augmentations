/* eslint-disable @typescript-eslint/restrict-template-expressions */
import DevelopmentError from 'Errors/DevelopmentError'
import { isDefinedGuard } from './isDefinedGuard'

/**
 * Checks if a variable is defined, if so, returns it safely excluding undefined union, otherwise throws a DevelopmentError
 * @param arg Any variable that can be undefined
 * @returns Arg passed as parameter or error
 */
export function mustBeDefined<T>(arg: T): Exclude<T, undefined> {
  if (isDefinedGuard(arg)) {
    return arg as unknown as Exclude<T, undefined>
  }
  throw new DevelopmentError(`Argument: ${arg} should not be undefined`, mustBeDefined.name)
}
