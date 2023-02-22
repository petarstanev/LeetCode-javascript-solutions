function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var zigzagLevelOrderBFS = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [];
  let inOrder = true;

  queue.push(root);
  while (queue.length > 0) {
    let level = [];
    let currentLength = queue.length;
    for (let i = 0; i < currentLength; i++) {
      let current = queue.shift();
      if (inOrder) {
        level.push(current.val);
      } else {
        level.unshift(current.val);
      }
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    result.push(level);
    inOrder = !inOrder;
  }

  return result;
};

let root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
zigzagLevelOrderBFS(root);

var zigzagLevelOrderDFS = function (root) {
  let result = [];

  let recc = (node, level) => {
    if (node) {
      if (level < result.length) {
        if (level % 2 === 0) {
          result[level].push(node.val);
        } else {
          result[level].unshift(node.val);
        }
      } else {
        result.push([node.val]);
      }
      level++;
      recc(node.left, level);
      recc(node.right, level);
    }
  };

  recc(root, 0);
  return result;
};

//LEARNING
// 1. When we use BFS we can have for inside the while (queue.length > 0) { this way we can go over the whole level.
// 2. When we use BFS we should be careful if root is null/empty because we add it to the queue.
// 3. We can use while(array.length) but not while(array) because empty array [] and empty objects is truthy
