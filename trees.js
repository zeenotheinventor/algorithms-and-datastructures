class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (value <= this.data) {
      if (!this.left) {
        this.left = new Node(data);
      } else {
        this.left.insert(data);
      }
    } else {
      if (!this.right) {
        this.right = new Node(data);
      } else {
        this.right.insert(data);
      }
    }
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

module.exports = { Node };
