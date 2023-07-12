const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require("./lib/shapes");

class SVG {
  constructor(textElement, shapeElement) {
    this.textElement = textElement;
    this.shapeElement = shapeElement;
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }

  setTextElement(color, text) {
    this.textElement = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter up to three characters."
  },
  {
    type: 'input',
    name: "textcolor",
    message: "Enter a color keyword or hexadecimal number for the color of your characters.",
  },
  {
    type: "list",
    name: "shapeimage",
    message: "Select a shape.",
    choices: [
      "Triangle",
      "Square",
      "Circle",
    ]
  },
  {
    type: 'input',
    name: 'colorshape',
    message: "Enter a color keyword or hexadecimal number for the color of your shape.",
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File successfully written:', fileName);
    }
  });
}


function init() {
  inquirer.prompt(questions).then((data) => {
    if (data.title.length < 1 || data.title.length > 3) {
      console.log('Invalid number of characters');
      return;
    }

    let user_shape;
    if (data.shapeimage === 'Triangle') {
      user_shape = new Triangle();
    } else if (data.shapeimage === 'Square') {
      user_shape = new Square();
    } else if (data.shapeimage === 'Circle') {
      user_shape = new Circle();
    }

    user_shape.setColor(data.colorshape);
    const svgplus = new SVG();
    svgplus.setTextElement(data.textcolor, data.title);
    svgplus.setShapeElement(user_shape);
    const svgString = svgplus.render();
    writeToFile('logo.svg', svgString);
  });
}

init();

module.exports = {SVG, init}
