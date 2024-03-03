//calculator app
// prompt first number
var num1 = parseFloat(prompt("Enter the first number:"));

// check the input
if (isNaN(num1)) {
    alert("Invalid input. Please enter a valid number.");
} else { 
    var operator = prompt("Enter the operator (+, -, *, /):"); // propt operator
    
    // check the input
    if (!"+-*/".includes(operator)) {
        alert("Invalid operator. Please enter from: +, -, *, /");
    } else {
        // prompt second number
        var num2 = parseFloat(prompt("Enter the second number:"));

        // check the input
        if (isNaN(num2)) {
            alert("Invalid input. Please enter a valid number.");
        } else {
            var result;

            // calculations
            if (operator === '+') {
                result = num1 + num2;
            } else if (operator === '-') {
                result = num1 - num2;
            } else if (operator === '*') {
                result = num1 * num2;
            } else if (operator === '/') {
                // zero division case
                if (num2 === 0) {
                    alert("Error");
                } else {
                    result = num1 / num2;
                }
            }

            if (result !== undefined) { // Display result
                alert("Result: " + result);
            }
        }
    }
}