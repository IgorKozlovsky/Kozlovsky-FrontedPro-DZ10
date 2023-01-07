// Написати цикли, які зможуть:

// Вивести на сторінку в один рядок через кому числа від 10 до 20.
const arr1 = [];
for (let i = 10; i <= 20; i++) {
  arr1.push(i);
}
console.log(arr1.join(","));
// Вивести квадрати чисел від 10 до 20.
const arr2 = [];
for (let i = 10; i <= 20; i++) {
  arr2.push(i ** 2);
}
console.log(arr2.join(","));
// Вивести таблицю множення на 7.
for (let i = 1; i <= 10; i++) {
  console.log(`${i} * 7 = ${i * 7}`);
}
// Знайти суму всіх цілих чисел від 1 до 15.
for (let i = 1, sum = 0; i <= 15; i++) {
  sum += i;
  if (i === 15) {
    console.log(sum);
  }
}
// Знайти добуток усіх цілих чисел від 15 до 35.
for (let i = 15, mult = 1; i <= 35; i++) {
  mult *= i;
  if (i === 35) {
    console.log(mult);
  }
}
// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
for (let i = 1, average = 0; i <= 500; i++) {
  average += i;
  if (i === 500) {
    console.log(average / 500);
  }
}
// Вивести суму лише парних чисел в діапазоні від 30 до 80.
for (let i = 30, sum = 0; i <= 80; i++) {
  sum += i % 2 ? 0 : i;
  if (i === 80) {
    console.log(sum);
  }
}
// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
const arr3 = [];
for (let i = 100; i <= 200; i++) {
  if (!(i % 3)) {
    arr3.push(i);
  }
}
console.log(arr3.join(","));
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.
const arr4Dividers = [];
const arr5EvenDividers = [];
let number;

do {
  number = +prompt("Введіть натуральне число");
} while (isNaN(number) || number <= 0);

for (let i = 1; i <= number; i++) {
  if (!(number % i)) {
    arr4Dividers.push(i);
  }
  if (!(number % i) && !(i % 2)) {
    arr5EvenDividers.push(i);
  }
}
console.log(arr4Dividers.join(","));
console.log(arr5EvenDividers.join(","));
console.log(arr5EvenDividers.reduce((prev, curr) => (prev += curr), 0));
// Надрукувати повну таблицю множення від 1 до 10.
let table = "";
for (let i = 1; i <= 10; i++) {
  for (let y = 1; y <= 10; y++) {
    table += `${i * y}\t`;
  }
  table += "\n";
}
console.log(table);
