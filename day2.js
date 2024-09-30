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

// Problem-5 (Leap Year)
let year = 2009;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

// Problem-6 (Vowel/Consonant)
let char = "a";

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u" ||
  char === "A" ||
  char === "E" ||
  char === "I" ||
  char === "O" ||
  char === "U"
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

// Problem-7 (Number Divisible by 3 and 5 ?)
let number3 = 15;

if (number3 % 3 === 0 && number3 % 5 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// Problem-8 (Password strength based on length)

let password = "yourpassword";

if (password.length >= 12) {
  console.log("Strong password");
} else if (password.length >= 8 && password.length < 12) {
  console.log("Moderate password");
} else {
  console.log("Weak password");
}

// Problem-9 (Number in a Range)

let number4 = 25;

if (number4 >= 1 && number4 <= 10) {
  console.log("1-10");
} else if (number4 >= 11 && number4 <= 20) {
  console.log("11-20");
} else if (number4 >= 21 && number4 <= 30) {
  console.log("21-30");
} else {
  console.log(false);
}

// Problem-10 (Largest among 3 numbers)

let num1 = 10;
let num2 = 25;
let num3 = 15;
let largest = 0;

if (num1 > num2 && num1 > num3) {
  largest = num1;
} else if (num2 > num1 && num2 > num3) {
  largest = num2;
} else {
  largest = num3;
}

console.log(largest);
