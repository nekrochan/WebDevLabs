function lockedProfile() {
    let profiles = document.querySelectorAll('.profile')

    profiles.forEach(profile => {
        let hidden = profile.querySelector('div[id$="HiddenFields"]')
        let button = profile.querySelector('button')
        let radios = profile.querySelectorAll('input[type="radio"]')

        radios.forEach(radio => radio.addEventListener('change', changeRadioCondition))
        button.addEventListener('click', changeButtonCondition)

        changeRadioCondition()

        function changeRadioCondition() {
            let isLocked = profile.querySelector('input[value="lock"]').checked;
            button.disabled = isLocked
        }

        function changeButtonCondition() {
            let isLocked = profile.querySelector('input[value="lock"]').checked
            if (!isLocked) {
                if (hidden.style.display === 'none' || hidden.style.display === '') {
                    hidden.style.display = 'block'
                    button.textContent = 'Hide it'
                } else {
                    hidden.style.display = 'none'
                    button.textContent = 'Show more'
                }
            }
        }
    })
}