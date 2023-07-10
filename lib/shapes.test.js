const { Triangle, Square, Circle } = require("./shapes");

describe("Triangle", () => {
  it("should render a Triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe("Square", () => {
    it("should render a Square", () =>{
        const shape = new Square();
        shape.setColor("red")
        expect(shape.render()).toEqual();
    });
});

describe("Circle", () =>{
    it("should render a circle", () =>{
        const shape = new Circle();
        shape.setColor("yellow")
        expect(shape.render()).toEqual();
    })
})