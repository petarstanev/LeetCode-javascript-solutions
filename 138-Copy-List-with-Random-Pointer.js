// Definition for a Node.
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let map = new Map();
  let headStart = head;
  while (head) {
    let copy = new Node(head.val);
    map.set(head, copy);
    head = head.next;
  }
  head = headStart;
  while (head) {
    let copy = map.get(head);
    copy.next = map.get(head.next) || null; //Can we pass null to map?
    copy.random = map.get(head.random) || null;
    head = head.next;
  }
  return map.get(headStart);
};

let node2 = new Node(3, new Node(3, null, null));
let node = new Node(3, node2, null);
node2.random = node;

console.log(copyRandomList(node));


//LEARNING:
// 1. We can use map as original node as key and copy as value.
// 2. we can pass null to map and returns undefined 