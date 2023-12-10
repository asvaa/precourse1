// function showMe() {
//   console.log("Hellow!");
// }
// showMe()

// function showMeNew(value) {
//   console.log(value);
// }
// showMeNew("Hellow!")

// function showMessage2(val = "Hellow!") {
//  console.log(val)
// }
// showMessage2()

// function showMessage3(val = "Hellow!") {
//   console.log(val)
// }
// showMessage3('By!')

// // Стрелочная функция

// const newSum = (a, b) => {
//   console.log(a + b)
// }
// newSum(3, 4)

// const newSum2 = (a, b) => console.log(a + b)

// const isPositive = (number) => {
// if (number > 0) {
// return true;
// } else {
// return false;
// }
// };
// console.log(isPositive(2));
// console.log(isPositive(-2));

// let giveMeResult = "Monday";
// if (giveMeResult === "Saturday" || giveMeResult === "Sunday") {
// giveMeResult = "dayOff";
// } else {
// giveMeResult = "weekday";
// }
// switch (giveMeResult) {
// case "weekday":
// console.log("Будний день");
// break;
//
// case "dayOff":
// console.log("Выходной день");
// break;
// default:
// console.log("Некорректное значение дня недели");
// }

//!Напишите функцию isInRange, которая принимает один
//!аргумент - число, и возвращает true,
//!если число находится в диапазоне от 10 до 20
//!включительно или равно 0 или равно 100, и false в противном случае.
//!Используйте логические операторы && и ||.

// function isInRange(number) {
// return (number >= 10 && number <= 20) || number === 0 || number === 100;
// }
// console.log(isInRange(15));
// console.log(isInRange(21));
// console.log(isInRange(0));
// console.log(isInRange(100));

// function copyPrep(prep) {
  // const copiedPrep = { ...prep };
// 
  // copiedPrep.IsMarried = true;
  // return copiedPrep;
// }
// 
// const prep = {
  // name: "John",
  // age: 30,
  // job: "Engineer",
  // marriage: "Single",
// };
// 
// const updatedPrep = copyPrep(prep);
// console.log(updatedPrep);


//Пример исходный код
// function calculateTotalPrice(price, quantity) {
  // let discount = 0;
  // if (quantity > 10) {
    // discount = 0.1;
  // }
// 
  // const totalPrice = price * quantity;
  // const discountedPrice = totalPrice - totalPrice * discount;
// 
  // return discountedPrice;
// }
// 
// console.log(calculateTotalPrice(20, 15));
// 
//Рефакторинг кода
// function calculateTotalPrice(price, quantity) {
  // const discount = quantity > 10 ? 0.1 : 0;
// 
  // const totalPrice = price * quantity;
  // const discountedPrice = totalPrice * (1 - discount);
// 
  // return discountedPrice;
// }
// 
// console.log(calculateTotalPrice(20, 15));
// 