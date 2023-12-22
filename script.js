/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

//изучение новых языков программирования почти всегда начинается с написания консольного приложения, это общепринятая практика как в университетеах, так и в курсах, книгах... - такой подход позволит тебе вникнуть во все основы языка и в будущем тебе будет намного легче
//консольное приложение мы будем в будущем дополнять и расширять его функциональность - так происходит и в любом реальном приложении, тем более ты должен будешь уметь в случаи чего рефакторить код проекта (переписывать его под новые условия и требования)
//только на практике можно чему-то научится
