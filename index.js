// Просто пример:
let marks = [
  {
    title: "JS",
    value: 10,
  },
  {
    title: "CS",
    value: 6,
  },
];
// отобразим в консоли все заголовки с оценками
for (let i = 0; i <= marks.length; i++) {
  let mark = marks[i];
  console.log("title: " + mark.title, ", mark: " + mark.value);
}
