const args = process.argv;
let list = args.slice(2);
const pigLatinCreate = function (string) {
  let slicedStr = string.slice(1); // output = ig
  let firstChar = string[0]; // output = P
  let newStr = slicedStr + firstChar + "ay "; // igP
  return newStr; 
};
let result = "";
for (let i = 0; i < list.length; i++) {
  result += pigLatinCreate(list[i]);
}
console.log(result);

//Alternative way of solving
/*const args = process.argv;
let list = args.slice(2);
let latin = "";
let solution = "";

for (let i = 0; i < list.length; i++) {
  latin = "";
  for (let j = 1; j < list[i].length; j++) {
    latin += list[i][j];
  }
  latin += list[i][0] + "ay ";
  solution += latin;
}
console.log(solution.trim());
*/


// Solving Logic
// 