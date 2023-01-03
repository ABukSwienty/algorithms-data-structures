interface SinglyLinkedListInterface<T> {
  /**
   * Returns the length of the linked list
   */
  getLength(): number;

  /**
   * Returns the head of the linked list
   */
  getHead(): Node<T> | null;

  /**
   * Returns the tail of the linked list
   */
  getTail(): Node<T> | null;

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

class Node<T> {
  constructor(public data: T, public next: Node<T> | null = null) {}
}

class SinglyLinkedList<T> implements SinglyLinkedListInterface<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length = 0;

  public getLength() {
    return this.length;
  }

  public getHead() {
    return this.head;
  }

  public getTail() {
    return this.tail;
  }

  public push(data: T) {
    if (!this.head) {
      this.head = this.tail = new Node(data);
      this.incrementLength();
      return this;
    }

    const node = new Node(data);
    this.tail!.next = node;
    this.tail = node;

    this.incrementLength();
    return this;
  }

  public pop() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;
    let newTail = this.head;

    while (temp?.next) {
      newTail = temp;
      temp = temp.next;
    }

    newTail.next = null;
    this.tail = newTail;

    this.decrementLength();

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  public shift() {
    if (!this.head) {
      return null;
    }

    const temp = this.head;
    this.head = this.head.next;
    this.decrementLength();
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  public unshift(data: T) {
    if (!this.head) {
      this.head = this.tail = new Node(data);
      this.incrementLength();
      return this;
    }

    const node = new Node(data);
    node.next = this.head;
    this.head = node;

    return this;
  }

  public get(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;

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
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prev = this.get(index - 1);
    const removedNode = prev?.next;
    const next = this.get(index + 1);

    if (!prev || !removedNode || !next) return null;

    prev.next = next;
    this.decrementLength();

    return removedNode;
  }

  public reverse() {
    if (!this.head) return this;

    // example:
    // H              T
    // 1 -> 2 -> 3 -> 4
    // T              H
    // 1 <- 2 <- 3 <- 4

    // reverse the head and tail
    let node: Node<T> | null = this.head;
    this.head = this.tail;
    this.tail = node;

    // placeholder values
    let prev: Node<T> | null = null;
    let next: Node<T> | null = node.next;

    for (let i = 0; i < this.length; i++) {
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
    let current = this.head;
    let counter = 0;

    while (current) {
      callback(current, counter);
      current = current.next;
      counter++;
    }
  }

  private incrementLength() {
    this.length++;
  }

  private decrementLength() {
    this.length--;
  }
}

export default SinglyLinkedList;
