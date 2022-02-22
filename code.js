var movies = document.getElementsByClassName('slider-refocus');

var random = Math.floor(Math.random() * movies.length);

var movie = movies[random];

//console.log(movie.getAttribute('aria-label'));
//location.assign(movie.href);

open(movie.href);
