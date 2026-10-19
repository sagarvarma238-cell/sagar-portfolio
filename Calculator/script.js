let display = document.getElementById("display");
let currentInput = "0";

// Display update karne ke liye
function updateDisplay() {
    display.innerText = currentInput;
}

// Screen par number ya operator add karne ke liye
function appendValue(value) {
    if (currentInput === "0" && value !== ".") {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

// Clear All (AC) - Pura screen saaf karne ke liye
function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

// Delete / Backspace (DEL) - Ek-ek karke last character hatane ke liye
function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = "0";
    }
    updateDisplay();
}

// Percentage (%) nikalne ke liye (Fixed Error)
function appendPercentage() {
    try {
        // Pehle current expression ko calculate karein taaki ek single number mil jaye
        let expression = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(expression);
        
        // Us number ka percentage nikal dein
        result = result / 100;
        
        if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(8));
        }
        
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = "Error";
        updateDisplay();
        setTimeout(clearDisplay, 1500);
    }
}

// Result calculate karne ke liye (=)
function calculate() {
    try {
        let expression = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(expression);
        
        if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(8));
        }
        
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = "Error";
        updateDisplay();
        setTimeout(clearDisplay, 1500);
    }
}
