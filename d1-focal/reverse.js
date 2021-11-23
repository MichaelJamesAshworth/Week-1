const args = process.argv;
let list = args.slice(2);
let newString = "";
for (let i = 0; i < list.length; i++) {
  newString = "";
  for (let x = list[i].length - 1; x >= 0; x--) {
    newString += list[i][x];
  }
  console.log(newString);
}

// Solving Logic
// create a variable to hold the arguements passed to the command line
// get rid of the first two outputs with slice(2)


//Can we solve using a function???
const reverseMe = function(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

const args = process.argv;

fo

