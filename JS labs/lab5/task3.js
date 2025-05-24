function printStore(storedArr, orderedArr) {

    let store = []
    
    // stored
    for (let i = 0; i < storedArr.length; i += 2) {
        store.push({
            item: String(storedArr[i]),
            value: Number(storedArr[i + 1])
        })
    }

    // ordered
    for (let i = 0; i < orderedArr.length; i += 2) {
        let itemOrdered = String(orderedArr[i])
        let valueOrdered = Number(orderedArr[i + 1])
        let indexAtStore = getIndexAtStore(store, itemOrdered)
        
        if (indexAtStore == -1) {
            store.push({ item: itemOrdered, value: valueOrdered })
        } else {
            store[indexAtStore].value += valueOrdered
        }
    }

    store.forEach(element => {
        console.log(`${element.item} -> ${element.value}`)
    })
}

// ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ
function getIndexAtStore(list, item) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].item == item) return i
    }
    return -1
}

// ТЕСТ
let stored = [ 
    'Chips', '5', 'CocaCola', '9', 'Bananas', 
    '14', 'Pasta', '4', 'Beer', '2' 
]

let ordered = [ 
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 
    'Tomatoes', '70', 'Bananas', '30' 
]

printStore(stored, ordered)