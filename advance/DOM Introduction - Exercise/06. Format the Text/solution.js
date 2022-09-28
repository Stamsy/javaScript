function solve() {
  let inputElement = document.getElementById('input');
  let textArr = inputElement.value.split('.').filter(s => s!== '');
  console.log(textArr);
}