//Object literal syntax
const carOne = {
  make: "Ford",
  model: "F150",
  color: "Silver",
  year: 2010,
  marketValue: 25000.5689,
  start: function () {
    console.log("starting");
  },
  getDescription: function () {
    console.log(
      `This ${this.year} ${this.color} ${this.make} ${this.model} is only ${this.marketValue}`
    );
  },
  getUserSelectedProperty(userProperty) {
    console.log(`you have selected ${this[userProperty]}`);
  },
};

console.log(carOne["make"]);

carOne.start();

carOne.getUserSelectedProperty("year");

carOne.getDescription();

const carTwo = {
  make: "Honda",
  model: "Accord",
  color: "Blue",
  year: 2012,
  marketValue: 11000,
  getDescription: function () {
    console.log(
      `This $ {this.year} ${this.color} ${this.make} ${this.model} is only ${this.marketValue}`
    );
  },
};

carTwo.getDescription();

console.log(carOne);
console.log(carTwo);

//access the make and model of CarOne and log them out
console.log(carOne.make);
console.log(carOne.model);
// console.log(carOne.["market-value"]);
console.log(`This car's value is $${carOne.marketValue.toFixed(3)}`);

// console.log(`This car's value is $${carOne.marketValue % 1 === 0: carOne.marketValue.toFixed(2)}`); ERRORS - Turnary

console.log(carTwo.make);
console.log(carTwo.model);
console.log(carTwo.year);

//update the year and market-value properties of CarOne
carOne.year = 2012;
carOne.marketValue = 26000.0;
console.log(carOne);

//SET a new property on carOne - Tint
carOne.tint = true;
console.log(carOne);

//create two employee objects - at minimum, properties must include 'employeeName', 'position', 'years' and 'salary';

const employeeOne = {
  employeeName: "John Doe",
  position: "Software Engineer",
  years: 5,
  salary: 220000,
};

const employeeTwo = {
  employeeName: "Jane Doe",
  position: "Account Executive",
  years: 8,
  salary: 200000,
};

const hrUserSelection = prompt(
  "Please enter the employee field you would like to see"
);
console.log(hrUserSelection);

console.log(employeeTwo[hrUserSelection]);

const bookOne = {
  title: "Great Expectations",
  author: "Charles Dickens",
  year: 1861,
  publisher: {
    name: "London Publishing House",
    headquarters: "London",
    locations: ["New York", "Mumbai", "Tokyo", "Paris", "Adelaide", "Lagos"],
    edition: "1st",
  },
};

console.log(bookOne.publisher.locations[1]);
console.log(bookOne);

delete bookOne.edition;
console.log(bookOne);

console.log(Object.keys(bookOne.publisher));

// ONE way to loop through an object and display all of its property values
// const bookKeys = Object.keys(bookOne.publisher);
// console.log(bookKeys);
// for (let i = 0; i < bookKeys.length; i++) {
//   console.log(bookOne.publisher[bookKeys[i]]);
// }

//for-in loop used specifically with objects - a more modern way to do the same thing

// for (key in bookOne.publisher) {
//   console.log(key);
//   console.log(bookOne.publisher[key]);
//   console.log("looping");
// }

// // for in - keywords. key = nickname

// console.log(Object.values(bookOne.publisher));

// const userName = prompt("enter a new username");
// const password = prompt("enter your new password");

// const newuser = {
//   userName: userName,
//   password: password,
// };

// console.log(newUser);

// SAME as above
// const newuser = {
//   userName,
//   password,
// };

// console.log(newUser);

const employeeVitals = {
  name: "John Paul",
  dob: "November 1, 2000",
  hometown: "Dallas, Texas",
};

const employementInfo = {
  name: "John Paul",
  position: "accountant",
  salary: 95000,
};

//Spread operator (...) used to combine data from two objects into one
const completeEmployeeInfo = {
  ...employeeVitals,
  ...employementInfo,
};

const completeEmployeeInfoV2 = {
  employeeVitals,
  employementInfo,
};

console.log(completeEmployeeInfo);
console.log(completeEmployeeInfoV2);

//example

const dogInfo = {
  name: "Max",
  age: "6 years",
  color: "black",
};

const dogType = {
  breed: "Chihuahua Mix",
  behavior: "yappy but loving",
};

const completeDogInfo = {
  ...dogInfo,
  ...dogType,
};

console.log(completeDogInfo);
