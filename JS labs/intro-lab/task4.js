function priceDefiner(groupSize, groupType, day){
    if (groupType == "Students"){
        if (day == "Friday") price = 8.45
        else if (day == "Saturday") price = 9.80
        else if (day == "Sunday") price = 10.46
        else return "Error caused by: DAY. It must be 'Friday', 'Saturday', or 'Sunday."

        if (groupSize > 29)
            return `Total price: ${(price * groupSize * 0.85).toFixed(2)}`

        return `Total price: ${(price * groupSize).toFixed(2)}`
    }

    else if(groupType == "Corporative") {
        if (day == "Friday") price = 10.90
        else if (day == "Saturday") price = 15.60
        else if (day == "Sunday") price = 16
        else return "Error caused by: DAY. It must be 'Friday', 'Saturday', or 'Sunday."

        if (groupSize > 99)
            return `Total price: ${((groupSize - 10) * price).toFixed(2)}`

        return `Total price: ${(price * groupSize).toFixed(2)}`
    }

    else if(groupType == "Regular") {
        if (day == "Friday") price = 15
        else if (day == "Saturday") price = 20
        else if (day == "Sunday") price = 22.50
        else return "Error caused by: DAY. It must be 'Friday', 'Saturday', or 'Sunday.'"

        if (groupSize > 9 & groupSize < 21)
            return `Total price: ${(price * groupSize * 0.95).toFixed(2)}`

        return `Total price: ${(price * groupSize).toFixed(2)}`
    }

    else return "Error caused by: GROUP. It must be 'Students', 'Corporative', or 'Regular'."
}

console.log(`29, "Students", "Sunday" -->\t ${priceDefiner(29, "Students", "Sunday")}`)
console.log(`30, "Students", "Sunday" -->\t ${priceDefiner(30, "Students", "Sunday")}`)
console.log(`10, "Students", "Monday" -->\t ${priceDefiner(10, "Students", "Monday")}`)

console.log(`99, "Corporative", "Friday" -->\t ${priceDefiner(99, "Corporative", "Friday")}`)
console.log(`100, "Corporative", "Friday" -->\t ${priceDefiner(100, "Corporative", "Friday")}`)

console.log(`9, "Regular", "Saturday -->\t ${priceDefiner(9, "Regular", "Saturday")}`)
console.log(`10, "Regular", "Saturday" -->\t ${priceDefiner(10, "Regular", "Saturday")}`)
console.log(`20, "Regular", "Saturday" -->\t ${priceDefiner(20, "Regular", "Saturday")}`)
console.log(`40, "Regular", "Saturday" -->\t ${priceDefiner(40, "Regular", "Saturday")}`)