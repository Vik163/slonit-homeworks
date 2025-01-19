let prevNum = 0;
let newNum = 0;
let attempts = 0;

// вывод результата второго компа
const showResultSecondComp = (range) => {
  console.log(`Компьютер 2: Попытка № ${attempts}`);
  if (range > 0) console.log(`Компьютер 2: Диапазон ${range}`);
  console.log(`Компьютер 2: Пробую число ${newNum}.`);
};

const getNumberSecondComp = (result) => {
  // получаю диапазон для расчета
  const range = Math.abs(newNum - prevNum);
  // первый запрос - возвращает 50
  if (!result) {
    newNum = 50;
    // обработка больше - меньше
    // если диапазон больше 3, то вычисляет среднее значение диапазона +- число, иначе число +- 1
  } else if (result === "Больше") {
    prevNum = newNum;

    newNum = range > 3 ? Math.round(newNum - range / 2) : newNum - 1;
  } else {
    prevNum = newNum;
    newNum = range > 3 ? Math.round(newNum + range / 2) : newNum + 1;
  }
  attempts++; // попытки

  showResultSecondComp(range);
};

// обработка результата первого компьютера
const sendAnswerFirstComp = (result) => {
  console.log(`Компьютер 1: ${result}.`);

  getNumberSecondComp(result);
};

const checkNumbers = () => {
  // получаю рандомное число
  let randomNumber = Math.round(Math.random() * 100);
  console.log(`Компьютер 1 загадал число: ${randomNumber}`);
  let result = null;
  let isFound = false; // ключ завершения
  getNumberSecondComp(null); // первая попытка

  // цикл пока ключ равен false
  while (!isFound) {
    if (newNum > randomNumber) {
      sendAnswerFirstComp("Больше");
    } else if (newNum < randomNumber) {
      sendAnswerFirstComp("Меньше");
    } else {
      isFound = true;
      console.log("Компьютер 1: Угадал!");
    }
  }
};

checkNumbers();
