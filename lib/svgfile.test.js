
const SVG = require('./svgfile');
const { Triangle, Square, Circle } = require("./shapes");

describe('SVG Class', () => {
    it('should render the SVG text & text color correctly', () => {
      const svgplus= new SVG();
      svgplus.setShapeElement(new Triangle());
      svgplus.setTextElement('red', 'hello');
      
      const result = svgplus.render();
  
      expect(result).toBe('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="undefined" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="red">hello</text></svg>');
    });
  });