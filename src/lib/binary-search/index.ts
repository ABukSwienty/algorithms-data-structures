import {ValueOf} from '../../types/value-of';
import flooredAverage from '../../util/floored-average';

type ReturnValue = -1 | number;
type Comparables = number | string | Date | boolean;
type Order = 'asc' | 'desc';

/**
 * Binary search algorithm that expects a sorted array. It will return the index of the target or -1 if not found.
 *
 * Optionally you can pass a function to extract the value to compare with more complex items such as objects to search for.
 *
 * Time complexity: O(log n)
 *
 * @example
 * const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * const target = 5;
 * const index = binarySearch({ values, target });
 * console.log(index); // 4
 *
 * @example
 * const values = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
 * const target = 5;
 * const index = binarySearch({ values, target, order: 'desc' });
 * console.log(index); // 4
 *
 * @example
 * const values = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
 * const target = 3;
 * const index = binarySearch({ values, target, extractItem: item => item.id });
 * console.log(index); // 2
 *
 * @param arr array to search in
 * @param target target to search for
 * @param extractItem optional function to extract the item to search for, defaults to identity function
 * @param order optional order of the array, defaults to 'asc'
 * @returns number of the index of the target or -1 if not found
 */
function binarySearch<T>({
  values,
  target,
  extractItem,
  order,
}: {
  values: T[];
  target: T;
  extractItem?: (item: T) => T;
  order?: Order;
}): ReturnValue;

function binarySearch<
  T extends Record<string | number | symbol, Comparables>,
  TargetType extends ValueOf<T>
>({
  values,
  target,
  extractItem,
  order,
}: {
  values: T[];
  target: TargetType;
  extractItem?: (item: T) => typeof target;
  order?: Order;
}): ReturnValue;

function binarySearch<T>({
  values,
  target,
  extractItem = item => item,
  order = 'asc',
}: {
  values: T[];
  target: T;
  extractItem?: (item: T) => T;
  order?: Order;
}) {
  if (values.length === 0) return -1;

  let leftPointer = 0;
  let rightPointer = values.length - 1;
  let pivot = flooredAverage(leftPointer, rightPointer);

  const asc = (current: T) => target < current;

  const desc = (current: T) => target > current;

  const strategy = order === 'asc' ? asc : desc;

  while (leftPointer <= rightPointer) {
    const current = extractItem(values[pivot]);

    if (current === target) return pivot;

    if (strategy(current)) rightPointer = pivot - 1;
    else leftPointer = pivot + 1;

    pivot = flooredAverage(leftPointer, rightPointer);
  }

  return -1;
}

export default binarySearch;
