// const a = "5";
// const b = "2";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

// console.log(Math.random());
// console.log(Math.random()+1); +1 is used so that outcome should be >=1



// ++++++++++++++++++++++++ Understanding the basic concept of Dice +++++++++++++++++++++++++++++++++++++++
const min= 1
const max= 6

console.log(Math.floor (Math.random() * max-min +1) + min );

// max-min +1 is used to set the range b/w 1-6
//  + min is used to guarantee the outcome > min range 

