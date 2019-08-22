// constructor function for creating programmer objects
class Programmer {
    constructor(name, position, age, language) {
      this.name = name;
      this.position = position;
      this.age = age;
      this.language = language;	
    };

    printInfo() {
      console.log(`
      Name: ${this.name}
      Position: ${this.position}
      Age: ${this.age}
      Languages: ${this.language}
      `);
    };
  }
  
  module.exports = Programmer;
 