function lockedProfile() {

    let profiles = document.querySelectorAll('.profile')

    profiles.forEach(profile => {

        let hidden = profile.querySelector('div[id$="HiddenFields"]')
        let button = profile.querySelector('button')
        let radios = profile.querySelectorAll('input[type="radio"]')

        radios.forEach(radio => { radio.addEventListener('change', changeRadioCondition) })
        button.addEventListener('click', changeButtonCondition)

        // вспомогательные функции:

        function changeRadioCondition() {

            let isLocked = profile.querySelector('input[value="lock"]').checked
            if (isLocked) {
                hidden.style.display = 'none'
                button.textContent = 'Show more'
            }

        }

        function changeButtonCondition() {

            let isLocked = profile.querySelector('input[value="lock"]').checked
            if (!isLocked) { // сворачивать/разворачивать можно только незаблокированных
                // без проверки '' открывается только при втором нажатии на кнопку
                if ((hidden.style.display == 'none') || (hidden.style.display == '')) {
                    // кнопка разворачивает содержимое
                    hidden.style.display = 'block'
                    button.textContent = 'Hide'
                } else {
                    // кнопка сворачивает содержимое
                    hidden.style.display = 'none'
                    button.textContent = 'Show more'
                }
            }

        }

    })
}