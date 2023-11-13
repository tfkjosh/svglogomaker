class Shape {
    constructor() {
        this.color ="";
    }
    setColor(colorVar) {
        this.color= colorVar;
    }
}

class Triangle extends Shape {
    render() {
        return '<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" />';
    }
}

class Square extends Shape {
    render() {
        return '<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" fill="purple" />';
    }
}

class Circle extends Shape {
    render() {
        return '<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="115" r="80" fill="red" />';
    }
}

module.exports = { Square, Triangle, Circle};
       