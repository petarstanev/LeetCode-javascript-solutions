var majorityElement = function (nums) {
    let data = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in data) {
            data[nums[i]]++;
        } else {
            data[nums[i]] = 1;
        }
    }
    for (const a in data) {
        if (data[parseInt(a)] > nums.length / 2) {
            return a;
        }
    }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

/* Learning:

1. To check if property is in object we can use == undefined -> item not in object.
1.1 Or we can use if( property in object) {}
2. In object we use "in" to iterate over objects properties as strings. Then we can do data[property] to get value
3. Use parseInt to parse string to int.
4. For array in returns the keys of array 0,1,2. Of returns the values 4,6,5..
*/