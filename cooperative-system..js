let memberArry = []

// Function to add members
function newMember(name, phone, amount = 0.00) {
    name = name.toUpperCase()
    amount = amount
    let id = memberArry.length + 1
    
    phone = `+234 ${phone}`

    const member = {
        id: id,
        name: name,
        phone: phone,
        amount: amount,
    }

    memberArry.push(member)
}

newMember("Johnson", 8032243324, 200000)
newMember("Mary", 8054743324, 6000)
newMember("Jason", 8032683924, 10000)
newMember("Wilson", 9032113524, 24000)
newMember("John", 7032242954, 800000)
newMember("James", 8032553624, 200000)

//console.log(memberArry)


// Function to update member information
function updateInfo(id, name, phone) {
    for (i in memberArry) {
        if (id === memberArry[i].id) {
            let newPhone = `+234 ${phone}`
            memberArry[i].phone = newPhone
        }
        if ( id === memberArry[i].id) {
            memberArry[i].name = name
        }
        //console.log(memberArry[i])
    }
    
}

//updateInfo(2, "Matthew", 9342955402)

//console.log(memberArry)

// Balance update(Deposit)
// Balance update(Withdraw)
function balanceUpdate(id, amount, action) {

    action = action.toUpperCase()

    if (action === "WITHDRAW") {
        for (i in memberArry) {
            if (id === memberArry[i].id && memberArry[i].amount >= amount) {
                let newBalance = memberArry[i].amount -= amount
                memberArry[i].amount = newBalance
                //return console.log(`${memberArry[i].name} your balance is ${memberArry[i].amount}`)
            } else {
                //return console.log(`${memberArry[i].name} you have insufficient funds`)
            }    
        }
    } else if (action === "DEPOSIT") {
        for (i in memberArry) {
            if (id === memberArry[i].id) {
                let newBalance = amount += memberArry[i].amount
                memberArry[i].amount = newBalance
            }
            //return console.log(memberArry[i])
        }
    }
}


//console.log(memberArry)

// balanceUpdate(2, 11000, "withdraw")
// console.log("========")
// balanceUpdate(2, 200, "withdraw")

balanceUpdate(2, 6000, "deposit")

// Function to retrieve members info 
function memberInfo(name) {
    name = name.toUpperCase()    

    for (i in memberArry){
        if (name === memberArry[i].name) {
            console.log(memberArry[i])
        }
        // if (name !== memberArry[i].name) {
        //     console.log(`${name} is not a member`)
        // }
    }
}

memberInfo("mary")

// Function to remove members 
function removeMember(id) {
    for (i in memberArry){
        if (id === memberArry[i].id) {
            memberArry.splice(id - 1, 1)
        }
    }
}

//removeMember(3)

//console.log(memberArry)