import SinglyLinkedList from '.';
import Node from './node';

export interface SinglyLinkedListInterface<T> {
  /**
   * Returns the length of the linked list
   */
  length: number;

  /**
   * Returns the head of the linked list
   */
  head: Node<T> | null;

  /**
   * Returns the tail of the linked list
   */
  tail: Node<T> | null;

  /**
   * Pushes a new node to the end of the linked list
   * @param data The data to be added to the linked list
   */
  push(data: T): SinglyLinkedList<T>;

  /**
   * Removes the last node from the linked list and returns it
   */
  pop(): Node<T> | null;

  /**
   * Removes the first node from the linked list and returns it
   */
  shift(): Node<T> | null;

  /**
   * Adds a new node to the beginning of the linked list
   * @param data The data to be added to the linked list
   */
  unshift(data: T): SinglyLinkedList<T>;

  /**
   * Gets the node at the specified index
   * @param index The index of the node to be returned
   */
  get(index: number): Node<T> | null;

  /**
   * Sets the data of the node at the specified index
   * @param index The index of the node to be updated
   * @param data The data to be updated
   */
  set(index: number, data: T): boolean;

  /**
   * Loops through each node in the linked list and executes a callback function with the current node and index
   * @param callback The callback function to be executed on each node
   */
  forEach(callback: (node: Node<T>, index: number) => void): void;

  /**
   * Removes the node at the specified index
   * @param index number
   */
  remove(index: number): Node<T> | null;

  /**
   * Reverses the linked list
   */
  reverse(): SinglyLinkedList<T>;
}
