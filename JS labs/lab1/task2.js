function customRounder(number,order){
    if(order>15)
        order=15
    return parseFloat(number.toFixed(order))
}

console.log(customRounder(2.12001,4))
console.log(customRounder(2.66666666666666666666666666666666666666,16))
console.log(customRounder(3.1415926535897932384626433832795,2))
console.log(customRounder(10.5,3))