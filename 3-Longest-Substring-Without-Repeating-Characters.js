//Time: O(n)
//Space: O(n) //because of the set
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let l = 0;
  let result = 0;

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    result = Math.max(result, r - l + 1);
  }

  return result;
};
// LEARNING
// set and map have method delete() 
