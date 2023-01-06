import swap from '../../util/swap';

type GetParentChild<T> =
  | {
      idx: number;
      val: T;
    }
  | {idx: false; val: false};

class BinaryHeap<T> {
  private _values: T[] = [];

  get values() {
    return this._values;
  }

  constructor(values: T[] = []) {
    if (values.length) {
      values.forEach(val => this.insert(val));
    }
  }

  private isInBounds(idx: number) {
    return idx <= this._values.length;
  }

  private getParent(search: number) {
    const idx = Math.floor((search - 1) / 2);
    const inBounds = this.isInBounds(idx);
    return {
      idx: inBounds ? idx : false,
      val: inBounds ? this._values[idx] : false,
    } as GetParentChild<T>;
  }

  private lChild(search: number): GetParentChild<T> {
    return this.getChild('left', search);
  }

  private rChild(search: number): GetParentChild<T> {
    return this.getChild('right', search);
  }

  private getChild(child: 'left' | 'right', search: number) {
    const idx =
      child === 'left'
        ? Math.floor(2 * search) + 1
        : Math.floor(2 * search) + 2;
    const inBounds = this.isInBounds(idx);
    return {
      idx: inBounds ? idx : false,
      val: inBounds ? this._values[idx] : false,
    } as GetParentChild<T>;
  }

  private bubbleUp() {
    let idx = this._values.length - 1;
    const val = this._values[idx];

    while (idx > 0) {
      const {idx: parentIdx, val: parentVal} = this.getParent(idx);
      if (parentIdx === false) break;
      if (val <= parentVal) break;
      swap(this._values, idx, parentIdx);
      idx = parentIdx;
    }
  }

  private sinkDown(idx = 0) {
    let swapIdx: number | null = null;
    // sink down
    do {
      swapIdx = null;
      const {idx: lIdx, val: lVal} = this.lChild(idx);
      const {idx: rIdx, val: rVal} = this.rChild(idx);
      const parentVal: T | undefined = this._values[idx];

      if (lIdx !== false) {
        // swap left
        if (lVal > parentVal) {
          swapIdx = lIdx;
        }
      }

      if (rIdx !== false) {
        // swap right if no prev swap or if prev the rVal is larger than the lVal
        if (
          (swap === null && rVal > parentVal) ||
          (swap !== null && rVal > lVal)
        ) {
          swapIdx = rIdx;
        }
      }

      if (swapIdx === null) break;
      swap(this._values, swapIdx, idx);
      idx = swapIdx;
    } while (swap !== null);
  }

  public insert(value: T) {
    this._values.push(value);
    this.bubbleUp();
    return this;
  }

  public extractMax() {
    if (this._values.length === 0) return undefined;
    swap(this._values, this._values.length - 1, 0);
    const max = this._values.pop();

    this.sinkDown();

    return max;
  }
}

export default BinaryHeap;
