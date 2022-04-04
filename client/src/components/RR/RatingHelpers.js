// helper funcs to find avg reviews (not including the rendered stars)
// based off meta.ratings in review seed info
// var meta.ratings = {
//   1: '0',
//   2: '0',
//   3: '7',
//   4: '12',
//   5: '7',
// }

// count how many reviews there are (each rating = 1 rev)
const findReviewCount = (ratingObj) => {
  const ratingVal = Object.keys(ratingObj);
  let totalReviews = 0;

  for (let i = 0; i < ratingVal.length; i++) {
    const ratingCount = Number(ratingObj[ratingVal[i]]);
    totalReviews += ratingCount;
  }
  return totalReviews;
};

// just needed to find avg score unless someone really needs
const findTotalScore = (ratingObj) => {
  const ratingVal = Object.keys(ratingObj);
  let totalScore = 0;

  for (let i = 0; i < ratingVal.length; i++) {
    const score = (Number(ratingObj[ratingVal[i]]) * Number(ratingVal[i]));
    totalScore += score;
  }
  return totalScore;
};

// stars need 1 decimal
const averageRating = (ratingObj) => {
  const avg = (findTotalScore(ratingObj) / findReviewCount(ratingObj));
  const staravg = (Math.round(avg * 10) / 10);
  return staravg;
};

// var test = { 1: '5', 2: '1', 3: '9', 4: '24', 5: '8'}
// = 3.6

module.exports = { findReviewCount, averageRating };
