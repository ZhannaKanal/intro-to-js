const character = "#";
const count = 8;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
// all code without comments and unnecessary codes

const newList = [1, 3, 4, 5];
const pushed = newList.push(6);
console.log(newList);
const unshifted = newList.unshift(0);
console.log(newList)
const shifted = newList.shift();
console.log(newList)
const popped = newList.pop();
console.log(newList);
console.log(newList, pushed, newList, unshifted, shifted, popped);