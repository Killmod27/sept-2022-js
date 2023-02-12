// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let array = ["hello world", "lorem ipsum", "javascript is cool"];
// console.log(array[0].length);
// console.log(array[1].length);
// console.log(array[2].length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let array = ["hello world", "lorem ipsum", "javascript is cool"];
// let hello = array[0].toUpperCase();
// let lorem = array[1].toUpperCase();
// let js = array[2].toUpperCase();
// console.log(hello);
// console.log(lorem);
// console.log(js);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let hello = "HELLO WORLD";
// let lorem = "LOREM IPSUM";
// let js = "JAVASCRIPT IS COOL";
// console.log(hello.toLowerCase());
// console.log(lorem.toLowerCase());
// console.log(js.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = " dirty string   ";
// // console.log(str.trim());
// let cleanStr = str.trim();
// console.log(cleanStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = "Ревуть воли як ясла повні";
// let arr = (string) => string.split(" ");
//
// console.log(arr(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
//
// let arrayOfStrings = numbers.map ((num) => num.toString());
//
// console.log(arrayOfStrings);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// sortNums(nums,'ascending') // [3,11,21]


//     let nums = [11,21,3, 84, 27, 56];
//
// let sortedNums = nums.sort(function (a,b) {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     if (a === b) {
//         return 0;
//     }
// });
//
// console.log(sortedNums);

// sortNums(nums,'descending') // [21,11,3]

// let nums = [11, 21, 3, 84, 27, 56];
//
// let sortedNums = nums.sort(function (a,b) {
//     if (a < b) {
//         return 1;
//     }
//     if (a > b) {
//         return -1;
//     }
//     if (a === b) {
//         return 0;
//     }
// });
//
// console.log(sortedNums);

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let sortedByMonthDuration = coursesAndDurationArray.sort(function (a,b) {
//     if (a.monthDuration > b.monthDuration) {
//         return 1;
//     }
//     if (a.monthDuration < b.monthDuration) {
//         return -1;
//     }
//     if (a.monthDuration === b.monthDuration) {
//         return 0
//     }
// });
//
// console.log(sortedByMonthDuration);

// let filteredArray = coursesAndDurationArray.filter ((course) => course.monthDuration > 5)
//
// console.log(filteredArray);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', 'spade', 'diamond','heart', 'clubs',
//         value: '', '6'-'10', 'ace','jack','queen','king','joker',
//     color:'', 'red','black',
// }

// const cardSuits = [
//     {cardSuit: "clubs", color: "black"},
//     {cardSuit: "heart", color: "red"},
//     {cardSuit: "diamond", color: "red"},
//     {cardSuit: "spade", color: "black"}
// ];
//
// let cards = [6, 7, 8, 9, 10, "jack", "queen", "king", "ace"];
// let deck = [];
//
// for (const suit of cardSuits) {
//     for (const card of cards) {
//         const karta = {cardSuit: suit.cardSuit, value: card, color: suit.color};
//         deck.push(karta);
//     }
// }

// let aceClubs = deck.filter((card) => card.cardSuit === "clubs" && card.value === "ace");
// console.log(aceClubs);
//
// let allSix = deck.filter((card) => card.value === 6);
// console.log(allSix);
//
// let allRed = deck.filter((card) => card.color === "red");
// console.log(allRed);
//
// let allClubs = deck.filter((card) => card.cardSuit === "clubs");
// console.log(allClubs);
//
// let finalResult = deck.filter(card => (card.cardSuit === "clubs" && card.value >= 9) || (card.cardSuit === "clubs" && typeof card.value === "string"));
// console.log(finalResult);

//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let sortedBySuits = deck.reduce((accumulator, cards) => {
//     if (cards.cardSuit === "spade") {
//         accumulator.spades.push(cards);
//     }
//     else if (cards.cardSuit === "diamond") {
//         accumulator.diamonds.push(cards);
//     }
//     else if (cards.cardSuit === "heart") {
//         accumulator.hearts.push(cards);
//     }
//     else if (cards.cardSuit === "clubs") {
//         accumulator.clubs.push(cards);
//     } return accumulator;
//     }, {spades:[], diamonds:[], hearts:[], clubs:[]});
//
// console.log(sortedBySuits);