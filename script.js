

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
let operators = document.querySelectorAll('.operators')

let del = document.querySelector('#del')
let eq = document.querySelector('#eq')
let res = document.querySelector('#res')
let eqSign = document.querySelector('#eqSign')

let screenItems = document.querySelectorAll('#screen > div')


digits.forEach(digit => {
    digit.addEventListener('click', () => {
        if (eq.textContent === '') {
            if (operator.textContent == '') {
                num1.textContent += digit.textContent
            } else {
                num2.textContent += digit.textContent
            }
        }
})
})

operators.forEach( (sign) => {
    sign.addEventListener('click', () => {
        if (num2.textContent === '') {
            operator.textContent = sign.textContent
        }
        if (res.textContent != '') {
            num1.textContent = res.textContent 
            num2.textContent = ''
            eq.textContent = ''
            res.textContent = ''
            operator.textContent = sign.textContent
        }
    })
})

del.addEventListener('click', () => {
    screenItems.forEach(item => {
        item.textContent = ''
    })
})

eqSign.addEventListener('click', () => {
    if (res.textContent === '') {
        eq.textContent = '='
        res.textContent = operate(Number(num1.textContent), operator.textContent, Number(num2.textContent))
    }
}); 