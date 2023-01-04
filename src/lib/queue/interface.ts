export interface QueueInterface<T> {
  /**
   * Returns the length of the queue
   */
  size: number;

  /**
   * Adds a new value to the end of the queue
   * @param value The value to be added to the queue
   */
  enqueue(value: T): number;

  /**
   * Removes the first value from the queue and returns it
   */
  dequeue(): T | null;
}
