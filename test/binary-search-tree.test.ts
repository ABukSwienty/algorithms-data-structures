import BinarySearchTree from '../src/lib/binary-search-tree';

describe('Test Binary Search Tree', () => {
  it('should insert nodes', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.size).toBe(3);
  });

  it('should find nodes or return null', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    const notFound = bst.find(20);
    const found = bst.find(5);

    expect(notFound).toBeNull();
    expect(found?.value).toBe(5);
  });
});
