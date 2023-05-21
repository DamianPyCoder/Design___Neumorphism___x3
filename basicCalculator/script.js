let display = document.getElementById('display');
let expression = '';

function clearDisplay() {
    display.value = '';
    expression = '';
}

function appendNumber(number) {
    display.value += number;
    expression += number;
}

function appendOperator(operator) {
    display.value += operator;
    expression += operator;
}

function appendDecimal(decimal) {
    if (!display.value.includes(decimal)) {
        display.value += decimal;
        expression += decimal;
    }
}

function calculate() {
    let result = eval(expression);
    display.value = result;
    expression = '';
}
