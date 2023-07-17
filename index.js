const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require("./lib/shapes");
const SVG  = require("./lib/svgfile")

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
    fs.writeFileSync('logo.svg', svgString);
    console.log('File "logo.svg" written successfully!');
  });
}

init();
