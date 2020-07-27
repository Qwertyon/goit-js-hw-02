let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("введите число для суммирования");
  if (input === null) {
    break;
  }
  input = Number(input);
  if (Number.isNaN(input) === false) {
    console.log(Number.isNaN(input));
    numbers.push(input);
  } else {
    alert("Было введено не число, попробуйте еще раз");
  }
}

for (let i = 0; i < numbers.length; i += 1) {
  total = total + numbers[i];
}

console.log(total);
