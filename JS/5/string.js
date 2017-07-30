// String Manipulation

var number1 = 10;
var number2 = '10';

// console.log(number1 + parseInt(number2));

var para = "Lorem ipsum dolor sit amet.";
var lipsum = " Lorem \"ipsum dolor\" sit amet. ";

//lipsum = lipsum.trim();
//console.log("Length: " + lipsum.length);

// console.log("Lower Case: " + para.toLowerCase());
// console.log("Upper Case: " + para.toUpperCase());

var index = para.indexOf('ipsum');
// console.log("Index: " + index);

// var slice = para.slice(index, para.length);
// console.log("Slice: " + slice);

para = para.replace('ipsum', 'badar');
console.log("Para: " + para);