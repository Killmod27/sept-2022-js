// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let array = [];
// array[0] = new User(1, "Vasya", "Pupkin", "VPupkin@gmail.com", "+390631231213");
// array[array.length] = new User(2, "Olga", "Ivanova", "OIvanova@gmail.com", "+380639879898");
// array[array.length] = new User(3, "Ivan", "Ivanov", "IIvanov@gmail.com", "+380632222222");
// array[array.length] = new User(4, "Anton", "Antonov", "AAntonov@gmail.com", "+380633333333");
// array[array.length] = new User(5, "Petro", "Petrov", "PPetrov@gmail.com", "+380634444444");
// array[array.length] = new User(6, "Max", "Maxov", "MMaxov@gmail.com", "+380635555555");
// array[array.length] = new User(7, "Denys", "Denysov", "DDenysov@gmail.com", "+380636666666");
// array[array.length] = new User(8, "Olena", "Olenova", "OOlenova@gmail.com", "+380637777777");
// array[array.length] = new User(9, "Yura", "Yurov", "YYurov@gmail.com", "+380638888888");
// array[array.length] = new User(10, "Tetyna", "Tetynova", "TTetynova@gmail.com", "+380639999999");

// console.log(array);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let arrayFiltered = array.filter((user) => user.id % 2 === 0);
//
// let arrayFiltered2 = array.filter(function (user) {
//     return user.id % 2 !== 0;
// });
//
// console.log(arrayFiltered);
// console.log(arrayFiltered2);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortedArray1 = array.sort(function (user1, user2) {
//     if (user1.id > user2.id) {
//         return 1;
//     }
//     if (user1.id < user2.id) {
//         return -1;
//     }
//     if (user1.id === user2.id) {
//         return 0;
//     }
// });
//
// console.log(sortedArray1);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let arrayNew = [];
// arrayNew[0] = new Client(1, "Vasya", "Pupkin", "VPupkin@gmail.com", "+390631231213", ["milk", "potato", "sugar", "water", "garlic"]);
// arrayNew[arrayNew.length] = new Client(2, "Olga", "Ivanova", "OIvanova@gmail.com", "+380639879898", ["carrot", "bread","juice"]);
// arrayNew[arrayNew.length] = new Client(3, "Ivan", "Ivanov", "IIvanov@gmail.com", "+380632222222", ["candy", "eggs"]);
// arrayNew[arrayNew.length] = new Client(4, "Anton", "Antonov", "AAntonov@gmail.com", "+380633333333", ["cucumbers", "oranges"]);
// arrayNew[arrayNew.length] = new Client(5, "Petro", "Petrov", "PPetrov@gmail.com", "+380634444444", ["bread", "salt", "pineapple", "kokos"]);
// arrayNew[arrayNew.length] = new Client(6, "Max", "Maxov", "MMaxov@gmail.com", "+380635555555", ["pineapple"]);
// arrayNew[arrayNew.length] = new Client(7, "Denys", "Denysov", "DDenysov@gmail.com", "+380636666666", ["apple", "banana"]);
// arrayNew[arrayNew.length] = new Client(8, "Olena", "Olenova", "OOlenova@gmail.com", "+380637777777", ["candy", "eggs"]);
// arrayNew[arrayNew.length] = new Client(9, "Yura", "Yurov", "YYurov@gmail.com", "+380638888888", ["cola"]);
// arrayNew[arrayNew.length] = new Client(10, "Tetyna", "Tetynova", "TTetynova@gmail.com", "+380639999999", ["coffee", "rice", "juice"]);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sortedByOrder = arrayNew.sort(function (client1, client2) {
//     if (client1.order.length > client2.order.length) {
//         return 1;
//     }
//     if (client1.order.length < client2.order.length) {
//         return -1;
//     }
//     if (client1.order.length === client2.order.length) {
//         return 0;
//     }
// })
//
// console.log(sortedByOrder);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, yearOfProduce, maxSpeed, engineCapacity) {
//     this.model = model;
//     // this.producer = producer;
//     this.yearOfProduce = yearOfProduce;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     // this.drive = () => `їдемо зі швидкістю ${this.maxSpeed} км на годину`;
//     // this.info = () => `Модель - ${model}, Виробник - ${producer}, Рік випуску - ${yearOfProduce}, Максимальна швидкість - ${maxSpeed}, Об'єм двигуна - ${engineCapacity}`;
//     this.info = function () {
//         for (const carElement in this) {
//             if (typeof this[carElement] !== 'function') {
//                 console.log(`${carElement} - ${this[carElement]}`);
//             }
//         }
//     }
    // this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
    // this.changeYear = (newValue) => this.yearOfProduce = newValue;
    // this.addDriver = (driver) => this.driver = driver;
// }

// let car1 = new Car("Volvo", "Sweden", 2015, 260, 2.0);
// console.log(car1.drive());
// console.log(car1.info());
// car1.increaseMaxSpeed(30);
// console.log(car1.drive());
// car1.changeYear(2020);
// console.log(car1.info());
// car1.addDriver({name: "Vasya", age: 32});
// console.log(car1.info());
// console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     };
//         drive() {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     };
//         info() {
//             for (let carElement in this) {
//                 if (typeof this[carElement] !== 'function') {
//                     console.log(`${carElement} - ${this[carElement]}`);
//                 }
//             }
//         }
//         increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
//         changeYear = (newValue) => this.yearOfProduce = newValue;
//         addDriver = (driver) => this.driver = driver;
//
// }
// let car1 = new Car("Volvo", "Sweden", 2015, 260, 2.0);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(30);
// car1.changeYear(2020);
// car1.addDriver({name: "Vasya", age: 32});
// console.log(car1);
//

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let arrCind = [];
// arrCind[0] = new Cinderella("Olya", 19, 39);
// arrCind[1] = new Cinderella("Lisa", 20, 35);
// arrCind[2] = new Cinderella("Olena", 21, 37);
// arrCind[3] = new Cinderella("Tetyana", 22, 36);
// arrCind[4] = new Cinderella("Liliya", 23, 40);
// arrCind[5] = new Cinderella("Alina", 24, 38);
// arrCind[6] = new Cinderella("Oksana", 25, 36);
// arrCind[7] = new Cinderella("Ivetta", 24, 39);
// arrCind[8] = new Cinderella("Natalia", 23, 38);
// arrCind[9] = new Cinderella("Sasha", 22, 37);
// arrCind[10] = new Cinderella("Masha", 21, 39);
//
// console.log(arrCind);
//
// class Prince {
//     constructor(name, age, shoeFound) {
//         this.name = name;
//         this.age = age;
//         this.shoeFound = shoeFound;
//     }
// }
//
// let prince1 = new Prince("Arthur", 23, 36);

// for (const cind of arrCind) {
//     if (cind.footSize === prince1.shoeFound) {
//         console.log(cind);
//     }
// }

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let find = arrCind.find(cind => cind.footSize === prince1.shoeFound);
// console.log(find);