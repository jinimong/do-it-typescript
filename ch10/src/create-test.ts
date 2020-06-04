import { create } from './create';

class Point {
  constructor(public x: number, public y: number) {}
}

[create(Date), create(Point, 0, 0)].forEach((s) => console.log(s));

// 2020-06-04T12:42:29.609Z
// Point { x: 0, y: 0 }
