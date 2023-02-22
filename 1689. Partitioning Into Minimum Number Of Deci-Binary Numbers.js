/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
    return Math.max(...String(n).split(''));
};

//LEARNING
// 1. We can use String(number) to get string or number + ''
// 2. To use Math.max() with array we need to use spread operator
