const numbers = [1, 2, 3, 4, 5];

const moreTwo = (num) => num > 2;

function myFilter(array, callback) {
  const newArr = [];
  for (let i of array) {
    if (callback(i)) newArr.push(i);
  }

  return newArr;
}

const findNumberMoreTwo = myFilter(numbers, moreTwo);
console.log("findNumberMoreTwo:", findNumberMoreTwo);
