// const names = ["John", "James", "Mark", "Luke"];
// console.log(names);

// //array method - does it mutate the array? Push does mutate the array.
// names.push("Jack");

// console.log(names);

// const lastInList = names.pop();
// console.log(lastInList);
// console.log(names);

// Goals of class: Callback Syntax and Array Methods
//methods are all functions. give function an argument. Functions can also take other functions. Array. For each. Anonymous arrow function. REVIEW ARROW FUNCTIONS. Callback function bc it is inside another.
/** Q's to ask: Does this method mutate the array on which its called? Does the method return a value - if so, what is it?
 * forEach(), the answer to 1 is NO. The answer to 2 is NO.
 */

// const foods = ["hamburger", "fried rice", "enchiladas", "fried chicken"];
// foods.forEach((food) => {
//   console.log(`I love ${food}!`);
// });
// // console.log (foods);

const foods = ["hamburger", "fried rice", "enchiladas", "fried chicken"];
let foodStatement = "I really like ";

foods.forEach((item, index) => {
  console.log(item);
  foodStatement += ` ${item}${index === foods.length - 1 ? "." : ""}`;
});

//A ternary operator in JavaScript is a concise way to write an if-else statement. EX: condition ? expressionIfTrue : expressionIfFalse;

console.log(foods);
console.log(foodStatement);

//ARRAY.map - when we get to react, this will be your best friend. map = mapping. Unlike forEach, mapping returns something. MAP does not mutate the array, but it does return a value, namely a new array with values returned in the callback passed to .map().

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubles = numbers.map((number) => number * 2);

console.log(doubles);
console.log(numbers);

// const doubles = numbers.map( (number) => {
//    return number * 2;
// });
/** IF there are multiple lines in the body, then we will need to have RETURN in the body */

const names = ["john", "Kevin", "jill", "bob", "MIKE"];
const formattedNames = names.map((person) => {
  console.log(person[0]);
  console.log(person.slice(1));
  // console.log(person.slice(1,3));
  return person[0].toUpperCase() + person.slice(1).toLowerCase();
});

console.log(formattedNames);

//ARRAY.reduce - takes 2 arguments. Have to return some value (like map).

// numbers.reduce((accumulator, current) => {
//   return (accumulator += number);
// });

// number.reduce((total, current)=>{
// }, 100);

const nums2 = [3, 10, 50];
const total = nums2.reduce((total, currentNumber) => {
  return (total += currentNumber);
}, 0);
console.log(total);

/** Here is a solution for the froyo workshop using .reduce() */

// function countFlavorsReduce(flavors) {
//   return flavors.reduce((counts, flavor) => {
//     if (flavor in counts) {
//       counts[flavor] += 1;
//     } else {
//       counts[flavor] = 1;
//     }
//     return counts;
//   }, {});
// }

// Notice how we return an object containing the frequency analysis as the single value.

//Reduce works on arrays
// const stringToReverse = "aberichliebedich";
// console.log(stringToReverse.split("").reduce((reversed, currentLetter)=>{}));

const stringToReverse = "cat";
console.log(
  stringToReverse.split("").reduce((reversed, currentLetter) => {
    return (currentLetter += reversed);
  })
);

someName.split("").reduce((analysis, currentLetter) => {
  analysis[currentLetter]
    ? (analysis[currentLetter] += 1)
    : (analysis[currentLetter] = 1);
  return analysis;
}, {});

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

const sumWithInitial = array1.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, initialValue);
