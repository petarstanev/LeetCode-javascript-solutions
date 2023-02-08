// O (26*n) = O(n) - because we run for for each letter
// Space O(1)
var characterReplacement = function (s, k) {
    let l = 0;
    let map = new Map();
    let result = 0;

    for (let r = 0; r < s.length; r++) {
        let count = map.get(s[r]) || 0;
        count++;
        map.set(s[r], count);
        let size = (r - l) + 1;

        let maxValue = 0;
        for (let value of map.values()) {
            maxValue = Math.max(maxValue, value);
        }

        if (size - maxValue <= k) {
            //solution
            result = Math.max(result, size);
        } else {
            //move left
            let lValue = map.get(s[l]);
            lValue--;
            map.set(s[l], lValue);
            l++;
        }
    }

    return result;
};