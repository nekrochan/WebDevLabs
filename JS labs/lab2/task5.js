function binaryToDecimal(binary){
    let binaryStr = String(binary)
    let decimal = 0
    for (let i = binaryStr.length-1; i >= 0; i--) {
        let order = binaryStr.length - 1 - i
        decimal += Number(binaryStr[i]) * Math.pow(2, order)
    }

    return decimal
}

console.log(binaryToDecimal('00001001'))
console.log(binaryToDecimal('11110000'))