const isLengthString = function (string, maxLength) {
  return string.length <= maxLength;
};

isLengthString('проверяемая строка', 20);


const isPalindrom = function (string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let otherString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    otherString += normalizedString[i];
  }
  return normalizedString === otherString;
};

isPalindrom('Лёша на полке клопа нашёл ');
