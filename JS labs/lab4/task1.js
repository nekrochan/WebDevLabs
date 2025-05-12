function minOfThree(a, b, c) {
    if (!Number(a) || !Number(b) || !Number(c)) return "Function substract accept only numbers"
    let min = Number(a)
    if (min > b) min = Number(b)
    if (min > c) min = Number(c)
    return min
}

console.log(minOfThree(2,5,3))
console.log(minOfThree(600, 342, 123))
console.log(minOfThree(25, 21, 4))