import { calcArea } from './calcArea';
import { ISquare, IRectangle, ICircle } from './IShape';
import { squaredMap } from '../../ch08/squaredMap';

const square: ISquare = { tag: 'square', size: 10 };
const rectangle: IRectangle = { tag: 'rectangle', width: 4, height: 5 };
const circle: ICircle = { tag: 'circle', radius: 10 };

console.log(
  calcArea(square), // 100
  calcArea(rectangle), // 20
  calcArea(circle) // 314.1592653589793
);
