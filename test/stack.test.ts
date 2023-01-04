import Stack from '../src/stack';

describe('Test Stack', () => {
  it('Should add multiple items to the stack', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size).toBe(3);
  });

  it('should remove items from the stack according to LIFO', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(null);
  });
});
