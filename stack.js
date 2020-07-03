class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return !this.top;
  }

  peek() {
    return this.top.data;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (this.isEmpty()) {
      throw "Stack is empty";
    }

    // get the data at the top
    let data = this.top.data;

    // update the top to be the next in stack or null if there's no next
    this.top = this.top.next ? this.top.next : null;

    return data;
  }
}

module.exports = Stack;
