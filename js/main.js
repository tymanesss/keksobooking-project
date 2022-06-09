// Случайное целое число
function getRandomInt(from, to) {
  const min = Math.ceil(Math.min(from, to));
  const max = Math.floor(Math.max(from, to));
  return Math.floor(Math.random()*(max - min + 1) + min);
}
let numberInt = getRandomInt(0, 10);
// Случайное число с плавающей точкой
function getRandomFloat() {
  const randNumber = Math.random() * numberInt;
  return Math.floor(randNumber * 100) / 100;
}


