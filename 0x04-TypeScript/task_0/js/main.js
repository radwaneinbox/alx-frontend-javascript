// Create two students
var student1 = {
    firstName: "Radioane",
    lastName: "Koubbane",
    age: 34,
    location: "Morocco"
};

var student2 = {
    firstName: "Anne",
    lastName: "Camille",
    age: 29,
    location: "Serbia"
};

// Create an array named studentsList containing the students
var studentsList = [student1, student2];

// Create a table and style it
var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
table.style.background = "pink";

// Create table headers
var headerRow = document.createElement('tr');
var firstNameHeader = document.createElement('th');
var locationHeader = document.createElement('th');
firstNameHeader.textContent = "First Name";
locationHeader.textContent = "Location";

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);
table.appendChild(thead);
table.appendChild(tbody);

// Populate the table with student data
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    
    firstNameCell.style.border = "1px solid pink";
    locationCell.style.border = "1px solid pink";
    firstNameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);

