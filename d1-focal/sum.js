const args = process.argv.slice(2);
console.log(args);
console.log(Number(process.argv[2]) + Number(process.argv[3]));

//Refactored
const sum = function(arg1, arg2) {
  return arg1 + arg2;
};
console.log(sum(4, 5));