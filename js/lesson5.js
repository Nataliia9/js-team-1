// setTimeout(function () {
//     console.log("A");
//     setTimeout(function () {
//         console.log("B");
//         setTimeout(function () {
//             console.log("C");
//         }, 1000);
//     }, 2000);
// }, 3000);

// =================================================

// let i = 0;
// setTimeout(() => alert(i), 100);

// for (let j = 0; j < 1000000000; j++) {
//     i++;
// }

// =================================================

// let a = 1;
// setTimeout(() => {
//     a = 2;
// }, 0);
// console.log(a);
// 11111111111111111
// const first = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "один");
// });

// const second = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "два");
// });

// Promise.race([first, second]).then((res) =>
//     console.log(res)
// );
// ===============================================================
// setTimeout(() => console.log(1), 0);

// console.log(2);

// new Promise((res) => {
//     console.log(3);
//     res();
// }).then(() => console.log(4));

// console.log(5);

// ###########################

//  Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

// function greet() {
//   return "hello world";
// }

// const greet = new Promise((res) => {
//     setTimeout(() => res("Hello world"), 2000);
// });

// greet.then((result) => console.log(result));
// ============================================
// / - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// const prom = prompt("Enter number");
// function check(prom) {
//     return new Promise((res, rej) => {
//         prom = Number(prom);
//         if (Number.isNaN(prom)) rej("error");
//         if (prom % 2 === 0)
//             setTimeout(() => res("even"), 1000);
//         if (prom % 2 !== 0)
//             setTimeout(() => res("odd"), 2000);
//     });
// }

// check(prom)
//     .then((data) => console.log(data))
//     .catch((er) => console.log(er));
