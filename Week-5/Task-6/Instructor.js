export default class Instructor {
    constructor(name) {
        if (Instructor.instance) {
            return Instructor.instance;
        }
        this.name = name;
        Instructor.instance = this;
    }
}