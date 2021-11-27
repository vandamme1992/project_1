'use strict';

let numberOfMovies = +prompt("Сколько фильмов вы уже посмотрели?");


let personalMovieDB = {
    count : numberOfMovies,
    movies: {},
    actors : {},
    genres : [],
    privat : false
}

//error


// for (let i = 0; i < 2; i++ ) {
//     let a = prompt ('Один из последних просмотренных фильмов?'),
//         b = prompt ('На сколько оцените его?');

   

//     if (a,b == null && '' && a.length > 50){
//     i--;
// } else {
//     personalMovieDB.movies[a] = b;
// }


if (personalMovieDB.count < 10 ) {
    console.log("Посмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 , personalMovieDB.count < 30) {
    console.log('вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log("вы киноман");
} else {
    console.log ("Произошла ошибка");
    
}



