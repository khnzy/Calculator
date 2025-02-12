

document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".calculator__display");
    const buttons = document.querySelectorAll(".calculator__functions button");

    let currentInput = "";  // Stores the current expression
    let operatorUsed = false; // Tracks if an operator is used consecutively

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.value;

            if (value === "clear") {
                // Clear display
                currentInput = "";
                operatorUsed = false;
                display.textContent = "0";
            } else if (value === "=") {
                try {
                    // Evaluate the expression safely
                    currentInput = eval(currentInput).toString();
                    display.textContent = currentInput;
                    operatorUsed = false;
                } catch (error) {
                    display.textContent = "Error";
                    currentInput = "";
                }
            } else if (value === "pos-neg") {
                // Toggle positive/negative
                if (currentInput) {
                    currentInput = (parseFloat(currentInput) * -1).toString();
                    display.textContent = currentInput;
                }
            } else if (value === "%") {
                // Convert current number to percentage
                if (currentInput) {
                    currentInput = (parseFloat(currentInput) / 100).toString();
                    display.textContent = currentInput;
                }
            } else {
                // Append number or operator to the current input
                if ("+-*/".includes(value)) {
                    if (!operatorUsed) {
                        currentInput += value;
                        operatorUsed = true;
                    }
                } else {
                    currentInput += value;
                    operatorUsed = false;
                }
                display.textContent = currentInput;
            }
        });
    });
});
