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
        expect(shape.render()).toEqual(`<rect x="75" y="75" width="150" height="150" fill="red" />`);
    });
});

describe("Circle", () =>{
    it("should render a circle", () =>{
        const shape = new Circle();
        shape.setColor("yellow")
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="50" fill="yellow" />`);
    })
})