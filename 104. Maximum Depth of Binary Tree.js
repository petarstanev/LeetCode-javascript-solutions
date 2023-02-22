/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//Time: O(n) going over all elements
//Space: O(height of stack) recursive stack
var maxDepth = function (root) {
  var getMaxDepth = (element, current) => {
    if (element) {
      current++;
      let leftDepth = getMaxDepth(element.left, current);
      let rightDepth = getMaxDepth(element.right, current);
      current = Math.max(leftDepth, rightDepth);
    }
    return current;
  };
  return getMaxDepth(root, 0);
};
