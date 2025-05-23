function getEmployeesWithNumbers(employeeNameList) {
    
    let employeeListWithNumbers = []

    employeeNameList.forEach(employee => {
        employeeListWithNumbers.push({
            employeeName: String(employee),
            personalNum: String(employee).length
        })
    })

    return employeeListWithNumbers
}

let nameList = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]

let employeeList = getEmployeesWithNumbers(nameList)
employeeList.forEach(element => {
    console.log(`Name: ${element.employeeName} - Personal Number: ${element.personalNum}`)
})