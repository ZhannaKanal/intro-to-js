//first task //pyramid generator
console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");
// tasks from 6 to 11
let character = "Hello";
console.log(character);
character = "World";
let secondCharacter;
secondCharacter = character;
console.log(secondCharacter);
// 12- 13
let profession = "teacher";
let age;
console.log(age);
console.log(profession);
//14-20
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
//21-22
rows[rows.length - 1] = 10;
console.log(rows);
//23-24
let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);
//25-26
rows.push("freeCodeCamp");
console.log(rows);
//27
let popped = rows.pop();
console.log(popped);
//28
let pushed = rows.push("freeCodeCamp");
console.log(pushed);
//29-32 const keyword
character = "#";
count = 8;
rows = [];
let inverted = true;
//33 Potential infinite loop detected on line 45. Tests may fail if this is not changed.
// for ("iterator"; "condition"; "iteration"){ }
//34-37
for (let i = 0; i < count; i = i + 1) {
  console.log(i);
}
//38
for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}
//39-43
for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
//44-47
for (let i = 0; i < count; i = i + 1) {
  //   rows.push(character.repeat(i));
  rows.push(character.repeat(i + 1));
}
result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
//48-56
function padRow(name) {
  return name;
}
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(5, 10);
console.log(sum);

const call = padRow();
console.log(call);
//57-60 after return keyword won't work returns and console.logs
function newPadRow(name) {
  const test = "Testing";
  console.log("This works");
  return test;
  return character + name;
  console.log("This works");
}
//61-70
function secondPadRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}
// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
  if (inverted) {
     rows.unshift(padRow(i, count));
  }
}
if (true) {
  console.log("Condition is true");
}
if (false) {
  console.log("Condition is true");
}
if ("false") {
  console.log("Condition is true");
}

result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
//82-83
if ("") {
  console.log("Condition is true");
} else if (5 < 10) {
  console.log("5 is less than 10");
} else {
  console.log("This is the else block");
}
//84-91
// let continueLoop = false;
let done = 0;
// while (continueLoop) {
//   done++;
//   rows.push(padRow(done, count));
//   if (done === count) {
//     continueLoop = false;
//   }
// }
//95-97
// while (rows.length < count) {
//   rows.push(padRow(rows.length + 1, count));
// }
//98 task is about commenting while loop
//99-100-101-102-103-104
/* //105
for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/
// 106-107-108
//109 remove
//110 uncommenting for loop on 109 line
//111 changing push to unshift on line 110
//112 added inverted on 45's line
//113-114 added if condition and the logic unshift