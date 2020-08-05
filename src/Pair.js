import { MAX_DISTANCE, cities, distanceBetweenCities } from "./Constants";

const distance = (location1, location2) => {
  const idx1 = cities.indexOf(location1);
  const idx2 = cities.indexOf(location2);
  return distanceBetweenCities[idx1][idx2];
};

const Pair = (person1, person2) => {
  let score = 0;

  if (
    person1.childLost === true &&
    person2.parentLost === true &&
    Number(person1.age) - Number(person2.age) >= 18
  ) {
    score += 2;
  }
  if (
    person1.parentLost === true &&
    person2.childLost === true &&
    Number(person2.age) - Number(person1.age) >= 18
  ) {
    score += 2;
  }
  if (person1.siblingLost === true && person2.siblingLost === true) {
    score += 2;
  }
  if (person1.disabled === true && person2.disabled === false) {
    score += 2;
  }
  if (person1.disabled === false && person2.disabled === true) {
    score += 2;
  }

  if (person1.disbaled === true && person2.disabled === true) {
    score += 1;
  }
  if (person1.childLost === true && person2.childLost === true) {
    score += 1;
  }
  if (person1.parentLost === true && person2.parentLost === true) {
    score += 1;
  }

  const distanceScore =
    (2 * (MAX_DISTANCE - distance(person1.location, person2.location))) /
    MAX_DISTANCE;

  score += distanceScore;
  score /= 10;

  return {
    person1: person1,
    person2: person2,
    fitnessScore: score
  };
};

export default Pair;
