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

    let temp = this.head.next;
    let newTail = this.head;

    while (temp?.next) {
      newTail = temp;
      temp = temp.next;
    }

    newTail.next = null;
    this.tail = newTail;
    this.decrementLength();
    return temp;
  }

  public shift() {
    if (!this.head) {
      return null;
    }

    const temp = this.head;
    this.head = this.head.next;
    this.decrementLength();
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

  private incrementLength() {
    this.length++;
  }

  private decrementLength() {
    this.length--;
  }
}

export default SinglyLinkedList;
