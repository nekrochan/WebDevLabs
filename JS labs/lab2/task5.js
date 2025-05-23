function binaryToDecimal(binary){
    let binaryStr = String(binary)

    //проверка на 8-битность
    if (binaryStr.length!==8) return `${binary}: Not 8-bit. Length: ${binaryStr.length}`

    //проверка на бинарность
    for (let i = binaryStr.length-1; i >= 0; i--) {
        if (String(binaryStr[i])!=="0" && String(binaryStr[i])!=="1") return `${binary}: Not binary. Contains:  ${binaryStr[i]}`
    }

    //перевод в десятичные
    let decimal = 0
    for (let i = binaryStr.length-1; i >= 0; i--) {
        let order = binaryStr.length - 1 - i
        decimal += Number(binaryStr[i]) * Math.pow(2, order)
    }

    return decimal
}

console.log(binaryToDecimal('00001001'))
console.log(binaryToDecimal('11110000'))
console.log(binaryToDecimal('00001002'))
console.log(binaryToDecimal('111'))