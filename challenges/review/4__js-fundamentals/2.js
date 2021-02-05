// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.

function num(str){
  let count = 0;
  let numstr = str.split("");
  for(let i=0; i<numstr.length; i++){
    count++;
  }
  return count;
}
