import BinaryHeap from '../src/lib/binary-heap';

describe('Test BinaryHeap', () => {
  const heap = new BinaryHeap<number>([34, 52, 83, 97, 98, 47, 4, 78, 13]);
  it('should be able to create a BinaryHeap', () => {
    expect(heap.values).toEqual([98, 97, 52, 78, 83, 47, 4, 34, 13]);
  });

  it('should be able to insert a value into the BinaryHeap', () => {
    heap.insert(72);
    expect(heap.values).toEqual([98, 97, 52, 78, 83, 47, 4, 34, 13, 72]);
    heap.insert(99);
    expect(heap.values).toEqual([99, 98, 52, 78, 97, 47, 4, 34, 13, 72, 83]);
  });

  it('should be able to extract the max value from the BinaryHeap', () => {
    expect(heap.extractMax()).toEqual(99);
    expect(heap.values).toEqual([98, 97, 52, 78, 83, 47, 4, 34, 13, 72]);
  });
});
