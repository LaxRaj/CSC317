// hello.js - Part 0: Environment Setup
// This file demonstrates JavaScript fundamentals and ES6+ features

const greeting = "JavaScript";

// Arrow function using template literals (ES6+ features)
const createMessage = (name) => {
    return `Hello, ${name}!`;
};

// Function to display current date and time
const getCurrentDateTime = () => {
    const now = new Date();
    return `Current time: ${now.toLocaleString()}`;
};

// Object using shorthand property syntax (ES6+)
const developer = {
    name: "Lakshyaraj Bhati",
    course: "CSC317",
    assignment: "Assignment 4",
    getInfo() {
        return `${this.name} - ${this.course} - ${this.assignment}`;
    }
};

// Array methods and destructuring (ES6+)
const technologies = ["HTML", "CSS", "JavaScript", "Node.js"];
const [first, second, ...rest] = technologies;

// Main execution
console.log(createMessage(greeting));
console.log(getCurrentDateTime());
console.log(developer.getInfo());
console.log(`Learning: ${first}, ${second}, and ${rest.join(", ")}`);

// Export functions for potential use in other modules (ES6+)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createMessage, getCurrentDateTime, developer };
}

// For browser use - attach functions to window object
if (typeof window !== 'undefined') {
    window.createMessage = createMessage;
    window.getCurrentDateTime = getCurrentDateTime;
    window.developer = developer;
} 