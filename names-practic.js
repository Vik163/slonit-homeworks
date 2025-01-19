function countElementsArray(arr) {
  let countNum = 0;
  arr.forEach((n) => {
    countNum += n;
  });
  return countNum;
}

const arrNumbers = [10000, 20000, 30000];
console.log(countElementsArray(arrNumbers));
