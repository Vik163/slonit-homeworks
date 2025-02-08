// Логгер

function createLogger() {
  let arrMessage = [];
  return {
    log: function (message) {
      arrMessage.push(message);
    },
    getLogs: function () {
      arrMessage.forEach((i) => console.log(i));
    },
  };
}

const loger = createLogger();

loger.log("message_1");
loger.log("message_2");
loger.log("message_3");

loger.getLogs();

// Генератор случайных чисел из диапазона

function createRandomGenerator(min, max) {
  return function () {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}

const generator = createRandomGenerator(8, 13);
console.log("generator:", generator());
console.log("generator:", generator());
console.log("generator:", generator());
