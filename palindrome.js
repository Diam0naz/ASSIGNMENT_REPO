function palindromeCheck(word) {
    word = word.toUpperCase()
    wordArry = []
    revArry = []
    let n = word.split("")
    for (let i of n) wordArry.push(i) 
    // checking that the words have been pushed into the array
    // for (let i in wordArry) {
    //     console.log(wordArry[i])
    // }
    for (let i of n) revArry.unshift(i)
    // checking that the words have been pushed into the array in reverse
    // for (let i in revArry) {
    //     console.log(revArry[i])
    //     }

    let isPalindrome = true
    for (j in n) {
        if (wordArry[j] !== revArry[j] ) { 
            isPalindrome = false
            console.log(`${word} is not a Palindrome`)
            break
        }     
    }

  console.log(`${word} is ${isPalindrome ? "" : "NOT "}a Palindrome`);
}

palindromeCheck("occo")

