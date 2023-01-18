// HashMap
// Time: O(n)
// Space: Time(n)
var isAnagram1 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sArr = s.split("");
  const tArr = t.split("");

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < sArr.length; i++) {
    let sValue = sMap.get(sArr[i]);
    if (!sValue) {
      sValue = 0;
    }
    sMap.set(sArr[i], sValue + 1);

    let tValue = tMap.get(tArr[i]);
    if (!tValue) {
      tValue = 0;
    }
    tMap.set(tArr[i], tValue + 1);
  }

  let result = true;
  sMap.forEach((value, key) => {
    if (tMap.get(key) !== value) {
      result = false;
    }
  });
  return result;
};

console.log(isAnagram1("anagram", "nagaram")); // true
console.log(isAnagram1("rat", "car")); // false

// Sorting
// Time (n log(n))
// Space: (1) // It could be n also depends on sorting algorithm
var isAnagram2 = function (s, t) {
  const sResult = s.split("").sort().join("");
  const tResult = t.split("").sort().join("");
  return sResult === tResult;
};

isAnagram2("anagram", "nagaram"); // true
isAnagram2("rat", "car"); // false

function testCode(method, input, expected, inPlace) {
  let result = method(input);
  let output = inPlace ? input : result;

  if (output === expected) {
    console.log("%c PASS - output=" + output, "color: green");
  } else {
    console.log(
      "%c FAIL - output=" + output + " expected=" + expected,
      "color: red"
    );
  }
}
