const array = [1, 2, 3, 4, 5 ,10]

function sumArray(arry) {
    const n = arry.length
    let j = 0
    for (let i = 0; i < n; i++) {       
       j += arry[i]
    }
    console.log(j)
}

sumArray(array)

