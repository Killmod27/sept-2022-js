// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 5, 99, true, false, "vasya", "olya", "stepan", 27, false];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

let arrNew = [];
arrNew[0] = "book";
arrNew[arrNew.length] = 13;
arrNew[2] = false;

console.log(arrNew);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: "The book of the wind",
    pageCount: 328,
    genre: "romance"
};

let book2 = {
    title: "Cyberpunk 2077",
    pageCount: 505,
    genre: "fantastic"
};

let book3 = {
    title: "Surrounded by idiots",
    pageCount: 205,
    genre: "litterature"
};

console.log(book1);
console.log(book2);
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let bookWithAuthors1 = {
    title: "Mind fuck",
    pageCount: 300,
    genre: "business",
    authors: [{
        name: "Petra Bok",
        age: 38
    }, {
        name: "Eric Bern",
        age: 47
    }]
}

let bookWithAuthors2 = {
    title: "Game of thrones",
    pageCount: 1980,
    genre: "fantastic",
    authors: [{
        name: "Anton Funny",
        age: 36,
    }, {
        name: "Vasya Romanov",
        age: 43
    }]
}

let bookWithAuthors3 = {
    title: "Eragon",
    pageCount: 1304,
    genre: "fantastic",
    authors: [{
        name: "olya",
        age: 33
    }, {
        name: "Ivan",
        age: 43
    }]
}

console.log(bookWithAuthors1);
console.log(bookWithAuthors2);
console.log(bookWithAuthors3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: "petro",
        username: "user1",
        password: 154512
    }, {
        name: "lesya",
        username: "user2",
        password: 131312
    }, {
        name: "roman",
        username: "user3",
        password: 229321
    }, {
        name: "mike",
        username: "user4",
        password: 123456
    }, {
        name: "nick",
        username: "user5",
        password: 987654
    }, {
        name: "susan",
        username: "user6",
        password: 7658576
    }, {
        name: "mary",
        username: "user7",
        password: 34252344
    }, {
        name: "rihanna",
        username: "user8",
        password: 589556975
    }, {
        name: "Liliya",
        username: "user9",
        password: 987708
    }, {
        name: "Yurii",
        username: "user10",
        password: "yturrio"
    }];

console.log(users[0].password, users[1].password);
console.log(users[2].password);
console.log(users[3].password, users[4].password, users[5].password, users[6].password, users[7].password, users[8].password,);
console.log(users[9].password);