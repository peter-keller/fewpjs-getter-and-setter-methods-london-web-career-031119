// Add your Circle class here
const pi = Math.PI;

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = this.radius = diameter / 2;
  }

  get circumference() {
    return pi * (this.radius * 2);
  }

  set circumference(circumference) {
    this.radius = circumference / (pi * 2);
  }

  get area() {
    return this.radius * this.radius * pi;
  }

  set area(area) {
    this.radius = Math.sqrt(area) / pi;
  }
}

/*
Use Math.PI to get an accurate measurement of pi (π)
Define getter methods for diameter, circumference, and area which will calculate each value using this.radius and pi
Define setter methods for diameter, circumference, and area which will accept values for each calculation, calculate the radius based on the input value and set this.radius accordingly
For reference, here are the formulas for calculating diameter, circumference and area:

Diameter = radius • 2
Circumference = π • diameter
Area = π • radius2 */
