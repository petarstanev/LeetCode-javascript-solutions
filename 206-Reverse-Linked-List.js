function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseList = function (head) {
    let before = null;
    while (head) {
        let after = head.next; // save next  
        head.next = before; // reverse
        before = head; // next head
        head = after; //next after
    }

    return before;
};

const head = new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5)))));
console.log(reverseList(head));
