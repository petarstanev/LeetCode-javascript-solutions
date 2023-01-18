// Sorting words and using letters as hashmap
// Time: O(n log(n))
// Space: O(n)
var groupAnagrams1 = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let orderLetters = strs[i].split("").sort().join("");
    if (map.has(orderLetters)) {
      const letterValue = map.get(orderLetters);
      letterValue.push(strs[i]);
    } else {
      map.set(orderLetters, [strs[i]]);
    }
  }
  const result = [];
  for (const lettersGroup of map.values()) {
    result.push(lettersGroup);
  }

  return result;
};

console.log(groupAnagrams1(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Convert letters to array of numbers and use it as a key without sorting
// Time: O(m*n) //m -number of strings * average length of a string.
// https://www.youtube.com/watch?v=vzdNOK2oB2E&t=3s
var groupAnagrams2 = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const letters = strs[i];
    let keyArr = Array(26).fill(0); // Create array for all letters that we use as a key

    for (let n = 0; n < letters.length; n++) {
      keyArr[letters.charCodeAt(n) - "a".charCodeAt(0)] += 1; //Add +1 for each letter that exist
    }
    const key = keyArr.join(","); // we need , so if we have number 10 of letters to not break
    if (map.has(key)) {
      map.get(key).push(strs[i]);
    } else {
      map.set(key, [strs[i]]);
    }
  }

  const result = [];
  for (const letters of map.values()) {
    result.push(letters);
  }

  return result;
};

console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams2(["bdddddddddd", "bbbbbbbbbbc"]));

// Don't forget .length
// use 'abc'.charAt(0) to get char at a position
// use 'a'.charCodeAt(0) to get index of a character (result 97)
// use 'a'.charCodeAt(x) to get index of a character (result 97) works with a string default is 0
// Learn Array(26) and .fill(0)
