//Time: O( log(n) + log(m));
var searchMatrix = function (matrix, target) {
  let up = 0;
  let down = matrix.length - 1;

  while (up <= down) {
    let midRow = up + Math.floor((down - up) / 2);
    if (
      target >= matrix[midRow][0] &&
      target <= matrix[midRow][matrix[midRow].length - 1]
    ) {
      //found row
      let l = 0;
      let r = matrix[midRow].length - 1;

      while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (matrix[midRow][mid] < target) {
          l = mid + 1;
        } else if (matrix[midRow][mid] > target) {
          r = mid - 1; //LEARNING
        } else {
          return true;
        }
      }
      return false;
    } else if (target < matrix[midRow][0]) {
      //down
      down = midRow - 1;
    } else if (target > matrix[midRow][0]) {
      //up
      up = midRow + 1;
    }
  }

  return false;
};

console.log(searchMatrix([[1, 3]], 3)); //true
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
); //true

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
); //false
//LEARNING
// IN binary search when we move left or right it should be left = mid+1; or right = mid-1; //because we have check mid already;
