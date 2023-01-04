import SinglyLinkedList from '../singly-linked-list';
import {QueueInterface} from './interface';

/**
 * Queue class implementation. FIFO – First In First Out. Uses a SinglyLinkedList class its shift and push methods for enqueue and dequeue to remain O(1).
 * @example
 * const queue = new Queue();
 * queue.enqueue(1);
 * queue.enqueue(2);
 * queue.dequeue(); // 1
 * queue.dequeue(); // 2
 * queue.dequeue(); // null
 */
class Queue<T> implements QueueInterface<T> {
  get size() {
    return this._queue.length;
  }

  constructor(private _queue = new SinglyLinkedList<T>()) {}

  enqueue(value: T) {
    this._queue.push(value);
    return this._queue.length;
  }

  dequeue() {
    return this._queue.shift()?.data ?? null;
  }
}

export default Queue;
