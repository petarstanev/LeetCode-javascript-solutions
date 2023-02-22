
var singleNonDuplicate = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        console.log(left, right, mid);

        if (mid % 2 === 0 && nums[mid] === nums[mid + 1]) {
            //correct even
            left = mid + 1;
        } else if (mid % 2 !== 0 && nums[mid] === nums[mid - 1]) {
            //correct odd
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return nums[left];
};

// LEARNING
// 1. Always check what are you returning index or number.