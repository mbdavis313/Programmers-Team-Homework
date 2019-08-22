// requiring the filesystem module
const fs = require("fs");
// Requires the team.js file.
const Team = require('./team')
// read the file input
const lineReader = require('readline').createInterface({
    input: fs.createReadStream('members.txt')
});

// create a programmers array
// *** Test manually using my name, age, job, and code name. ***
let programmers = [];
const team = new Team('teamProject');  
console.log(team);
console.log(team.programmerCount());
team.addProgrammer('Marvin', 64, 'FullStack', 'Node');
console.log(team);
console.log(team.programmerCount());


// lineReader reads from members.txt file.
lineReader
    .on('line', function (line) {
        console.log('Line from file:', line);
        const member = line.split(",");
        console.log(member);
        programmers.push(member);
    })
    .on('close', process);

// code when lineReader is done
function process() {

    //
    // TO DO: print each user's name to the console here
    //
    // For Loops cycles through array.
    for(let i=0; i<programmers.length; i++) {
        console.log(programmers[i][0]);
    }

} 