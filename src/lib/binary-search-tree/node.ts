import {Comparables} from '../../types/comparables';

class Node<T> {
  constructor(
    public value: Comparables,
    public data: T | null,
    public left: Node<T> | null = null,
    public right: Node<T> | null = null
  ) {}
}

export default Node;
