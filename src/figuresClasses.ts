enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
export interface Figure {
  shape : Shape,
  color: Color,
  getArea() : number,
}

const roundedNumber = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side length must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`The longest side of a triangle
                      can not be greater than a sum of two others`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt((s - this.a) * (s - this.b) * (s - this.c) * s);

    return roundedNumber(area);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const circleRadius = Math.PI * (this.radius * this.radius);

    return roundedNumber(circleRadius);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    const figureArea = this.width * this.height;

    return roundedNumber(figureArea);
  }
}

export function getInfo(figure:Figure):string {
  return (`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
}
