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
    return (Hi! I'm ${this.name});
  }
}

//Class Teacher
class Teacher{
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

Teacher.prototype.greeting = class Person{
  alert('Hi! I\'m ' + this.name.first + '.');
};

//Class Student
class Student{
  Person.call(this, first, last, age, gender, interests);
}

Student.prototype.greeting = class Person{
  alert('Hi! I\'m ' + this.name.first + '.');
};