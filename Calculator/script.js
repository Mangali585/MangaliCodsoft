function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculatePercentage() {
    let display = document.getElementById('display');
    display.value = parseFloat(display.value) / 100;
}

function calculateSquareRoot() {
    let display = document.getElementById('display');
    let value = parseFloat(display.value);
    if (value >= 0) {
        display.value = Math.sqrt(value);
    } else {
        display.value = 'Error';
    }
}

function calculateSquare() {
    let display = document.getElementById('display');
    let value = parseFloat(display.value);
    display.value = value * value;
}

function toggleNegate() {
    let display = document.getElementById('display');
    let value = parseFloat(display.value);
    if (display.value !== "") {
        display.value = -value;
    }
}

function eraseLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}