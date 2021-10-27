//Class Person
class Person{
  constructor (firstName, lastName, age, gender, interests){
        this.name = ${firstName} ${lastName};
        this.age = age;
        this.gender = gender;
        this.interests = interests;
  }
  bio(){
    return (${this.name} is ${this.age} yers old. They like ${this.interests});
  }
  greeting(){
    return `Hi! I'm ${this.name}`
  }
}

//Class Teacher
class Teacher extends Person{
 constructor
 (firstName, lastName, age, gender, interests, subject){
    super(firstName, lastName, age, gender, interests);

  this.subject = subject;
}
  greeting(){
    return `Hello. My name is Mr./Mrs. ${this.name.lastName}, and I teach ${this.subject}.`;
}

//Class Student
class Student extends Person{
  constructor
  (firstName, lastName, age, gender, interests, subject){
    super(firstName, lastName, age, gender, interests);
}
greeting(){
  return `Hi! I'm ${this.name.firstName}.`;
}
