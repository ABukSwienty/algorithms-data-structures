import SinglyLinkedList from '../singly-linked-list';
import {StackInterface} from './interface';

/**
 * Stack class implementation. LIFO – Last In First Out. Uses a SinglyLinkedList class its shift and unshift methods for push and pop to remain O(1).
 * @example
 * const stack = new Stack();
 * stack.push(1);
 * stack.push(2);
 * stack.pop(); // 2
 * stack.pop(); // 1
 * stack.pop(); // null
 */
class Stack<T> implements StackInterface<T> {
  get size() {
    return this._stack.length;
  }

  constructor(private _stack = new SinglyLinkedList<T>()) {}

  push(value: T) {
    this._stack.unshift(value);
    return this._stack.length;
  }

  pop() {
    return this._stack.shift()?.data ?? null;
  }
}

export default Stack;
