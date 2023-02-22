/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
let isSame = (a, b) => {
    if (!a && !b) {
        return true;
    }
    return a && b && a.val === b.val && isSame(a.left, b.left) && isSame(a.right, b.right);
}

var isSubtree = function (root, subRoot) {
    if (!root) {
        return false;
    }

    if (isSame(root, subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

//LEARNING
// When working with recursion with 2 methods I should be careful which of the two methods I am calling.
 