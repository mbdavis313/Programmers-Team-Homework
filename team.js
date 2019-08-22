const Programmer = require('./programmer');
class Team {
    constructor(project) {
        this.project = project;
        this.programmers = [];
    };
    
    addProgrammer(name, age, position, language) {
        this.programmers.push(new Programmer(name, age, position, language));
    };

    programmerCount() {
        return this.programmers.length;
      };

    }
   
module.exports = Team;
 