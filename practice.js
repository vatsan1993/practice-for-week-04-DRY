let numberDoubler = (num) => num * 2;
function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum;
  if (num1 > num2) {
    bigNum = num1;
  } else {
    bigNum = num2;
  }
  return numberDoubler(bigNum);
}

let divideThree = (num) => num / 3;
function divideBiggerNumByThree(num1, num2) {
  let bigNum;
  if (num1 > num2) {
    bigNum = num1;
  } else {
    bigNum = num2;
  }
  return divideThree(bigNum);
}

let eatMessage = (num) => `I ate ${num} tacos.`;
function eatMostTacos(sum1, sum2) {
  let bigNum;
  if (sum1 > sum2) {
    bigNum = sum1;
  } else {
    bigNum = sum2;
  }
  return eatMessage(bigNum);
}

let adoptMessage = (weight) => `I adopted a dog that weighs ${weight} pounds.`;
function adoptSmallerDog(weight1, weight2) {
  let smallDog;
  if (weight1 < weight2) {
    smallDog = weight1;
  } else {
    smallDog = weight2;
  }
  return adoptMessage(smallDog);
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
