import Instructor from './Instructor.js';
export default class Student {
    constructor(name, needsInstructor = false) {
        this.name = name;

        if (needsInstructor) {
            this.instructor = new Instructor("Dr. Singleton");
        } else {
            this.instructor = null;
        }
    }
}