function calculator(a, operation, b) {
    switch (operation) {
        case '+': return Number(a) + Number(b)
        case '-': return Number(a) - Number(b)
        case '*': return Number(a) * Number(b)
        case '/': return Number(a) / Number(b)
        case '%': return Number(a) % Number(b)
        case '^': {
            let res = Number(a)
            for (let i = 1; i < b; i++) {
                res *= a
            }
            return res
        }
        default: return "Error caused by: OPERATION. One of [+, -, *, /, %, ^] expected."
    }
}


console.log(calculator(2, '+', 3))
console.log(calculator(2, '-', 3))
console.log(calculator(2, '*', 3))
console.log(calculator(2, '/', 3))
console.log(calculator(17, '%', 2))
console.log(calculator(2, '^', 3))