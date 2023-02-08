function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//->1->2->3 current-2,prev-1,next-3
// current.next = 1
// prev = current = 2
// current = 3

// Time: O(n)
// Space: O(1)
var reverseListIteratively = function (head) {
  let current = head;
  let prev = null;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

//Time: O(n)
//Space: O(n)
var reverseListRecursive = function (head) {
    let newHead = null;
  
    if(!head){
      return null;
    }
    newHead = head.next;
    if(head.next){
      newHead = reverseListRecursive(head.next);
      head.next.next = head;
    }
    head.next = null;

  return newHead;
};
