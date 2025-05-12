function progressBar(percents) {
    if (!Number(percents) && percents!==0) return null
    if (percents < 0 || percents > 100) return null

    /*
    let bar = "["

    if (Number(percents) % 10 == 0 || percents != 0) {
        for (i = 0; i < percents/10; i++) bar += "%"
    }

    if (10 - Number(percents)/10 !=0) {
        for (i = 0; i < 10 - percents/10; i++) bar += "."
    }

    bar += "]"
    */

    if (percents % 10 == 0) {
        let done = percents / 10
        let waiting = 10 - done

        let bar = "["
        for (i = 0; i < done; i++) bar += "%"
        for (i = 0; i < waiting; i++) bar += "."
        bar += "]"

        if (done==10) return "100% Complete!\n" + bar
        else return bar + "\nStill loading..."
    }

    return null
}

console.log(progressBar(0) + "\n")
console.log(progressBar(14) + "\n")
console.log(progressBar(30) + "\n")
console.log(progressBar(50) + "\n")
console.log(progressBar(100) + "\n")
console.log(progressBar(1000) + "\n")
console.log(progressBar("a") + "\n")