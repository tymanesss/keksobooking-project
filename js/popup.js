const HOUSING_TYPES = {
  flat : 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

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

  if (ad.offer.features !== undefined) {
    const modifiers = ad.offer.features.map((feature) => `popup__feature--${feature}`);
    cardElement.querySelectorAll('.popup__feature').forEach((item) => {
      if (!modifiers.includes(item.classList[1])) {
        item.remove();
      }
    });
  }

  if (ad.offer.description !== undefined) {
    cardElement.querySelector('.popup__description').textContent = ad.offer.description;
  }

  if (ad.offer.photos !== undefined) {
    const photos = cardElement.querySelector('.popup__photos');
    const tagName = photos.querySelector('img');
    const clonePhoto = tagName.cloneNode(true);
    tagName.remove();
    for (let i = 0; i <= ad.offer.photos.length - 1; i++) {
      const newPhoto = clonePhoto.cloneNode(true);
      newPhoto.src = ad.offer.photos[i];
      photos.appendChild(newPhoto);
    }
  }
  return cardElement;
};

export {renderAd};
