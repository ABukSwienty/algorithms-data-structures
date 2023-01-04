import binarySearch from '../src/lib/binary-search';

describe('Test binary search', () => {
  it('should return -1 if the array is empty', () => {
    const result = binarySearch({values: [], target: 1});
    expect(result).toBe(-1);
  });

  it('should return the correct index in an ascending array', () => {
    const result = binarySearch({values: [1, 2, 3, 4, 5], target: 3});
    expect(result).toBe(2);
  });

  it('should return the correct index in a descending array', () => {
    const result = binarySearch({
      values: [5, 4, 3, 2, 1],
      target: 3,
      order: 'desc',
    });
    expect(result).toBe(2);
  });

  it('should return the correct index in an ascending array with a custom extract function', () => {
    const result = binarySearch({
      values: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}],
      target: 3,
      extractItem: item => item.id,
    });
    expect(result).toBe(2);
  });

  it('should return the correct index in a descending array with a custom extract function', () => {
    const result = binarySearch({
      values: [{id: 5}, {id: 4}, {id: 3}, {id: 2}, {id: 1}],
      target: 3,
      extractItem: item => item.id,
      order: 'desc',
    });
    expect(result).toBe(2);
  });

  it('should return -1 if the target is not found in an ascending array', () => {
    const result = binarySearch({values: [1, 2, 3, 4, 5], target: 6});
    expect(result).toBe(-1);
  });

  it('should return -1 if the target is not found in a descending array', () => {
    const result = binarySearch({
      values: [5, 4, 3, 2, 1],
      target: 6,
      order: 'desc',
    });
    expect(result).toBe(-1);
  });
});
