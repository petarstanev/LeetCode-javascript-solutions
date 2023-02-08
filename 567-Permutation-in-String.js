/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//LEARNING when the information is only lower case or only uppercase we should consider map of all letters
//THERE IS A BETTER SOLUTION
var checkInclusion = function (s1, s2) {
    let map = new Map();

    for (let letter of s1) {
        let count = map.get(letter) || 0;
        count++;
        map.set(letter, count);
    }

    let tempMap = new Map();
    for (let r = 0; r < s2.length; r++) { //LEARNING dont forget to use ()>
        if (r >= s1.length) {
            let oldValue = tempMap.get(s2[r - s1.length])
            oldValue--;
            tempMap.set(s2[r - s1.length], oldValue);
        }
        let tempValue = tempMap.get(s2[r]) || 0;
        tempValue++;
        tempMap.set(s2[r], tempValue);
        let valid = true;
        for (let [key, value] of map.entries()) {
            if (value !== tempMap.get(key)) {
                valid = false;
            }
        }
        if (valid) return true;
    }

    return false;
};