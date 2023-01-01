import SinglyLinkedList from '../src/singly-linked-list';

describe('Test singly linked list', () => {
  const list = new SinglyLinkedList<number>();
  it('should add a single node and set head and tail', () => {
    list.push(1);
    expect(list.getLength()).toBe(1);
    expect(list.getHead()?.data).toBe(1);
    expect(list.getTail()?.data).toBe(1);
  });

  it('should add multiple nodes and update tail', () => {
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    expect(list.getLength()).toBe(5);
  });

  it('should remove the last node and update tail', () => {
    const popped = list.pop();
    expect(popped?.data).toBe(5);
  });

  it('should remove the first node and update head', () => {
    const shifted = list.shift();
    expect(shifted?.data).toBe(1);
    expect(list.getHead()?.data).toBe(2);
  });

  it('should add a node at the beginning of the list', () => {
    list.unshift(0);
    expect(list.getHead()?.data).toBe(0);

    console.log(list);
  });
});
