/*
Your team is writing a fancy new text editor 
and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings 
and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. 
Notice the colon and space in between.
*/


// Solution

let number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

// or

const digit = array => array.map((n, i) => `${i + 1}: ${n}`);

// or

let integer = function(arr) {
let newArr = [];
  if (arr. length === 0) {
    return [];
  } else {
    for (let i = 0, len = arr.length; i < len; i += 1) {
      newArr.push((i + 1) + ': ' + arr[i]);
    }
  }
  return newArr;
}

