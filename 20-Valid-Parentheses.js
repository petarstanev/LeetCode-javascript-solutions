var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if ("(" === s[i] || "[" === s[i] || "{" === s[i]) {
      stack.push(s[i]);
    } else {
      let bracket = stack.pop();
      if (bracket) {
        if (
          !(
            (bracket === "(" && s[i] === ")") ||
            (bracket === "[" && s[i] === "]") ||
            (bracket === "{" && s[i] === "}")
          )
        ) {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()(){})"));
//"()[){}"
