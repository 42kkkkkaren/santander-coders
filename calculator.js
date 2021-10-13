var firstValue
var secondValue
var op

firstValue = prompt("Insira o primeiro numero: \n");
op = prompt("Qual operacao deseja efetuar (+) (-) (*) (/)? : \n");
secondValue = prompt("Insira o segundo numero: \n");

/*if ((operator != "+") || (operator != "-") || (operator != "/") || (operator != "*")){
  console.log("Não válido");
}*/

let list = [];
let result = operations(op, firstValue, secondValue);
list.push(result);

console.log('Resultado:', result, list);

function operations(operator, value1, value2){
  if (operator == "+") {
      return parseFloat(value1) + parseFloat(value2);
  } else if
      (operator == "-") {
      return parseFloat(value1) - parseFloat(value2);
  } else if
      (operator == "*") {
      return parseFloat(value1) * parseFloat(value2);
  } else if
      (operator == "/") {
      return parseFloat(value1) / parseFloat(value2);
  }
}