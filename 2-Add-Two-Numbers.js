/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let reminder = false;
    let dummy = new ListNode(-1);
    let dummyHead = dummy;

    let calcDigit = (calc) => {
        if (reminder) calc++;

        if (calc > 9) {
            reminder = true;
            calc -= 10;
        } else {
            reminder = false;
        }

        // sum += calc * Math.pow(10,multiplier);
        dummy.next = new ListNode(calc);
        dummy = dummy.next;
    }

    while (l1 || l2) {
        if (l1 && l2) {
            calcDigit(l1.val + l2.val)
            // multiplier++;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1) {
            calcDigit(l1.val)
            l1 = l1.next;
        } else {
            calcDigit(l2.val)
            l2 = l2.next;
        }
    }

    if(reminder)calcDigit(0)

    return dummyHead.next;
};