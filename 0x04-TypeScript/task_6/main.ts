// Define the Director and Teacher interfaces
interface Director {
    workDirectorTasks(): string;
}

interface Teacher {
    workTeacherTasks(): string;
}

// Create a union type for Employee, which can be either a Director or Teacher
type Employee = Director | Teacher;

// Define the isDirector function as a type predicate
function isDirector(employee: Employee): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// Define the executeWork function
function executeWork(employee: Employee): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// Helper function to create employees based on salary
function createEmployee(salary: number): Employee {
    if (salary >= 1000) {
        return {
            workDirectorTasks: () => "Getting to director tasks",
        };
    } else {
        return {
            workTeacherTasks: () => "Getting to work",
        };
    }
}
