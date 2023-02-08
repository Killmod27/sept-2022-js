// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt("Default number");
//
// if (x !== 0) {
//     console.log("Вірно");
// } else {
//     console.log("Невірно");
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt("Minutes");
//
// if (time >= 0 && time < 15) {
//     console.log("First part of an hour");
// } else if (time >= 15 && time < 30) {
//     console.log("Second part of an hour");
// } else if (time >= 30 && time < 45) {
//     console.log("Third part of an hour");
// } else if (time >= 45 && time < 60) {
//     console.log("Fourth part of an hour")
// } else {
//     console.log("ERROR");
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt("Day of a month");
//
// if (day > 0 && day < 11) {
//     console.log("First decade");
// } else if (day > 10 && day < 21) {
//     console.log("Second decade");
// } else if (day > 20 && day <= 31) {
//     console.log("Third decade");
// } else {
//     console.log("Unknown day of a month");
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// switch (+prompt("Number of a day")) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Unknown");
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let x = +prompt("Number x =");
// let y = +prompt("Number y =");
//
// if (x > y) {
//     console.log("Highest number is " + x);
// } else if ( x < y) {
//     console.log("Highest number is " + y);
// } else if (x === y) {
//     console.log("The numbers are equal and they are " + x);
// } else {
//     console.log("Not a number");
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = prompt("Anything you desire") || "default";
// console.log(x);