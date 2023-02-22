// Time: O(n^2)
var isBalanced = function (root) {
    let dfs = (elem, depth) => {
        if (elem) {
            let leftDepth = dfs(elem.left, depth);
            let rightDepth = dfs(elem.right, depth);
            let result = leftDepth[0] && rightDepth[0] && Math.abs(leftDepth[1] - rightDepth[1]) < 2;
            console.log(elem.val, leftDepth, rightDepth, result);
            return [result, 1 + Math.max(leftDepth[1], rightDepth[1])];
        }
        return [true, 0];
    }

    return dfs(root, 0)[0];
};
//Learning weh use recursion we can return array of is it valid and use &&. This way if we have false we can skip the calculations.

