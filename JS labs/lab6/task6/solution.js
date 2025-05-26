function attachEventsListeners() {

    let convertButtons = document.querySelectorAll('input[type="button"][value="Convert"]')

    convertButtons.forEach(convertButton => {
        convertButton.addEventListener('click', function () {
            let unitOfMeasurement = this.id.replace('Btn', '')
            let input = parseFloat(document.getElementById(unitOfMeasurement).value)

            if (!isNaN(input)) {

                let seconds = 0 // преобразовывать удобнее если сначала перевести в секунды

                if (unitOfMeasurement === 'seconds') seconds = input
                else if (unitOfMeasurement === 'minutes') seconds = input * 60
                else if (unitOfMeasurement === 'hours') seconds = input * 60 * 60
                else if (unitOfMeasurement === 'days') seconds = input * 60 * 60 * 24

                document.getElementById('seconds').value = seconds
                document.getElementById('minutes').value = seconds / 60
                document.getElementById('hours').value = seconds / (60 * 60)
                document.getElementById('days').value = seconds / (60 * 60 * 24)
            }
        });
    });

}