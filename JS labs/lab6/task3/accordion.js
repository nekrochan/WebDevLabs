function toggle() {
    //console.log('TODO:...');
    let extra = document.getElementById('extra')
    let button = document.getElementsByClassName('button')

    if (window.getComputedStyle(extra).display === 'none') {
        // изначально содержимое скрыто
        extra.style.display = 'block'
        button.textContent = 'Less'
        
    } else {
        // содержимое открыто -> скрыть
        extra.style.display = 'none'
        button.textContent = 'More'
    }
}