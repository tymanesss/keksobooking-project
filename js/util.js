const getRandomInt = (from, to) => {
  const min = Math.ceil(Math.min(from, to));
  const max = Math.floor(Math.max(from, to));
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomFloat = (min, max) =>
  getRandomInt(min * 1000, max * 1000) / 1000;

const getRandomArray = (elements) => {
  const items = elements.slice(getRandomInt(0, elements.length - 1));
  return items;
};

const getRandomArrayElement = (elements) =>
  elements[getRandomInt(0, elements.length - 1)];

export {getRandomInt, getRandomFloat, getRandomArray, getRandomArrayElement};
