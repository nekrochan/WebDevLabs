function solve() {
  let inputText = document.getElementById('text').value
  let style = document.getElementById('naming-convention').value.toLowerCase()

  // формирование набора слов в pascal case
  let newWords = []
  inputText.split(' ').forEach(word => {
    let firstLetter = word[0].toUpperCase()
    let otherLetters = word.slice(1).toLowerCase()
    newWords.push(firstLetter + otherLetters)
  })

  let newText = newWords.join('')

  // для camel case нужно изменить только первую букву
  if (style === 'camel case') newText = newText[0].toLowerCase() + newText.slice(1)
  else if (style!='pascal case') newText = 'Error!'

  document.getElementById('result').textContent = newText
}