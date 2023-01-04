export interface StackInterface<T> {
  /**
   * Returns the size of the stack
   */
  size: number;

  /**
   * Pushes a new value to the top of the stack
   * @param value The value to be added to the stack
   */
  push(value: T): number;

  /**
   * Removes the top value from the stack and returns it
   */
  pop(): T | null;
}
