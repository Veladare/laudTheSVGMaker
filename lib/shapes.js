class Shapes {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shapes {
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shapes {
    render() {
 
      return `<rect x="75" y="75" width="150" height="150" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shapes {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
module.exports = {Triangle, Square, Circle} 