// backtracking - tree, string solution
var generateParenthesis = function (n) {
  const result = [];
  const backtrack = (item, leftNumber, rightNumber) => {
    if (item.length === n * 2) {
      result.push(item);
      return;
    }

    if (leftNumber < n) {
      backtrack(item + "(", leftNumber + 1, rightNumber);
    }

    if (rightNumber < leftNumber) {
      backtrack(item + ")", leftNumber, rightNumber + 1);
    }
  };

  backtrack("", 0, 0);
  return result;
};
console.log(generateParenthesis(3));

// STACK
var generateParenthesis2 = function (n) {
  let stack = [];
  let result = [];

  const backTracking = (opening, closing) => {
    if (opening === n && closing === n) {
      result.push(stack.join(""));
      return;
    }

    if (opening < n) {
      stack.push("(");
      backTracking(opening + 1, closing);
      stack.pop();
    }

    if (closing < opening) {
      stack.push(")");
      backTracking(opening, closing + 1);
      stack.pop();
    }
  };
  backTracking(0, 0);
  return result;
};

console.log(generateParenthesis2(3));

//LEARNING
// Backtracking is solution when we go from the answer to the questions figuring the logic
// When we do recursion we should be careful not to change the value before we pass it because for the next run it is already changed:

// WRONG
// if (leftNumber < n) {
//   leftNumber++; // WRONG we should not change the value just pass leftNumber +1 in method
//   backtrack(item + "(", leftNumber, rightNumber);
// }

// if (rightNumber < leftNumber) {
//   backtrack(item + ")", leftNumber, rightNumber + 1); // here the number is leftNumber is already increased
// }
