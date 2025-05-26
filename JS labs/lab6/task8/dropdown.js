function addItem() {

    // значения из полей ввода с идентификаторами «newItemText» и «newItemValue»
    let text = document.getElementById('newItemText').value
    let value = document.getElementById('newItemValue').value

    // добавить соответствующие <option> в <select> с идентификатором «menu»
    let option = new Option(text, value)
    document.getElementById('menu').add(option)
}