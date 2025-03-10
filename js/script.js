console.log("Simple Calculator script.js is loaded.....");

function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".buttons button, .clear");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.textContent;
            if (value === "=") {
                calculate();
            } else if (value === "C") {
                clearDisplay();
            } else {
                appendValue(value);
            }
        });
    });
});