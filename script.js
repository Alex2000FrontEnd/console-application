
'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    //это один из редких случаев когда можно применить цикл while и он будет отлично отрабатывать
    while (numberOfFilms == '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else {
        alert('Вы киноман');
    }
}

detectPersonalLevel();

//функция оболочка, которая будет вызывать цикл по требованию
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        (a === '' || a === null || a.length > 50 || b === '' || b === null || b.length > 50) ? i-- : personalMovieDB.movies[a] = b;
    }
}

rememberMyFilms();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    }
}

writeYourGenres();

function showMyDB(privat) {
    if (!privat) console.log(personalMovieDB);
}

showMyDB(personalMovieDB.privat);


//мы приводим наше приложение в более функциональный вид
//если ты хочешь проверять на этапе ввода то что ввел пользователь - то тебе нужно использовать регулярные выражения
//isNaN() - провяряет на нечисло, возврощает true
//мы создали функции оболочки которые вызываются тогда когда нам это нужно - в будущем мы эти функции сможем подвязать под определенные действия пользователя (например, по клику будет вызываться определенная функция)