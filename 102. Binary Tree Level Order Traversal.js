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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];

  let rec = (root, level) => {
    if (root) {
      if (level < result.length) {
        result[level].push(root.val);
      } else {
        result.push([root.val]);
      }
      level++;
      rec(root.left, level);
      rec(root.right, level);
    }
  };

  rec(root, 0);
  return result;
};
