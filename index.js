const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./info/questions.js');
const fileName = "./examples/logo.svg";
const setShape = require('./tests/setShape.js')

// function to create new svg file using inquirer response and file system
function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

// initialize, ask questions then createLogo using responses, catch any errors
function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();