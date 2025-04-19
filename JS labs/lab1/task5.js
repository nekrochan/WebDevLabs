function isLeapYear(year){
    if (year % 400 == 0) return `${year}: yes (by 400)`
    else if (year % 100 == 0) return `${year}: no (by 100)`
    else if (year % 4 == 0) return `${year}: yes (by 4)`
    else return `${year}: no`
}

console.log(isLeapYear(2400))
console.log(isLeapYear(1900))
console.log(isLeapYear(2024))
console.log(isLeapYear(2025))