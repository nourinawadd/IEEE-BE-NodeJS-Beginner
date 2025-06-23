import Vehicle from "./Vehicle.js";

class Bicycle extends Vehicle {
    constructor(color = "blue", wheels = 2, horn = "honk honk"){
        super(color, wheels, horn);
    }
}

export default Bicycle;