// const dinner = {
//   Bikna: {
//     meal: "cheeseburger",
//     cost: 12,
//   },
//   John: {
//     meal: "steak",
//     cost: 20,
//   },
//   Amy: {
//     meal: "soup",
//     cost: 8,
//   },
//   Mateo: {
//     meal: "mac and cheese",
//     cost: 14,
//   },
//   Cheyenne: {
//     meal: "soup and salad combo",
//     cost: 16,
//   },
// };

const dinner = {
  cheeseburger: 12,
  steak: 20,
  soup: 8,
  macAndCheese: 14,
  soupAndSalad: 16,
};

console.log(Object.keys(dinner));

console.log(Object.values(dinner));

// const prices = Object.values(dinner);
// let total = 0;
// for (price of prices) {
//   total += price;
// }

const prices = Object.values(dinner);
let totalCost = 0;
for (let i = 0; i < prices.length; i++) {
  totalCost += prices[i];
}
console.log(totalCost);

for (const meal in dinner) {
  console.log(`${meal} is $${dinner[meal]}`);
}

// function calculateDinnerTicket(dinnerObj){
//     let totalCost = 0;
//     for (const key in dinnerObj)
// }

function calculateCost(meal) {
  let total = 0;
  for (const food in meal) {
    total += meal[food];
  }
  return total;
}
