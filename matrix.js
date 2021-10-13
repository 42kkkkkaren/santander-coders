//Classificação indicativa do filme Matrix: 18. Retornar os elementos cuja idade esteja acima ou igual a classificação indicativa. 
const people = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
];

function age(people) {
  return people.filter(name => name.age >= 18);
}

var result = age(people);
console.log(result);


/*const filter = (age) => {
  if (age >= 18){
    return 'Allowed';
  }else{
    return 'notAllowed';
  }
};*/
