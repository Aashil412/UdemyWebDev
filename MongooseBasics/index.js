const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("Connection Opened!");
  })
  .catch((err) => {
    console.log("Error!", err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});
const Movie = mongoose.model("Movie", movieSchema);
// const amadeus = new Movie({
//   title: "Amadeus",
//   year: 1986,
//   score: 9.2,
//   rating: "R",
// });

// Movie.insertMany([
//     { title: 'adsasd', year: 12123 },
//     {title: 'asdasdaasdad', year: 213123}
// ])
//     .then((data) => {
//         console.log('It worked');
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
// })
