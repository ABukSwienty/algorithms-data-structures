/**
 * Swaps two elements in an array. Mutates the array.
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * swap(arr, 0, 4);
 * console.log(arr); // [5, 2, 3, 4, 1]
 * @param array Array
 * @param swapFrom number
 * @param swapTo number
 */
const swap = <T>(array: T[], swapFrom: number, swapTo: number) => {
  if (swapFrom > array.length || swapTo > array.length)
    throw new RangeError('Swap fnc error: Provided indices are out of range!');
  [array[swapFrom], array[swapTo]] = [array[swapTo], array[swapFrom]];
};

export default swap;
