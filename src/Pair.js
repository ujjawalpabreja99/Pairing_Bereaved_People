const MAX_DISTANCE = 999999;

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
  [0, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 0]
];

const distance = (location1, location2) => {
  const idx1 = getIdx(location1.toLowerCase());
  const idx2 = getIdx(location2.toLowerCase());
  return dist[idx1][idx2];
};

const Pair = (person1, person2) => {
  let fitnessScore = 0;

  if (person1.childLost === true && person2.parentLost === true) {
    fitnessScore += 2;
  }
  if (person1.parentLost === true && person2.childLost === true) {
    fitnessScore += 2;
  }
  if (person1.siblingLost === true && person2.siblingLost === true) {
    fitnessScore += 2;
  }
  if (person1.disabled === true && person2.disabled === false) {
    fitnessScore += 2;
  }
  if (person1.disabled === false && person2.disabled === true) {
    fitnessScore += 2;
  }

  if (person1.disbaled === true && person2.disabled === true) {
    fitnessScore += 1;
  }
  if (person1.childLost === true && person2.childLost === true) {
    fitnessScore += 1;
  }
  if (person1.parentLost === true && person2.parentLost === true) {
    fitnessScore += 1;
  }

  const distanceScore =
    (2 * (MAX_DISTANCE - distance(person1.location, person2.location))) /
    MAX_DISTANCE;

  fitnessScore += distanceScore;

  return fitnessScore;
};

export default Pair;
