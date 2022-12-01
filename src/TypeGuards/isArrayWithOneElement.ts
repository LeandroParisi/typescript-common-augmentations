export default function isArrayWithOneElementGuard<T>(array: T[] | undefined): array is T[] {
    if (array && array.length > 0 && array[0]) {
      return true
    }
    return false
  }
  