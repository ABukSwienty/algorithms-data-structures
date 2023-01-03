import SinglyLinkedList from '../src/singly-linked-list';

describe('Test singly linked list', () => {
  it('should add a single node and set head and tail', () => {
    const list = new SinglyLinkedList<number>();
    list.push(1);
    expect(list.length).toBe(1);
    expect(list.head?.data).toBe(1);
    expect(list.tail?.data).toBe(1);
  });

  it('should add multiple nodes and update tail', () => {
    const list = new SinglyLinkedList<number>();
    list.push(1).push(2).push(3).push(4);
    expect(list.length).toBe(4);
  });

  it('should remove the last node and update tail', () => {
    const list = new SinglyLinkedList<number>();
    list.push(1);

    const popped = list.pop();

    expect(popped?.data).toBe(1);

    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('should try to remove the last item of an empty list and receive null', () => {
    const list = new SinglyLinkedList<number>();

    const popped = list.pop();

    expect(popped).toBe(null);
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('should remove the first node and update head', () => {
    const list = new SinglyLinkedList<number>();
    list.push(1).push(2);
    const shifted = list.shift();
    expect(shifted?.data).toBe(1);
    expect(list.head?.data).toBe(2);
    list.shift();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.length).toBe(0);
  });

  it('should try and remove the first item of an empty list and receive null', () => {
    const list = new SinglyLinkedList<number>();
    const shifted = list.shift();
    expect(shifted).toBe(null);
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('should add a node at the beginning of the list', () => {
    const list = new SinglyLinkedList<number>();
    list.push(1);
    list.unshift(0);
    expect(list.head?.data).toBe(0);
  });

  it('should get the node at the specified index', () => {
    const list = new SinglyLinkedList<number>();
    list.push(1).push(2).push(3);
    const node = list.get(2);
    expect(node?.data).toBe(3);
  });

  it('should set the data of the node at the specified index', () => {
    const list = new SinglyLinkedList<number>();
    list.push(1).push(2).push(3);
    const updated = list.set(2, 4);
    expect(updated).toBe(true);
    expect(list.get(2)?.data).toBe(4);
    expect(list.tail?.data).toBe(4);
  });

  it('should loop through the list and fire a callback for each node', () => {
    const list = new SinglyLinkedList<number>();
    list.push(1).push(2).push(3).push(4);
    const callback = jest.fn();
    list.forEach(callback);
    expect(callback).toHaveBeenCalledTimes(4);
  });

  it('should remove a node at the specified index', () => {
    const list = new SinglyLinkedList<number>();
    list.push(1).push(2).push(3).push(4);
    const removed = list.remove(1);
    expect(list.length).toBe(3);
    expect(removed?.data).toBe(2);

    const removed2 = list.remove(1);
    expect(list.length).toBe(2);
    expect(removed2?.data).toBe(3);
  });

  it('should transform list to an array of the data', () => {
    const list = new SinglyLinkedList<number>();
    list.push(1).push(2).push(3).push(4);
    const arr = list.toArray();

    expect(arr).toEqual([1, 2, 3, 4]);
  });

  it('should reverse the list', () => {
    const list = new SinglyLinkedList<number>();
    list.push(1).push(2).push(3).push(4);

    expect(list.toArray()).toEqual([1, 2, 3, 4]);

    list.reverse();

    expect(list.toArray()).toEqual([4, 3, 2, 1]);
  });
});
