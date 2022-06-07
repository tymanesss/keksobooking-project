/**
* Случайное целое число из положительного диапазона включительно, включая ноль (min; max).
* Если значение "до" меньше или равно значению "от", то "Неверный диапазон".
* Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function getRandomInt(min, max) {
  if (min < 0 || max <= 0 || max <= min) {
    return ('Неверный диапазон');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min + 1) + min);
}
getRandomInt(0, 50);
/**
* Случайное число с плавающей точкой из положительного диапазона включительно, включая ноль (min; max).
* Если значение "до" меньше или равно значению "от", то "Неверный диапазон".
* Источник toFixed: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
*/
function getRandomFloat(min, max, number) {
  if (min < 0 || max <= 0 || max <= min) {
    return ('Неверный диапазон');
  }
  return (Math.random() * (max - min) + min).toFixed(number);
}
getRandomFloat(0, 20.9, 3);
