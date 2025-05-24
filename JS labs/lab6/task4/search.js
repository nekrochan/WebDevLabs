function search() {

   let searchText = document.getElementById('searchText').value.toLowerCase()
   let townUl = document.querySelectorAll('#towns li')

   let matches = 0

   townUl.forEach(town => {

      let townLowerCase = town.textContent.toLowerCase()
      if (townLowerCase.includes(searchText) && searchText != '') {
         matches++
         town.style.fontWeight = 'bolder'
         town.style.textDecoration = 'underline'

      } else {
         town.style.textDecoration = 'none'
         town.style.fontWeight = 'normal'
      }

   })

   document.getElementById('result').textContent = `${matches} matches found`
}