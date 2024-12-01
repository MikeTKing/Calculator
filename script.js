// Basic math functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? null : a / b;

// Calculator state
let displayValue = '0';
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

// Operate function
function operate(op, a, b) {
    a = Number(a);
    b = Number(b);
    
    switch(op) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '×': return multiply(a, b);
        case '÷': 
            if (b === 0) return 'Error: Division by zero';
            return divide(a, b);
        default: return null;
    }
}

// Initialize calculator
document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const digits = document.querySelectorAll('.digit');
    const operators = document.querySelectorAll('.operator');
    const equals = document.querySelector('.equals');
    const clear = document.querySelector('.clear');
    const decimal = document.querySelector('.decimal');
    const backspace = document.querySelector('.backspace');

    // Update display
    function updateDisplay() {
        display.textContent = displayValue;
    }

    // Handle digit input
    digits.forEach(button => {
        button.addEventListener('click', () => {
            if (waitingForSecondNumber) {
                displayValue = button.textContent;
                waitingForSecondNumber = false;
            } else {
                displayValue = displayValue === '0' ? button.textContent : displayValue + button.textContent;
            }
            updateDisplay();
        });
    });

    // Handle operator input
    operators.forEach(button => {
        button.addEventListener('click', () => {
            if (firstNumber === null) {
                firstNumber = displayValue;
            } else if (!waitingForSecondNumber) {
                const result = operate(operator, firstNumber, displayValue);
                if (result === 'Error: Division by zero') {
                    displayValue = result;
                    firstNumber = null;
                    operator = null;
                    updateDisplay();
                    return;
                }
                displayValue = Math.round(result * 1000000) / 1000000;
                firstNumber = displayValue;
            }
            operator = button.textContent;
            waitingForSecondNumber = true;
            updateDisplay();
        });
    });

    // Handle equals
    equals.addEventListener('click', () => {
        if (firstNumber === null || waitingForSecondNumber) return;
        const result = operate(operator, firstNumber, displayValue);
        if (result === 'Error: Division by zero') {
            displayValue = result;
        } else {
            displayValue = Math.round(result * 1000000) / 1000000;
        }
        firstNumber = null;
        operator = null;
        waitingForSecondNumber = true;
        updateDisplay();
    });

    // Handle clear
    clear.addEventListener('click', () => {
        displayValue = '0';
        firstNumber = null;
        operator = null;
        waitingForSecondNumber = false;
        updateDisplay();
    });

    // Handle decimal
    decimal.addEventListener('click', () => {
        if (!displayValue.includes('.')) {
            displayValue += '.';
            updateDisplay();
        }
    });

    // Handle backspace
    backspace.addEventListener('click', () => {
        if (displayValue.length === 1 || displayValue === 'Error: Division by zero') {
            displayValue = '0';
        } else {
            displayValue = displayValue.slice(0, -1);
        }
        updateDisplay();
    });

    // Add keyboard support
    document.addEventListener('keydown', (event) => {
        if (/[0-9]/.test(event.key)) {
            document.querySelector(`.digit:nth-child(${event.key === '0' ? 10 : parseInt(event.key) + 2})`).click();
        } else if (event.key === '.') {
            decimal.click();
        } else if (event.key === '+' || event.key === '-') {
            document.querySelector(`.operator[data-key="${event.key}"]`).click();
        } else if (event.key === '*') {
            document.querySelector('.operator:nth-child(4)').click();
        } else if (event.key === '/') {
            document.querySelector('.operator:nth-child(3)').click();
        } else if (event.key === 'Enter' || event.key === '=') {
            equals.click();
        } else if (event.key === 'Backspace') {
            backspace.click();
        } else if (event.key === 'Escape') {
            clear.click();
        }
    });
}); 