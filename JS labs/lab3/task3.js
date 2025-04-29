function rotate(arr, rotations) {
    let res = []
    for (let i in arr) res[i] = arr[i]


    for (let rotation = 0; rotation < rotations; rotation++){
        let tmp = res[0]
        for (let i = 0; i < res.length-1; i++) res[i] = res[i+1]
        res[res.length-1] = tmp
    }
    console.log(String(res))
}

rotate([51, 47, 32, 61, 21], 2)
rotate([32, 21, 61, 1], 4)
rotate([2, 4, 15, 31], 5 )