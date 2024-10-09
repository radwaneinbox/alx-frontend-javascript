// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create new student objects
const student1: Student = {
    firstName: "Radioane",
    lastName: "Koubbane",
    age: 34,
    location: "Morocco"
};

const student2: Student = {
    firstName: "Anne",
    lastName: "Camille",
    age: 29,
    location: "Serbia"
};

// Create an array named studentsList containing the new students
const studentsList: Student[] = [student1, student2];

// Create a table and append it to the document
const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "pink";
table.appendChild(tbody);

// Populate the table with student data
studentsList.forEach((student: Student): void => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    nameCell.style.border = "1px solid pink";
    locationCell.style.border = "1px solid pink";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);

