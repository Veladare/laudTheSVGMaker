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
  
  module.exports = SVG;