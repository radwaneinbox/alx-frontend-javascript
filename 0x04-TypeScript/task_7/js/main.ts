// Define the Subjects type allowing only "Math" or "History"
type Subjects = "Math" | "History";

// Implement the teachClass function
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else {
        return "Teaching History";
    }
}
