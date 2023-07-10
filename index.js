const fs =require('fs')
const inquirer = require('inquirer')
const { Triangle, Square, Circle } = require("./lib/shapes");

const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter up to three characters"
    },
    {
        type: 'input',
        name: "text-color",
        message: "enter a color keyword (OR a hexadecimal number) for the color of your characters",
    },
    {
        type: "list",
        name: "shape-image",
        message: "Select a shape",
        choices: [
            "Triangle",
            "Square",
            "Circle",
        ]
    },
    {
        type: 'input',
        name: 'shape-color',
        message: "give your shape a color keyword or (OR a hexadecimal number)",
    }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('File successfully written:', fileName);
    });
}
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("logo.svg", data);
    });
}
init();