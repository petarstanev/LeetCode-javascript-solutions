/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  let number2 = 0;
  let number1 = 0;
  let result = 0;

  for (let token of tokens) {
    switch (token) {
      case "+":
        result = stack.pop() + stack.pop();
        stack.push(result);
        break;
      case "-":
        number2 = stack.pop();
        number1 = stack.pop();
        result = number1 - number2;
        stack.push(result);
        break;
      case "*":
        result = stack.pop() * stack.pop();
        stack.push(result);
        break;
      case "/":
        number2 = stack.pop();
        number1 = stack.pop();
        result = number1 / number2;

        stack.push(Math.trunc(result));

        break;
      default:
        stack.push(parseInt(token));
    }
  }

  return stack.pop();
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
));

//LEARNING
// Math.round() - round to nearest number 1.4->1 1.5->2 -1.5->-1 -1.6->-2
// Math.floor() - round to 0. In negative numbers round down integer. 1.5->1 -1.5->-2
// Math.trunc() - remove fraction from number. so 1.5-> 1 -1.5->-1
// Math.ceiling() - round to next integer.  In negative numbers round down to 0.  1.5->2 -1.5->-1
// 
// Math.abs(2,5) - difference between two values
//
