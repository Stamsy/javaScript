function movieRatings(input) {
  let countMovie = Number(input[0]);
  let bufferNameMax = "";
  let bufferNameMin = "";
  let avrRating = 0;

  let maxRating = Number.MIN_SAFE_INTEGER;
  let minRating = Number.MAX_SAFE_INTEGER;
  let nameFilm = "";


  for (let i = 1; i < 2 * countMovie; i++) {
    nameFilm = input[i];
    i++;
    avrRating += Number(input[i]);
    if (Number(input[i]) > maxRating) {
      maxRating = Number(input[i]);
      bufferNameMax = input[i - 1];
    }
    if (Number(input[i]) < minRating) {
      minRating = Number(input[i]);
      bufferNameMin = input[i - 1]
    }
  }
  let avarage = avrRating / countMovie;
  console.log(`${bufferNameMax} is with highest rating: ${maxRating.toFixed(1)}`);
  console.log(`${bufferNameMin} is with lowest rating: ${minRating.toFixed(1)}`);
  console.log(`Average rating: ${avarage.toFixed(1)}`)
}
movieRatings(["5",
  "A Star is Born",
  "7.8",
  "Creed 2",
  "7.3",
  "Mary Poppins",
  "7.2",
  "Vice",
  "7.2",
  "Captain Marvel",
  "7.1"])