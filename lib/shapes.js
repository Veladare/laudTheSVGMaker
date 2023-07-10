class Shapes {
    constructor(color){
    this.color = color;
    }
    
    setColor(color){
        this.color = color
    }

};

class Circle extends Shapes{
render(){
    return
}
};
class Square extends Shapes{
render(){
    return
}

};
class Triangle extends Shapes{
 render(){
    return (`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`);
}

};

module.exports = {Triangle, Square, Circle} 