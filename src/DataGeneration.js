import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals
} from "unique-names-generator";
import { cities } from "./Constants";

const getRandomValue = range => {
  return Math.floor(Math.random() * range);
};

const DataGeneration = () => {
  let data = [];
  let iterations = 1000;
  while (iterations > 0) {
    const name = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals]
    });
    const age = getRandomValue(80).toString();
    const cityIndex = Math.min(
      getRandomValue(cities.length),
      cities.length - 1
    );
    const city = cities[cityIndex];
    const childLost =
      getRandomValue(10) > 5 && Number(age) >= 18 ? true : false;
    const siblingLost = getRandomValue(10) > 5 ? true : false;
    const parentLost = getRandomValue(10) > 5 ? true : false;
    const disabled = getRandomValue(10) > 5 ? true : false;
    data.push({
      name: name,
      age: age,
      location: city,
      childLost: childLost,
      siblingLost: siblingLost,
      parentLost: parentLost,
      disabled: disabled
    });
    iterations -= 1;
  }
  return data;
};

export default DataGeneration;
