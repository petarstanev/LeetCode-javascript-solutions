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
 * @return {number}
 */
var minDiffInBST = function (root) {
  let minDiff = Number.MAX_SAFE_INTEGER;
  let prev = -Infinity;
  const recursive = (node) => {
    if (!node) return;
    console.log(node.val, minDiff, prev);
    recursive(node.left);
    minDiff = Math.min(minDiff, node.val - prev);
    prev = node.val;
    recursive(node.right);
  };
  recursive(root);
  return minDiff;
};


// LEARNING
// 1. Instead of Number.MAX_SAFE_INTEGER we can use Infinity or -Infinity
// 2. For this task we need to keep track of the last number and compare it with the current one.
// 3. BFS uses queue // DFS uses stack
// 4. BFS is better when target is closer to the source // DFS is better when target is away
// 5. BFS is slower than DFS // DFS is faster *** IT DEPENDS
// 6. The time complexity is the same O(n) but the space complexity differs:
//    DFS - uses stack for heigh -> space O(h) where h is the heigh
//    BFS - uses queue for the width -> space O(w) w is max width
