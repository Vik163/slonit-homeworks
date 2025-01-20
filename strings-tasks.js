const str = "какая-то случайная строка";
const longStr =
  "Длинная строка, в которой находится какая-то случайная строка.";

// Строка начиналается с большой буквы
function changeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const result = changeFirstLetter(str);
console.log("result:", result);

// На выходе возвращает, по необходимости укороченную строку, в конце которой стоит троеточие.
function trimLongString(str, long) {
  // массив из слов укороченной строки
  const trimStrArr = str.slice(0, long).split(" ");

  return (
    str
      .split(" ")
      .filter((el, i) => el === trimStrArr[i])
      .join(" ") + "..."
  );
}

const resultLongStr = trimLongString(longStr, 40);
console.log("resultLongStr:", resultLongStr);

// Проверяет совпадения.
function checkMatch(str1, str2) {
  // Не совсем понял задание, сделал в двух вариантах
  // Проверяет подстроку в большой строке
  const longStr = str1.length > str2.length ? str1 : str2;
  const subStr = str1.length > str2.length ? str2 : str1;

  const substringMatch = longStr.includes(subStr);
  // Проверяет совпадение слов в строках
  const wordsMatch = str
    .split(" ")
    .some((i) => longStr.split(" ").some((c) => c === i));

  return { substringMatch, wordsMatch };
}

const { substringMatch, wordsMatch } = checkMatch(longStr, str);
console.log(`substringMatch: ${substringMatch}, wordsMatch: ${wordsMatch}`);
