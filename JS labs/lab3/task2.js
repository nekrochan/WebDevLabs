function compareArrays(arr1, arr2) {
    for (let iArr1 in arr1) {
        for (let iArr2 in arr2) {
            if (arr1[iArr1] === arr2[iArr2]) console.log(arr1[iArr1])
        }
    }
}

let m1 = ['Hey', 'hello', 2, 4, 'Peter', 'e']
let m2 = ['Petar', 10, 'hey', 4, 'hello', '2']
let m3 = ['R', 'u', 's', 's', 'i', 'a']
let m4 = ['R', 'u', 't']
compareArrays(m1,m2)
console.log('')
compareArrays(m3,m4)