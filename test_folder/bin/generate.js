const process = require("process");


console.log(process.argv);

const app = require("../config/application")

console.log(new app());

process.exit();

