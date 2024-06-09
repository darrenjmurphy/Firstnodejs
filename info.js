var os = require('os');

var today = new Date();

var message = 'This script is running on Node.js ' + process.version + 
              '\n\t on the ' + os.type() + '-based operating system.';

message += '\n\nToday is ' + today;

console.log(message);