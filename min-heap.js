class MinHeap {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.items = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return Math.round((childIndex - 1) / 2);
  }

  peek() {
    if (this.size === 0) {
      throw "Size cannot be empty";
    }

    return items[0];
  }

  poll() {
    if (this.size === 0) {
      throw "Size cannot be empty";
    }

    let item = items[0];
    this.items[0] = this.items[size - 1];
    this.size--;

    heapifyDown();

    return item;
  }

  add(item) {
    this.items[this.size] = item;

    this.size++;
    heapifyUp();
  }

  /**
   * Rearranges heap
   */
  heapifyUp() {
    let index = size - 1;

    while (hasParent(index) && parent(index) > items[index]) {
      swap(getParentIndex(index), index);
      index = getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;

    while (hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);

      if (hasRightChild(index) && rightChild(index) < this.getLeftChildIndex(index)) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (items[index] < this.items[smallerChildIndex]) {
        break;
      } else {
        swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }
}

module.exports = MinHeap;
