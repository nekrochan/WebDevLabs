function substract(a, b, c) {
    if (!Number(a) || !Number(b) || !Number(c)) return "Function substract accept only numbers"
    return Number(a) + Number(b) - Number(c)
}

console.log(substract(
    23,
    6,
    10
))
console.log(substract(
    1,
    17,
    30     
))
console.log(substract(
    42, 
    58, 
    100
))