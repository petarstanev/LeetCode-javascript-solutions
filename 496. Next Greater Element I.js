/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map2 = new Map();
    let stack = [];

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && stack[stack.length - 1] < nums2[i]) {
            map2.set(stack.pop(), nums2[i]);
        }
        stack.push(nums2[i]);
    }

    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = map2.get(nums1[i]) || -1;
    }

    return nums1;
};

//LEARNING
// 1. It is O(n) because worse case we will not use the stack while at all
//