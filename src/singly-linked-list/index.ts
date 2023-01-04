import {SinglyLinkedListInterface} from './interface';
import Node from './node';

class SinglyLinkedList<T> implements SinglyLinkedListInterface<T> {
  private _head: Node<T> | null = null;
  private _tail: Node<T> | null = null;
  private _length = 0;

  public get length() {
    return this._length;
  }

  public get head() {
    return this._head;
  }

  public get tail() {
    return this._tail;
  }

  private incrementLength() {
    this._length++;
  }

  private decrementLength() {
    this._length--;
  }

  public push(data: T) {
    if (!this._head) {
      this._head = this._tail = new Node(data);
      this.incrementLength();
      return this;
    }

    const node = new Node(data);
    this._tail!.next = node;
    this._tail = node;

    this.incrementLength();
    return this;
  }

  public pop() {
    if (!this._head) {
      return null;
    }

    let temp = this._head;
    let newTail = this._head;

    while (temp?.next) {
      newTail = temp;
      temp = temp.next;
    }

    newTail.next = null;
    this._tail = newTail;

    this.decrementLength();

    if (this._length === 0) {
      this._head = null;
      this._tail = null;
    }

    return temp;
  }

  public shift() {
    if (!this._head) {
      return null;
    }

    const temp = this._head;
    this._head = this._head.next;
    this.decrementLength();
    if (this._length === 0) {
      this._head = null;
      this._tail = null;
    }
    return temp;
  }

  public unshift(data: T) {
    if (!this._head) {
      this._head = this._tail = new Node(data);
      this.incrementLength();
      return this;
    }

    const node = new Node(data);
    node.next = this._head;
    this._head = node;
    this.incrementLength();
    return this;
  }

  public get(index: number) {
    if (index < 0 || index >= this._length) {
      return null;
    }

    let counter = 0;
    let current = this._head;

    while (counter !== index) {
      current = current!.next;
      counter++;
    }

    return current;
  }

  public set(index: number, data: T) {
    const node = this.get(index);

    if (!node) {
      return false;
    }

    node.data = data;
    return true;
  }

  public remove(index: number) {
    if (index < 0 || index >= this._length) return null;
    if (index === 0) return this.shift();
    if (index === this._length - 1) return this.pop();
    const prev = this.get(index - 1);
    const removedNode = prev?.next;
    const next = this.get(index + 1);

    if (!prev || !removedNode || !next) return null;

    prev.next = next;
    this.decrementLength();

    return removedNode;
  }

  public reverse() {
    if (!this._head) return this;

    // example:
    // H              T
    // 1 -> 2 -> 3 -> 4
    // T              H
    // 1 <- 2 <- 3 <- 4

    // reverse the head and tail
    let node: Node<T> | null = this._head;
    this._head = this._tail;
    this._tail = node;

    // placeholder values
    let prev: Node<T> | null = null;
    let next: Node<T> | null = node.next;

    for (let i = 0; i < this._length; i++) {
      // sets the next node to the current node's next
      next = node ? node?.next : null;
      // sets the current node's next to the previous node
      if (node) node.next = prev;
      // updates the previous node to the current node for the loop
      prev = node;
      // updates the current node to the next node for the loop
      node = next;
    }

    return this;
  }

  public toArray() {
    const arr: T[] = [];
    this.forEach(node => arr.push(node.data));

    return arr;
  }

  public forEach(callback: (node: Node<T>, index: number) => void) {
    let current = this._head;
    let counter = 0;

    while (current) {
      callback(current, counter);
      current = current.next;
      counter++;
    }
  }
}

export default SinglyLinkedList;
