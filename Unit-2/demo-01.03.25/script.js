// for (let i = 1; i <= 10; i++) {
//   // body of the loop
//   console.log(i);
// }

/* NOTES ON THE LOOP
  in the (), we have three things:
  1. We INITIALIZE our INDEX VARIABLE, i to a starting value;
  2. We have a LOOP TERMINATION CONDITION, here, i < 10
  3. We UPDATE the index variable, here, i++

  N.B. IF THE LOOP TERMINATION IS FALSE AT THE START, THE LOOP NEVER RUNS!!!
  e.g.:

   for (let i = 10; i < 10; i++) {
  console.log(i);
}
*/

// Looping through arrays

// const names = ["James", "Dietrich", "Lalo", "Francois", "Giovanni", "Ivan"];

// Loop FORWARD through the array, starting at the first item:

// for (let i = 0; i < names.length; i++) {
//   console.log(`Hello, ${names[i]}!`);
// }

// Loop BACKWARDS through the array, starting with the last item:
// for (let i = names.length - 1; i >= 0; i--) {
//   console.log(`Hello, ${names[i]}`);
// }

// Loop forward through array, but only output odd numbers:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i += 2) {
//   console.log(numbers[i]);
// }

// Generate a 'random' integer between 1 and 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;
let userHasGuessed = false;
let numTries = 0;
let userQuit = false;
while (!userHasGuessed && numTries < 3) {
  console.log(numberToGuess);
  // Prompt the user to guess the number, and store the user's guess in a variable
  let usersGuess = prompt("I have a number in mind. Try to guess!");
  console.log(usersGuess);
  if (usersGuess === null) {
    alert("Fine, be that way.");
    userQuit = true;
    break;
  }
  usersGuess = parseInt(usersGuess);
  if (isNaN(usersGuess)) {
    alert("Please enter a valid integer");
    continue;
  }
  // Check the user's guess against the random number; if the guess is correct, alert.
  if (usersGuess === numberToGuess) {
    alert("Great, you got it!");
    // we need to exit the loop, so we change the condition by updating the flag
    userHasGuessed = true;
  } else {
    alert("Sorry, wrong guess");
    numTries++;
  }
}

if (!userHasGuessed && !userQuit) {
  alert("Sorry, better luck next time");
}

// while(some condition that evaluates to a boolean- this is a LOOP TERMINATION CONDITION){
//   // Do something while the condition is true - you must change your loop termination condition
//   // at some point in here
// }

// let currentNumber = 1;
// while (currentNumber <= 10) {
//   console.log(currentNumber);
//   currentNumber++;
// }
