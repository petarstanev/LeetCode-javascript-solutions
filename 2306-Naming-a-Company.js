var distinctNames = function (ideas) {
  let arr = [];
  for (let i = 0; i < 26; i++) {
    arr[i] = new Set();
  }

  for (let idea of ideas) {
    let charCode = idea.charCodeAt(0) - "a".charCodeAt(0);
    arr[charCode].add(idea.substring(1));
  }

  let same = [];
  for (let i = 0; i < 26; i++) {
    same[i] = Array(26).fill(0);
  }

  for (let i = 0; i < 26; i++) {
    for (let s of arr[i]) {
      for (let j = i + 1; j < 26; j++) {
        if (arr[j].has(s)) {
          same[i][j]++;
        }
      }
    }
  }

  let result = 0;
  for (let i = 0; i < 26; i++) {
    for (let j = i+1; j < 26; j++) {
      result += 2 * (arr[i].size - same[i][j]) * (arr[j].size - same[i][j]);
    }
  }

  return result;
};

console.log(distinctNames(["coffee", "donuts", "time", "toffee"]));

//LEARNING
//1. Use  s.substring(1) //to get string without first letter
//2. When there is only small letters in task it might require a map for every letter as a key
// 3. Array.includes(x) check if array has a value x
