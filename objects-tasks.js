const user = { name: "Vasya", friends: 5, likes: 19, projects: 7 };

// возвращает число, соответствующее сумме всех числовых полей
function getSumNumbers(obj) {
  const num = Object.values(obj)
    .filter((i) => typeof i === "number")
    .reduce((a, b) => a + b);
  return num;
}

const sumNumbers = getSumNumbers(user);
console.log("sumNumbers:", sumNumbers);

// возвращает массив с названиями полей, отсортированых по убыванию
function getKeysObject(obj) {
  const keys = Object.entries(obj)
    .filter(([key, value]) => typeof value === "number")
    .sort((a, b) => b[1] - a[1])
    .map((i) => i[0]);
  return keys;
}

const keysSort = getKeysObject(user);
console.log("keysSort:", keysSort);
