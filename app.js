const { binarySearchIterative } = require("./binary-search");
const Node = require("./trees");
const Stack = require("./stack");
const LinkedList = require("./linked-list");

/* Binary search */
let val = binarySearchIterative([-1, 2, 4, 5, 6, 7, 8, 23, 36, 56], -1);

/* Trees */
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

/* Linked Lists*/

const linkedList = new LinkedList();
for (let i = 0; i < 10; i++) {
  linkedList.append(i + 1);
}

linkedList.reverse();
linkedList.print();

/* Stacks */

const stack = new Stack();

stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);
stack.push(10);

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let dummyHead = new ListNode(0);

let curr = dummyHead;

console.log(curr.next);
