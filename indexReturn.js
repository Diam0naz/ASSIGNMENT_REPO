const array = [2, 4, 6, 7, 9, 10, 4]

function indexCheck(num, array) {
    for (let i in array) {
        if (num === array[i]){
            console.log(i)
        }   
    }
}

indexCheck(4, array)

// if (check == true){
//     break
// } else{
//     console.log(`${} is not in the Array!`)
// }