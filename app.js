const { binarySearchIterative } = require("./binary-search");
const Node = require("./trees");

let val = binarySearchIterative([-1, 2, 4, 5, 6, 7, 8, 23, 36, 56], -1);

const tree = new Node(10);

tree.insert(5);
tree.insert(15);
tree.insert(8);
tree.insert(-1);
tree.insert(-23);
tree.insert(52);
tree.insert(7);

// console.log(tree.contains(10));
// console.log(tree);

// tree.printInOrder();
