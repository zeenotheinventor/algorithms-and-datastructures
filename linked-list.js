class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Add data to this list
   * @param {any} data
   */
  append(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    let current = head;

    // traverse list until you get to the end
    while (current.next) {
      current = current.next;
    }

    current.next = new Node(data);
  }

  prepend(data) {
    let newHead = new Node(data);

    // link new head to old head
    newHead.next = this.head;

    // set head variable to new head
    this.head = newHead;
  }

  deleteWithValue(data) {
    // don't process if this list has no elements
    if (!head) {
      return;
    }

    // reassign new head if head is next
    if (this.head.data === data) {
      head = head.next;
      return;
    }

    let current = head;

    while (current.head) {
      // if next value is
      if (current.next.data === data) {
        current.next = current.next.next ? current.next.next : null;
        return;
      }
      current = current.next;
    }
  }
}

module.exports = LinkedList;
