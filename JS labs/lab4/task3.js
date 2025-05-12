function matrix(n) {
    if (!Number(n) || Number(n)<1) console.log("Function matrix accept only numbers more than 0")
    let str = ""
    for (i = 0; i < Number(n); i++) {
        for (j = 0; j < n; j++) {
            str += String(n) + " "
        }
        str += "\n"
    }
    console.log(str)
}

matrix(3)
matrix(7)
matrix(0)
matrix("a")