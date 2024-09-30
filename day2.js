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

//Problem-4 (Grade Distribution)
let score = 80;

if (score >= 80 && score <= 100) {
  console.log("A+");
} else if (score >= 70 && score < 80) {
  console.log("A");
} else if (score >= 60 && score < 70) {
  console.log("A-");
} else if (score >= 50 && score < 60) {
  console.log("B");
} else if (score >= 40 && score < 50) {
  console.log("C");
} else if (score >= 33 && score < 40) {
  console.log("D");
} else {
  console.log("F");
}
