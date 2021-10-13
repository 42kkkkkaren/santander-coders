var firstValue
var secondValue
var op

firstValue = prompt("Insira o primeiro numero: \n");
op = prompt("Qual operacao deseja efetuar (+) (-) (*) (/)? : \n");
secondValue = prompt("Insira o segundo numero: \n");

/*if ((operator != "+") || (operator != "-") || (operator != "/") || (operator != "*")){
  console.log("Não válido");
}*/

var list;
var result = operations(op, firstValue, secondValue);
list.push(result);

console.log('Resultado:', result);

function operations(operator, value1, value2){
  if (operator == "+") {
      return parseInt(value1) + parseInt(value2);
  } else if
      (operator == "-") {
      return parseInt(value1) - parseInt(value2);
  } else if
      (operator == "*") {
      return parseInt(value1) * parseInt(value2);
  } else if
      (operator == "/") {
      return parseInt(value1) / parseInt(value2);
  }
}