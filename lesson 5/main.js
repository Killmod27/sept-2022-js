// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function area(a, b) {
//     return a * b;
// }
//
// console.log(area(2, 6))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circle(r) {
//     return Math.PI * Math.pow(r, 2);
// }
//
// console.log(circle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// cilinder = (r, h) => Math.PI * Math.pow(r, 2) * h;
// console.log(cilinder(5, 2));


// - створити функцію яка приймає масив та виводить кожен його елемент
//
// function printer(arr) {
//     for (item of arr) {
//         console.log(item);
//     }
// }
//
// let x = [11, 33, 55, 77];
// printer(x);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraf(text) {
//      document.write(`<p>${text}</p>`);
// }
//
// paragraf("Text");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(item) {
//     document.write(`<ul>
//             <li>${item}</li>
//             <li>${item}</li>
//             <li>${item}</li>
// </ul>`);
// }
//
// list("Milk");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function foo(item, loop) {
//     document.write(`<ul>`);
//     let i = 0;
//     while (i < loop) {
//         document.write(`<li>${item}</li>`);
//         i++;
//     }
//     document.write(`</ul>`);
//
// }
//
// foo("Milk", 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//
// let arr = [11, 22, true, false, "asdasd"];
//
// function list(array) {
//     document.write(`<ul>`);
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// list(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let objects = [
//     {id: 0, name: "Mike", age: 18},
//     {id: 1, name: "Jhon", age: 20},
//     {id: 2, name: "Lisa", age: 22},
//     {id: 3, name: "Vasya", age: 25}
// ];
//
// function sort(array) {
//     for (let arrayElement of array) {
//         document.write(`<div>`);
//         document.write(`<h2>${arrayElement.id} -- ${arrayElement.name}</h2>`);
//         document.write(`<h2>${arrayElement.age}</h2>`);
//         document.write(`</div>`);
//     }
// }
//
// sort(objects);

// - створити функцію яка повертає найменьше число з масиву

// let numbers = [18, 29, 42, 4, 84, -1, -100];
//
// function lowestNumber(array) {
//     let min = array[0];
//     for (let arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement
//         }
//     }
//     return min;
// }
//
// console.log(lowestNumber(numbers));;

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [1, 47, 23, 16, 90];
//
// function sum(arr) {
//     let suma = arr[0];
//     for (let element of arr) {
//         suma += element;
//     }
//     return suma
// }
//
// console.log(sum(array));;