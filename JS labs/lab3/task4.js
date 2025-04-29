function isWonderful(matrix) {

    // упрощение обработки - если строки разной длины, то матрицу бракуем
    for (let i = 0; i < matrix.length-1; i++) {
        if (matrix[i].length != matrix[i+1].length) return false
    }

    // проверка по рядам
    let rowSum = null
    for (let i = 0; i < matrix.length; i++) {
        let sum = 0
        for (let j = 0; j < matrix[i].length; j++) {
            sum += Number(matrix[i][j])
        }
        if (rowSum == null) rowSum = sum
        else if (rowSum != sum) return false
    }

    // проверка по столбцам
    let colSum = null;
    for (let j = 0; j < matrix[0].length; j++) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            sum += Number(matrix[i][j])
        }
        if (colSum == null) colSum = sum
        else if (colSum != sum) return false
    }

    return true
}

console.log(String(isWonderful(
    [  // true
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
)))

console.log(String(isWonderful(
    [  // false
        [11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]
    ]
)))

console.log(String(isWonderful(
    [  // true
        [1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]
    ]
)))

// проверка сумм столбцов
console.log(String(isWonderful(
    [  // false
        [4, 4, 3],
        [4, 4, 3],
        [4, 4, 3]
    ]
)))