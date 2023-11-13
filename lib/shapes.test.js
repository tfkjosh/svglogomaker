const { Triangle, Square, Circle } = require('./Shapes');

// Unit testing -> testing for a triangle with a blue background to render
describe("Triangle test", () => {
    test("test for a triangle with a blue background", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
  
  // Unit testing -> testing for a square with a purple background to render
  describe("Square test", () => {
    test("test for a square with a purple background", () => {
      const shape = new Square();
      shape.setColor("purple");
      expect(shape.render()).toEqual(
        '<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" fill="purple" />'
      );
    });
  });
  
  // Unit testing -> testing for a circle with a #ca00ca background to render
  describe("Circle test", () => {
    test("test for a circle with a #ca00ca background", () => {
      const shape = new Circle();
      shape.setColor("#ca00ca");
      expect(shape.render()).toEqual(
        '<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="115" r="80" fill="red" />'
      );
    });
  });


