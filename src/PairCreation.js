import Pair from "./Pair";

const THRESHOLD = 0.6;
const PERSON_1 = "person1";
const PERSON_2 = "person2";
const FITNESS_SCORE = "fitnessScore";

const getIndexOfARandomElement = array => {
  const pos = Math.floor(Math.random() * array.length);
  return pos;
};

function createPairs(data) {
  let unpairedPeople = [];
  let currentPopulation = [];

  data.forEach(element => {
    unpairedPeople.push(element);
  });

  while (unpairedPeople.length > 1) {
    let firstPersonIndex = getIndexOfARandomElement(unpairedPeople);
    let firstPeron = unpairedPeople[firstPersonIndex];
    unpairedPeople.splice(firstPersonIndex, 1);

    let secondPersonIndex = getIndexOfARandomElement(unpairedPeople);
    let secondPerson = unpairedPeople[secondPersonIndex];
    unpairedPeople.splice(secondPersonIndex, 1);

    currentPopulation.add(Pair(firstPeron, secondPerson));
  }

  let currentPopulationCopy = [];
  currentPopulation.forEach(pair => {
    currentPopulationCopy.add(pair);
  });

  currentPopulationCopy.forEach(element => {
    let pairIndex = getIndexOfARandomElement(currentPopulation);
    let pair = currentPopulation[pairIndex];
    if (pair[FITNESS_SCORE] < THRESHOLD) {
      currentPopulation.splice(currentPopulation.indexOf(pair), 1);
      unpairedPeople.push(pair[PERSON_1]);
      unpairedPeople.push(pair[PERSON_2]);
    }
  });

  let crossoverIterations = 10000;
  while (
    crossoverIterations > 0 &&
    unpairedPeople.length > 1 &&
    currentPopulation.length > 0
  ) {
    let pairIndex = getIndexOfARandomElement(currentPopulation);
    let pair = currentPopulation[pairIndex];
    currentPopulation.splice(pairIndex, 1);

    let firstPeronIndex = getIndexOfARandomElement(unpairedPeople);
    let firstPerson = unpairedPeople[firstPeronIndex];
    unpairedPeople.splice(firstPeronIndex, 1);

    let secondPersonIndex = getIndexOfARandomElement(unpairedPeople);
    let secondPerson = unpairedPeople[secondPersonIndex];
    unpairedPeople.splice(secondPersonIndex, 1);

    let firstNewPair = Pair(firstPerson, pair[PERSON_2]);
    let secondNewPair = Pair(secondPerson, pair[PERSON_1]);

    if (
      firstNewPair[FITNESS_SCORE] > THRESHOLD &&
      secondNewPair[FITNESS_SCORE] > THRESHOLD
    ) {
      currentPopulation.push(firstNewPair);
      currentPopulation.push(secondNewPair);
    } else if (firstNewPair[FITNESS_SCORE] > THRESHOLD) {
      currentPopulation.push(firstNewPair);
      unpairedPeople.push(secondPerson);
      unpairedPeople.push(pair[PERSON_1]);
    } else if (secondNewPair[FITNESS_SCORE] > THRESHOLD) {
      currentPopulation.push(secondNewPair);
      unpairedPeople.push(firstPerson);
      unpairedPeople.push(pair[PERSON_2]);
    } else {
      currentPopulation.push(pair);
      unpairedPeople.push(firstPerson);
      unpairedPeople.push(secondPerson);
    }

    crossoverIterations -= 1;
  }

  let disseminationIterations = 8000;
  while (disseminationIterations > 0 && unpairedPeople.length > 1) {
    let pairsToBeDeleted = Math.max(currentPopulation.length / 5, 1);
    while (pairsToBeDeleted > 0) {
      let pairIndex = getIndexOfARandomElement(currentPopulation);
      let pair = currentPopulation[pairIndex];
      currentPopulation.splice(pairIndex, 1);

      unpairedPeople.push(pair[PERSON_1]);
      unpairedPeople.push(pair[PERSON_2]);

      pairsToBeDeleted -= 1;
    }

    let innerIterations = 800;
    while (innerIterations > 0 && unpairedPeople.length > 1) {
      let firstPeronIndex = getIndexOfARandomElement(unpairedPeople);
      let firstPerson = unpairedPeople[firstPeronIndex];
      unpairedPeople.splice(firstPeronIndex, 1);

      let secondPersonIndex = getIndexOfARandomElement(unpairedPeople);
      let secondPerson = unpairedPeople[secondPersonIndex];
      unpairedPeople.splice(secondPersonIndex, 1);

      let pair = Pair(firstPerson, secondPerson);
      if (pair[FITNESS_SCORE] > THRESHOLD) {
        currentPopulation.push(pair);
      } else {
        unpairedPeople.push(firstPerson);
        unpairedPeople.push(secondPerson);
      }
      innerIterations -= 1;
    }

    disseminationIterations -= 1;
  }

  console.log("Unpaired people left = " + unpairedPeople.length);
  return currentPopulation;
}

export default createPairs;
