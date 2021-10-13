var firstValue
var secondValue
var op

firstValue = prompt("Primeiro valor: \n");
op = prompt("Escolha um operador: +  -  *  /? \n");
secondValue = prompt("Segundo valor: \n");

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