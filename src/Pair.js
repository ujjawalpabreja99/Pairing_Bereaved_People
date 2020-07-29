const MAX_DISTANCE = 2409;

const getIdx = city => {
  switch (city) {
    case "delhi":
      return 0;
    case "tamil nadu":
      return 1;
    case "maharashtra":
      return 2;
    case "karnataka":
      return 3;
    case "uttar pradesh":
      return 4;
    case "gujarat":
      return 5;
    case "rajasthan":
      return 6;
    default:
      return -1;
  }
};

const dist = [
  [0, 2409, 1303, 1862, 500, 1095, 404],
  [2409, 0, 1223, 693, 2188, 1967, 2399],
  [1303, 1223, 0, 587, 1205, 833, 1028],
  [1862, 693, 587, 0, 1753, 1316, 1748],
  [500, 2188, 1205, 1753, 0, 1398, 780],
  [1095, 1967, 833, 1316, 1398, 0, 735],
  [404, 2399, 1028, 1748, 780, 735, 0]
];

const distance = (location1, location2) => {
  const idx1 = getIdx(location1.toLowerCase());
  const idx2 = getIdx(location2.toLowerCase());
  return dist[idx1][idx2];
};

const Pair = (person1, person2) => {
  let score = 0;

  if (person1.childLost === true && person2.parentLost === true) {
    score += 2;
  }
  if (person1.parentLost === true && person2.childLost === true) {
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
