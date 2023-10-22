/* eslint-disable no-console */

const NAMES = [
  'София',
  'Мартин',
  'Лукас',
  'Алиса',
  'Мария',
  'Лео',
  'Александр',
  'Максим',
  'Иван',
  'Даниил',
  'Анна'
];

const DESCRIPTIONS = [
  'Вся красота мира в одной картинке',
  'Счастье в каждом кадре.',
  'История, рассказанная через объектив.',
  'Остановить время в одном кадре.',
  'Я сверкаю изнутри.',
  'Жизнь не идеальна. Но мои волосы такие.',
  'Всегда стильно, никогда не дрянно и немного дерзко.',
  'Этой принцессе не нужен принц.',
  'Счастье никогда не выходит из моды',
  'В мире, полном тенденций, я хочу оставаться классиком.',
  'Не позволяй моей красоте ослеплять твои глаза.'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomArrayElement (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

function getRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function createComment () {
  const commentId = getRandomIdFromRangeGenerator(1, 1000)();
  return {
    id: commentId,
    avatar: `img/avatar-${ getRandomPositiveInteger(1, 6) }.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
}
console.log(createComment())

function createPublishedPhoto () {
  const photoId = getRandomIdFromRangeGenerator(1, 25)();
  return {
    id: photoId,
    url: getRandomPositiveInteger(1, 25),
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: getRandomPositiveInteger(0, 30)}, createComment),
  };
}

const requiredPhotos = 25;
const publishedPhotos = Array.from({length: requiredPhotos}, createPublishedPhoto);
console.log(publishedPhotos);
