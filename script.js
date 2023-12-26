
'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else {
    alert('Вы киноман');
}

//через цикл for
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    (a === '' || a === null || a.length > 50 || b === '' || b === null || b.length > 50) ? i-- : personalMovieDB.movies[a] = b;
}

//через цикл while
/* let i = 0;

while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a === '' || a === null || a.length > 50 || b === '' || b === null || b.length > 50) {
        i--;
    } else {
        personalMovieDB.movies[a] = b;
    }

    i++;
} */

//через цикл do
/* let i = 0;

do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a === '' || a === null || a.length > 50 || b === '' || b === null || b.length > 50) {
        i--;
    } else {
        personalMovieDB.movies[a] = b;
    }

    i++;
}
while (i < 2); */

console.log(personalMovieDB);