// Two stack implementation
var MinStack = function () {
  this.stack = [];
  this.minNumberStack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.minNumberStack.length > 0) {
    val = Math.min(
      this.minNumberStack[this.minNumberStack.length - 1],
      val
    );
  }
  this.minNumberStack.push(val);
};

MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minNumberStack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.minNumberStack[this.minNumberStack.length - 1];
};

// One stack implementation
var MinStack2 = function () {
  this.arr = [];
  this.currentMinValue = Number.MAX_SAFE_INTEGER;
};

MinStack2.prototype.push = function (val) {
  this.currentMinValue = Math.min(val, this.currentMinValue);
  this.arr.push([val, this.currentMinValue]);
};

MinStack2.prototype.pop = function () {
  this.arr.pop();
  if (this.arr.length > 0) {
    const [value, minValue] = this.arr[this.arr.length - 1];
    this.currentMinValue = minValue;
  } else {
    this.currentMinValue = Number.MAX_SAFE_INTEGER;
  }
};

MinStack2.prototype.top = function () {
  const [value] = this.arr[this.arr.length - 1];
  return value;
};

MinStack2.prototype.getMin = function () {
  const [value, minValue] = this.arr[this.arr.length - 1];
  return minValue;
};

const minStack = new MinStack();
//["MinStack","push","push","push","top","pop","getMin","pop","getMin","pop","push","top","getMin","push","top","getMin","pop","getMin"]
console.log(minStack.push(2147483646));
console.log(minStack.push(2147483646));
console.log(minStack.push(2147483647));
console.log(minStack.top());
console.log(minStack.pop());
debugger;
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.getMin());
console.log(minStack.pop());

//LEARNING
// To add property to js class with function use this.arr = [];
// To get max min number Number.MAX_SAFE_INTEGER;
// When we have a variable that we use to keep track we need to updated it when we pop and push
