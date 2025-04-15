function largestDivisor(number){
    var checkingDivisors = [10, 7, 6, 3, 2];
    for (var divisor of checkingDivisors) {
        if (number % divisor == 0)
            return`${number}:\t Число делится на ${divisor}`;
    }
    return `${number}:\t Не делится`;
}

console.log(largestDivisor(30))
console.log(largestDivisor(15))
console.log(largestDivisor(12))
console.log(largestDivisor(1643))