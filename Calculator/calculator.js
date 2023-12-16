let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = Function('"use strict";return (' + display.value + ')')();
    } catch (error) {
        display.value = 'Error';
    }
}