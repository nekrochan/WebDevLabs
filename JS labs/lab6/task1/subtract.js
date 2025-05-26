function subtract() {

    let firstNumber = parseFloat(
        // document - «входная точка» в DOM
        document.getElementById('firstNumber')  // .querySelector для любых селекторов
            .value  // извлечь значение
    )

    let secondNumber = parseFloat(document.getElementById('secondNumber').value)

    let difference = firstNumber - secondNumber

    // подставить вычисленное значение
    document.getElementById('result').textContent = difference

}