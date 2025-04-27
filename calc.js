const initialCalculationBox = document.querySelector(
  ".calc−output−inner−input1"
);

const FinalCalculationBox = document.querySelector(".calc−output−inner−input2");
//eval signs
const addSign = document.querySelector(".calcSignAdd");
const subSign = document.querySelector(".calcSignSubtract");
const mulSign = document.querySelector(".calcSignMultiply");
const divSign = document.querySelector(".calcSignDivide");
const percentSign = document.querySelector(".calcSignPercentage");
const equalSign = document.querySelector(".calcEqualSign");
const clearButton = document.querySelector(".calcClearButton");
const delButton = document.querySelector(".calcSignDelete");

// Other signs
const powSign = document.querySelectorAll(".calcSignPower");
const sqrtSign = document.querySelectorAll(".calcSignSqrt");
const logSign = document.querySelectorAll(".calcSignLog");
const sinSign = document.querySelectorAll(".calcSignSin");
const cosSign = document.querySelectorAll(".calcSignCos");
const tanSign = document.querySelectorAll(".calcSignTan");
const modSign = document.querySelectorAll(".calcSignModulus");
const piSign = document.querySelectorAll(".calcSignPi");
const eSign = document.querySelectorAll(".calcSignE");
const factorialSign = document.querySelectorAll(".calcSignFactorial");
const lnSign = document.querySelectorAll(".calcSignLn");
const expSign = document.querySelectorAll(".calcSignExp");
const absSign = document.querySelectorAll(".calcSignAbs");
const floorSign = document.querySelectorAll(".calcSignFloor");
const ceilSign = document.querySelectorAll(".calcSignCeil");
const roundSign = document.querySelectorAll(".calcSignRound");

// Number digits
const numZero = document.querySelector(".calcNumber0");
const numOne = document.querySelector(".calcNumber1");
const numTwo = document.querySelector(".calcNumber2");
const numThree = document.querySelector(".calcNumber3");
const numFour = document.querySelector(".calcNumber4");
const numFive = document.querySelector(".calcNumber5");
const numSix = document.querySelector(".calcNumber6");
const numSeven = document.querySelector(".calcNumber7");
const numEight = document.querySelector(".calcNumber8");
const numNine = document.querySelector(".calcNumber9");



// −−−−−−−−−−−−−−−−showing numbers in output box −−−−−−−−−−−−−−−//
numOne.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 10) {
    initialCalculationBox.value += numOne.value;
  }
});
numTwo.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 10) {
    initialCalculationBox.value += numTwo.value;
  }
});
numThree.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 10) {
    initialCalculationBox.value += numThree.value;
  }
});

numFour.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 10) {
    initialCalculationBox.value += numFour.value;
  }
});
numFive.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 10) {
    initialCalculationBox.value += numFive.value;
  }
});
numSix.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 10) {
    initialCalculationBox.value += numSix.value;
  }
});
numSeven.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 10) {
    initialCalculationBox.value += numSeven.value;
  }
});

numEight.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 10) {
    initialCalculationBox.value += numEight.value;
  }
});

numNine.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 10) {
    initialCalculationBox.value += numNine.value;
  }
});
numZero.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 10) {
    initialCalculationBox.value += numZero.value;
  }
});

//====================Adding Numbers===================//
addSign.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 15) {
    initialCalculationBox.value += addSign.value;
  }
});

//====================Subtracting Numbers===================//
subSign.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 15) {
    initialCalculationBox.value += subSign.value;
  }
});

//====================Multiplying Numbers===================//
mulSign.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 15) {
    initialCalculationBox.value += mulSign.value;
  }
});

//====================Dividing Numbers===================//
divSign.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 15) {
    initialCalculationBox.value += divSign.value;
  }
});

//====================Percent Numbers===================//
percentSign.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 15) {
    initialCalculationBox.value += percentSign.value;
  }
});

//====================Clearing All===================//
clearButton.addEventListener("click", () => {
  initialCalculationBox.value = "";
  FinalCalculationBox.value = "Ans:  ";
});

//====================Deleting Numbers===================//
delButton.addEventListener("click", () => {
  if (initialCalculationBox.value.length <= 15) {
     initialCalculationBox.value = initialCalculationBox.value.slice(0,-1)
    }
  }
);

//====================Evaluating Numbers===================//
equalSign.addEventListener("click", () => {
  if (initialCalculationBox.value.length > 0) {
    FinalCalculationBox.value += eval(initialCalculationBox.value);
  }
});
