class Person {
  name;
  age;
  gender;
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.getName = this.getName.bind(this);
    this.getAge = this.getAge.bind(this);
    this.getGender = this.getGender.bind(this);
    this.setName = this.setName.bind(this);
    this.setAge = this.setAge.bind(this);
    this.setGender = this.setGender.bind(this);
  }

  getName = () => this.name;

  getAge = () => this.age;

  getGender = () => this.gender;

  setName = (name) => {
    this.name = name;
  };

  setAge = (age) => {
    this.age = age;
  };

  setGender = (gender) => {
    this.gender = gender;
  };
}

class Student extends Person {
  school;
  static SSN = 0;
  constructor(name, age, gender, school) {
    super(name, age, gender);
    this.school = school;
    this.getSchool = this.getSchool.bind(this);
  }
  getSchool = () => this.school;
}

const John = new Student('John Doe', 25, 'Male', 'Harvard');
