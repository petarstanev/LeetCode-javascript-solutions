/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let low = Math.min(p.val, q.val);
  let high = Math.max(p.val, q.val);

  let rec = (root) => {
    if (root.val >= low && root.val <= high) {
      //match
      return root;
    } else if (root.val < low) {
      //root is smaller go right
      return rec(root.right);
    } else {
      //go left
      return rec(root.left);
    }
  };

  return rec(root);
};

var lowestCommonAncestor = function (root, p, q) {
  let low = Math.min(p.val, q.val);
  let high = Math.max(p.val, q.val);

  while (true) {
    if (root.val >= low && root.val <= high) {
      //match
      return root;
    } else if (root.val < low) {
      //root is smaller go right
      root = root.right;
    } else {
      //go left
      root = root.left;
    }
  }
};
