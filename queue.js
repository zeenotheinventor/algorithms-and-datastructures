class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
  }

  peek() {
    return this.head.data;
  }

  add(data) {
    // create the new node to be added
    let node = new Node(data);

    // Set the next for the last element to be this node
    if (this.tail) {
      this.tail.next = node;
    }

    // update the tail in the queue to be this node
    this.tail = node;

    // if the queue has no data set this node as the head as well
    if (!head) {
      head = node;
    }
  }

  remove() {
    let data = this.head;

    this.head = this.head.next;

    if (this.head === null) {
      tail = null;
    }

    return data;
  }
}

module.exports = Queue;
