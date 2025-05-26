function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick)

    function onClick() {
        let searchText = document.getElementById('searchField').value.toLowerCase()
        let lines = document.querySelectorAll('tbody tr')

        for (let line of lines) {

            let match = false
            let lineContent = line.getElementsByTagName('td')

            for (let cell of lineContent) {
                let cellContent = cell.textContent.toLowerCase()
                if (cellContent.includes(searchText)) {
                    match = true
                    break
                }
            }

            // если строка содержит поисковый запрос, то + select
            if (searchText && match) line.classList.add('select')
            // если не содержит, то селект снимается 
            else line.classList.remove('select')
        }

    }
}