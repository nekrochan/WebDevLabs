function citiesTableToJson(citiesTable) {
    
    let citiesArr = []
    
    citiesTable.forEach(city => {
        citiesArr.push(String(city).split(' | ', 3))
    })

    let citiesJson = []
    
    citiesArr.forEach(city => {
        citiesJson.push({
            town: String(city[0]),
            latitude: parseFloat(city[1]).toFixed(2),
            longitude: parseFloat(city[2]).toFixed(2)
        })
    })

    return citiesJson
}

let inputTable = [
    'Moscow | 55.7522 | 37.6156', 
    'Beijing | 39.913818 | 116.363625'
]

let outputJson = citiesTableToJson(inputTable)

outputJson.forEach(element => {
    console.log(element)
})