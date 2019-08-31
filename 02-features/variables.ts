// Dates

const date = new Date();
console.log(date.toISOString());

// Objects

const person = {
  age: 10
};

// person.lol; <== Error

class Color {}

const color = new Color();
// color.lol; <== Error

/**
 * Type inference
 */

let str = "Hola";
// str = 10; <== Error

// Inference won't work if initialization occurs after the declaration
let num;
num = 10;
num = "lol";

/**
 * Type annotations
 */

let apples: number = 5;
// let speed: number = ''; <== Error
let nothing: null = null;
let notDefined: undefined = undefined;

/**
 * Built in objects
 */

let myDate: Date = new Date();

/**
 * Arrays
 */
let colors: string[] = ["red", "blue", "green"];
let colorsAndNumbers: (string | number)[] = [1, "cyan"];

/**
 * Classes & object
 */
class Car {}
const car: Car = new Car();
let point: { x: number; y: number } = {
  x: 10,
  y: 20.4
};

/**
 * Function
 */

function logNumber(num: number): void {
  console.log(num);
}

const mutateNumber: (num: number) => { num: number; square: number } = (
  num: number
) => {
  return { num, square: num ** num };
};

const mutateNumberHOF = (
  fn: (num: number) => { num: number; square: number },
  num: number
) => fn(num);

const logNumberHOF = (fn: (num: number) => void, num: number) => fn(num);

console.log(mutateNumberHOF(mutateNumber, 10));
console.log(logNumberHOF(mutateNumber, 10));
console.log(logNumberHOF(logNumber, 10));

/**
 * When to use type annotations
 */

// 1) Functions that returns any

const json = '{"x": 10, "y": 5}';
const coordinates: { x: number; y: number } = JSON.parse(json);
// console.log(coordinates.lol); <== Error
console.log(coordinates);

// 2) When we declare a variable in one line a assign it later

let words = ["red", "green", "blue"];
let foundWord: boolean; // type annotations, best => let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) When we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
