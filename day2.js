// Problem-1 (Positive/Negative/Zero Number)
let number1 = 10;

if (number1 > 0) {
  console.log("Positive");
} else if (number1 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//Problem-2 (Even/Odd Problem)
let number2 = 100;

if (number2 % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// Problem-3 (Classify according to age)
let age = 40;

if (age < 13) {
  console.log("child");
} else if (age >= 13 && age < 20) {
  console.log("teenager");
} else if (age >= 20 && age < 65) {
  console.log("adult");
} else {
  console.log("senior");
}
