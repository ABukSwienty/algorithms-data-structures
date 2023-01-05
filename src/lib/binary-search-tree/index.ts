import {Comparables} from '../../types/comparables';
import Node from './node';

// TO DO: Add remove and minVal method; interface
class BinarySearchTree<T> {
  private _root: Node<T> | null = null;
  private _size = 0;

  get root() {
    return this._root;
  }

  get size() {
    return this._size;
  }

  public insert(value: Comparables, data: T | null = null) {
    const newNode = new Node(value, data);
    if (!this._root) {
      this._root = newNode;
      this._size++;
      return this;
    }
    this.insertRec(this._root, newNode);
    this._size++;
    return this;
  }

  private insertRec(root: Node<T> | null, newNode: Node<T>) {
    if (!root) return;

    if (newNode.value < root.value && !root.left) {
      root.left = newNode;
      return;
    }

    if (newNode.value > root.value && !root.right) {
      root.right = newNode;
      return;
    }

    if (newNode.value < root.value) this.insertRec(root.left, newNode);
    else this.insertRec(root.right, newNode);
  }

  public find(value: Comparables) {
    if (!this._root) return null;

    const found = this.findRec(this._root, value);

    return found ? {value: found.value, data: found.data} : null;
  }

  private findRec(root: Node<T> | null, value: Comparables): Node<T> | null {
    if (!root) return null;

    if (root.value === value) return root;

    if (value < root.value) return this.findRec(root.left, value);
    else return this.findRec(root.right, value);
  }
}

export default BinarySearchTree;
