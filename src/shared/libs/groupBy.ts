export function groupBy<T, K extends PropertyKey>(
  array: T[],
  callbackFn: (item: T, index: number, array: T[]) => K,
): Record<string, T[]> {
  if (!Array.isArray(array)) {
    throw new TypeError("First argument must be an array");
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError("Second argument must be a function");
  }

  return array.reduce(
    (acc: Record<string, T[]>, item: T, index: number, arr: T[]) => {
      const key = callbackFn(item, index, arr);

      if (key === null || key === undefined) {
        throw new TypeError("GroupBy key cannot be null or undefined");
      }

      const strKey = String(key);

      if (!acc[strKey]) {
        acc[strKey] = [];
      }

      acc[strKey].push(item);

      return acc;
    },
    Object.create(null),
  );
}
