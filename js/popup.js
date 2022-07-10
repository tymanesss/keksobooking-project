import { HOUSING_TYPES } from './data.js';

const adCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderAd = ({ad, author}) => {
  const cardElement = adCardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__avatar').src = author.avatar;
  cardElement.querySelector('.popup__title').textContent = ad.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${ad.offer.price } ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = HOUSING_TYPES[ad.offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;

  if (ad.offer.features) {
    const featureElement = ad.offer.features.map((feature) => `popup__feature--${feature}`);
    cardElement.querySelectorAll('.popup__feature').forEach((item) => {
      if (!featureElement.includes(item.classList[1])) {
        item.remove();
      }
    });
  }

  if (ad.offer.description) {
    cardElement.querySelector('.popup__description').textContent = ad.offer.description;
  }
  if (ad.offer.photos) {
    const photoList = cardElement.querySelector('.popup__photos');
    const photoElements = photoList.querySelector('.popup__photo');
    photoElements.remove();
    ad.offer.photos.forEach((photo) => {
      const photoElement = photoElements.cloneNode(true);
      photoElement.src = photo;
      photoList.append(photoElement);
    });
    if (photoList.length === 0) {
      photoList.classList.add('hidden');
    }
  }
  return cardElement;
};

export {renderAd};
