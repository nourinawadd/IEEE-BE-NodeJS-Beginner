import Vehicle from './Vehicle.js';
import Bicycle from './Bicycle.js';

const bus = new Vehicle("red", 6);
bus.honkHorn(); // Output: beep beep

const bicycle = new Bicycle("green", 2, "ring ring");
bicycle.honkHorn(); // Output: ring ring