function processArray(incomingArr) {

    let sumIncomingArr = 0
    for (let i = 0; i < incomingArr.length; i++) {
        incomingArr[i] = Number(incomingArr[i])
        sumIncomingArr += incomingArr[i]
    }

    let arr = incomingArr
    let sumArr = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) arr[i] += i
        else arr[i] -= i
        sumArr += arr[i]
    }

    console.log(String(arr))
    console.log(sumIncomingArr)
    console.log(sumArr)
}

processArray([5, 15, 23, 56, 35])
console.log('')
processArray([-5, 11, 3, 0, 2])