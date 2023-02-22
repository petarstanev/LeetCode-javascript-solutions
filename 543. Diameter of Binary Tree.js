 //Time: O(n^2)
 //Space: O(max height)
 var diameterOfBinaryTree = function (root) {
    let maxDistance = 0;

    let maxDepth = (element, depth) => {
        if (element) {
            let leftMaxDepth = maxDepth(element.left, depth);
            let rightMaxDepth = maxDepth(element.right, depth);
            maxDistance = Math.max(leftMaxDepth + rightMaxDepth, maxDistance);
            return 1 + Math.max(leftMaxDepth, rightMaxDepth);
        }
        return depth;
    }
    maxDepth(root, 0);

    return maxDistance;
};

//FASTER as we go dfs and go from the bottom
//DFS is faster than BFS.
var diameterOfBinaryTree = function (root) {
    let max = 0;

    let dfs = (element) => {
        if (element) {
            let left = dfs(element.left);
            let right = dfs(element.right);

            max = Math.max(left + right + 2, max);

            return 1 + Math.max(left, right);
        }
        return -1;
    }
    dfs(root);
    return max;
};

//LEARNING
//1. To calc big O for recursion it is usually O(2^x) where x is the number of calls inside the method. How many times call maxDepth inside.
// 2. We can run binary search on binary search tree. which is O(log(n))
// 3. Sorting is big O of (n log n)
// 4. If we have big O of n + n log n we select the bigger -> n log n
// 5. DFS is faster than BFS.