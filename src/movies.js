// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
let directors = moviesArray.map ((movie) => {
    return movie.director;
}
)
return directors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) { 
let dramaSumMovies = 0;
if (moviesArray.length===0)
{
    return 0;
}
let filteresDirectors = moviesArray.filter ((movie) => {
    return movie.director === "steven Spielberg"; 
})
let filteredDramaMovies = filteredDirectors.filter (( movie) => {
    return moviesArray.genre.includes("Drama"); 
});       

return dramaSumMovies = filteredDramaMovies.length;

}
   
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length !==0) {
    let allScoreAverage = moviesArray.reduce ((previousValue, currentValue) => previousValue + currentValue.score, 0);
    return Math.round((allScoreAverage / moviesArray.length) *100) / 100;
  }else{return 0}}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
