const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/Shapes')

// initialize, ask questions then createLogo using responses, catch any errors
    const questions = [
    {
        type:'list',
        message:'What shape do you want the svg?',
        name:'shape',
        choices:[
            'Triangle',
            'Square',
            'Circle',
        ]
    },
    {
        type:'input',
        message:'What color do you want the shape?',
        name:'shape_color',
    },
    {
        type:'input',
        message:'Please type in a character set of 3 letters?',
        name:'text',
    },
    {
        type:'input',
        message:'What color do you want the text?',
        name:'text_color',
    },
];

function generateLogo(data) {
    let shapes = undefined
    if (data.shape === 'Triangle') {
        shapes = new Triangle('<polygon points="150, 18 244, 182 56, 182"/>')
        
    } else if (data.shape === 'Square') {
        shapes = new Square('<rect x="73" y="40" width="160" height="160"/>')
        
    } else [
        shapes = new Circle('<circle cx=Z"150" cy="115" r="80"/>')
        
    ]
    return shapes.render();
}


function writeToFile(fileName, data) {
    var content = generateLogo(data);
    fs.writeFile(fileName, content, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Generated logo.svg')
    });
}



function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    });
}

init();
