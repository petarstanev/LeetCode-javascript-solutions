// Time: O(n)
// Space: O(1)

var isValidBST = function (root) {
    return isValidBSTR(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};

var isValidBSTR = function (root, minValue, maxValue) {
    if (minValue < root.val && root.val < maxValue) {
        if (root.left && root.right) {
            return isValidBSTR(root.left, minValue, root.val) && isValidBSTR(root.right, root.val, maxValue);
        }

        if (root.left) {
            return isValidBSTR(root.left, minValue, root.val);
        }

        if (root.right) {
            return isValidBSTR(root.right, root.val, maxValue);
        }

        return true;
    }

    return false;
};

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const testA = new TreeNode(2);
testA.left = new TreeNode(1);
testA.right = new TreeNode(3);
console.log(isValidBST(testA), "should be true");

const testB = new TreeNode(4);
testB.left = new TreeNode(1);
testB.right = new TreeNode(6);
testB.right.left = new TreeNode(3); //wrong 3 < 4
testB.right.right = new TreeNode(8);

console.log(isValidBST(testB), "should be false");
