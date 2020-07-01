class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.data) {
      if (!this.left) {
        this.left = new Node(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new Node(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  printInOrder() {
    // Print left nodes in order
    if (this.left) {
      this.left.printInOrder();
    }
    // print current node
    console.log(this.data);

    // print right nodes in order
    if (this.right) {
      this.right.printInOrder();
    }
  }

  printPreOrder() {
    // print current node
    console.log(this.data);

    // Print left nodes in order
    if (this.left) {
      this.left.printInOrder();
    }

    // print right nodes in order
    if (this.right) {
      this.right.printInOrder();
    }
  }

  printPostOrder() {
    // Print left nodes in order
    if (this.left) {
      this.left.printInOrder();
    }

    // print right nodes in order
    if (this.right) {
      this.right.printInOrder();
    }

    // print current node
    console.log(this.data);
  }

  contains(value) {
    if (value === this.data) {
      return true;

      // potentially in left tree
    } else if (value <= this.data) {
      // no left node so it doesn't exist
      if (!this.left) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (!this.right) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }
}

module.exports = Node;
