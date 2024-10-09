// Define the constructor interface for StudentClass
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Define the interface for StudentClass methods and properties
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Implement the StudentClass based on the interfaces
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); 
console.log(student.displayName());   

