const validBoard = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  ["3", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

var isValidSudoku1 = function (board) {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    if (!isValidSet(row)) {
      return false;
    }
  }

  for (let i = 0; i < board.length; i++) {
    let column = [];
    for (let n = 0; n < board.length; n++) {
      column.push(board[n][i]);
    }
    if (!isValidSet(column)) {
      return false;
    }
  }

  for (let xParent = 0; xParent < 3; xParent++) {
    for (let yParent = 0; yParent < 3; yParent++) {
      let square = [];
      for (let xChild = 0; xChild < 3; xChild++) {
        for (let yChild = 0; yChild < 3; yChild++) {
          const xPoint = xParent * 3 + xChild;
          const yPoint = yParent * 3 + yChild;

          square.push(board[xPoint][yPoint]);
        }
      }
      if (!isValidSet(square)) {
        return false;
      }
    }
  }

  return true;
};

function isValidSet(row) {
  const rowSet = new Set();
  for (let n = 0; n < row.length; n++) {
    if (row[n] !== ".") {
      if (rowSet.has(row[n])) {
        return false;
      }
      rowSet.add(row[n]);
    }
  }

  return true;
}

var isValidSudoku2 = function (board) {
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set();
    const columnSet = new Set();
    const boxSet = new Set();
    for (let n = 0; n < 9; n++) {
      if (board[i][n] === ".") continue;

      if (
        rowSet.has(board[i][n]) ||
        columnSet.has(board[i][n]) ||
        boxSet.has(board[i][n])
      ) {
        return false;
      }
    }
  }
};

console.log(isValidSudoku2(validBoard));
// LEARN
// If we have board size that doesn't change we can set value 9 instead board size
// And calculate exact O(9^2);
// If on one line without { } -> if (x) continue;
