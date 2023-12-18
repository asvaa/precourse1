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

//!У нас есть такой массив. При помощи методов slice и join получи строку
//!"Не сдавайтесь, не сдавайтесь, никогда, черт вас подери не сдавайтесь"
// let arr = [
//   "сдавайтесь",
//   "сдавайтесь",
//   "Не сдавайтесь",
//   "не сдавайтесь",
//   "никогда, черт вас подери не сдавайтесь",
//   "при первой же трудности всегда сдавайтесь",
// ];
// let Array =
//   arr.slice(2, 3).join("") +
//   ", " +
//   arr.slice(2, 3).join("") +
//   ", " +
//   arr.slice(4, 5).join("");

// console.log(Array);

// let fruits = ["Яблоко", "Апельсин", "Слива"];

// let i = 0;
// while (i < fruits.length) {
//     console.log(fruits[i]);
//     i++;
// }

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// fruits.forEach(fruit => console.log(fruit));

// let mappedFruits = fruits.map(fruit => fruit);

// console.log(fruits.filter(el => el === "Слива")); // ОСТАВИТЬ "Слива"
// console.log(fruits.filter(el => el !== "Слива")); // ОСТАВИТЬ ВСЕ КРОМЕ "Слива"

//!Выведи только тех юзеров у кого id не больше 2.

// const users = [
//   {
//     id: 1,
//     name: "John",
//     surName: "Doe",
//     address: "123 Main St",
//   },
//   {
//     id: 2,
//     name: "Jane",
//     surName: "Smith",
//     address: "456 Elm St",
//   },
//   {
//     id: 3,
//     name: "Tom",
//     surName: "Johnson",
//     address: "789 Oak St",
//   },
// ];
// for (let i = 0; i < users.length; i++){
//   if(users[i].id <= 2){
//     console.log(users[i]);
//   }
// }

// обновить имя у второго юзера
// const users = [
//   {
//     id: 1,
//     name: "John",
//     surName: "Doe",
//     address: "123 Main St",
//   },
// ];
// console.log(
//   users.map((user) => (user.id === 1 ? { ...user, user: "Alice" } : user))
// );

//!добавить новый объект
// const users = [
//   { id: 1, user: "John", surName: "Doe", address: "123 Main St" },
//   { id: 2, user: "Jane", surName: "Smith", address: "456 Oak St" },
//   { id: 3, user: "Alex", surName: "Johnson", address: "789 Elm St" },
// ];

// const newUser = {
//   id: 4,
//   user: "Emily",
//   surName: "Davis",
//   address: "321 Pine St",
// };

// const updatedUsers = [...users, newUser];
// console.log(updatedUsers);

//!При помощи map поменяйте "JS" на 'I like JS":
// const tasks = [
//   { id: 1, title: "HTML&CSS", isDone: true },
//   { id: 2, title: "JS", isDone: true },
//   { id: 3, title: "ReactJS", isDone: false },
// ];

// const taskskys = tasks.map((task) => {
//   if (task.title === "JS") {
//     return { ...task, title: "I like JS" };
//   }
//   return task;
// });
// console.log(taskskys);

//!Добавь объект в тот же самый массив.
// const tasks = [
//   { id: 1, title: "HTML&CSS", isDone: true },
//   { id: 2, title: "JS", isDone: true },
//   { id: 3, title: "ReactJS", isDone: false },
// ];

// const updatedTasks = tasks.map(task => {
//   return task;
// });

//! Добавляем новый объект в массив
// const newTask = { id: 4, title: "New Task", isDone: true };
// updatedTasks.push(newTask);

// console.log(updatedTasks);

// const numbers = [
//   [1, 2, 3, 4, 5],
//   [10, 20, 30, 40, 50],
//   [100, 200, 300, 400, 500],
// ];

// numbers.map((row) => console.log(row));

// numbers.map((row) => {
//   row.map((number) => console.log(number));
// });
