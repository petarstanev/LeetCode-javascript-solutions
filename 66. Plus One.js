/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let reminder = true;
    let i = digits.length - 1;

    while (reminder) {
        if (i < 0) {
            digits.unshift(1);
            reminder = false;
        } else {
            if (++digits[i] === 10) {
                digits[i] = 0;
            } else {
                reminder = false;
            }
        }
        i--;
    }

    return digits;
};