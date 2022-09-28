function subtract() {
    let  num1 = document.getElementById('firstNumber');
    let  num2 = document.getElementById('secondNumber');

    let firstNum = Number(num1.value);
    let secondNum = Number(num2.value);

    let result = firstNum - secondNum;

   let resultElement =  document.getElementById('result');
   resultElement.textContent = result;

}