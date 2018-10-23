let arrayOfInputs = []
let number
let result 
let resultTwo
let resultThree
let operatorIn
// get text input of button clicks
let input = document.getElementsByClassName('box')
let operator = document.getElementsByClassName('operator')
let erase = document.getElementById('ac')
let percentage = document.getElementById('percentage')

for (i = 0; i < input.length; i++) {
    input[i].addEventListener('click', function (e) {
        // get text content of button clicked. this needs to be converted to an integer
        const text = e.target.textContent
        // exclude mathematical operators
        if (!isNaN(text)) {
            arrayOfInputs.push(text)
            // if the an input has more than one number, display all numbers
            // together rather than individually and strip out commas
            number = parseInt(arrayOfInputs.toString().replace(/,/g, ''))
            document.querySelector('#display').textContent = number
            result = number
        }
    })
}

// math operations
for (j = 0; j < operator.length; j++) {
    operator[j].addEventListener('click', function (e) {
        // get text content of button clicked.
        const oper = e.target.textContent
        if (oper === '+') {
            resultTwo = result
            result = 0
            arrayOfInputs = []
            operatorIn = 1
        } else if (oper === '-') {
            resultTwo = result
            result = 0
            arrayOfInputs = []
            operatorIn = 2
        } else if (oper === 'x') {
            resultTwo = result
            result = 0
            arrayOfInputs = []
            operatorIn = 3
        } else if (oper === '/') {
            resultTwo = result
            result = 0
            arrayOfInputs = []
            operatorIn = 4
        } else if (oper === '=') {
            if (operatorIn === 1) {
                resultThree = result + resultTwo
                document.querySelector('#display').textContent = resultThree
            } else if (operatorIn === 2) {
                resultThree = - result + resultTwo
                document.querySelector('#display').textContent = resultThree
            } else if (operatorIn === 3) {
                resultThree = result * resultTwo
                document.querySelector('#display').textContent = resultThree
            } else if (operatorIn === 4) {
                resultThree = (resultTwo / result).toFixed(2)
                document.querySelector('#display').textContent = resultThree
            }
        }
    })
}

// clear the screen
erase.addEventListener('click', function (e) {
    document.querySelector('#display').textContent = 0
    arrayOfInputs = []
})

// convert output to percentage
percentage.addEventListener('click', function (e) {
    document.querySelector('#display').textContent = resultThree / 100
})
