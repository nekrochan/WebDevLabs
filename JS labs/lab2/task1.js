function sum(number){
    var chars = String(number).split('')
    let total = 0;
    for (var char of chars) {
        total = total + Number(char)
    }
    return total
}

console.log(sum(245678))
console.log(sum(97561))
console.log(sum(543))