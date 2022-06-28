// Случайное целое число
function getRandomInt(from, to) {
  const min = Math.ceil(Math.min(from, to));
  const max = Math.floor(Math.max(from, to));
  return Math.floor(Math.random()*(max - min + 1) + min);
}
const numberInt = getRandomInt(0, 10);
// Случайное число с плавающей точкой
function getRandomFloat() {
  const randNumber = Math.random() * numberInt;
  return Math.floor(randNumber * 100) / 100;
}
getRandomFloat();

const TITLES = [
  'Castle house',
  'Spacious-house-residence',
  'Nice house made of wood',
  'Elite flat',
  'Wooden home by the pond',
  'Elite townhouse',
  'Brick house',
  'Modern apartment'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'It has two bedrooms',
  'It is on the 5th floor of a new building',
  'There is a garage on the basement',
  'a cosy 60-square-metre flat',
  'This house is perfect for a big family with childrens',
  'beautiful high arched windows',
  'The house itself is surrounded by a gorgeous garden',
  'The house is equipped with a modern kitchen',
  'From the outside this house looks luxurious',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getRandomPictureLink = () => {
  const result = getRandomInt(1, 10);
  return result < 10 ? `0${result}` : result;
};

function getRandomArray(elements) {
  const Array = elements.slice(getRandomInt(0, elements.length - 1));
  return Array;
}

const getRandomArrayElement = (elements) => (
  elements[getRandomInt(0, elements.length - 1)]
);

const createAd = () => {
  const getLocationLat = getRandomFloat(35.65000, 35.70000);
  const getLocationLng = getRandomFloat(139.70000, 139.80000);
  return {
    author: {
      avatar: `img/avatars/user${getRandomPictureLink()}.png`
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: {
        lat: getLocationLat,
        lng: getLocationLng,
      },
      price: getRandomInt(100, 50000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(1, 10),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElement(PHOTOS),
    },
    location: {
      lat: getLocationLat,
      lng: getLocationLng,
    }
  };
};

const similarAds = Array.from({length: 10}, createAd);
console.log(similarAds); // eslint-disable-line no-console
