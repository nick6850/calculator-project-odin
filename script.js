

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}




function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
    }
}



let digits = document.querySelectorAll('.digits > div')
let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let operator = document.querySelector('#operator')

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        if (operator.textContent == '') {
            num1.textContent = digit.textContent
        } else {
            num2.textContent = digit.textContent
        }
    })
})