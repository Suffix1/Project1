const askForAge = function(age, callback){
    if (age >= 40) {
        console.log("Welcome to the restaurant")
        callback(age, callback)       
    }
    else {console.log(`please, try again in ${40-age} year `)}
}

const getSeated = function(age){
    if (age <= 47){
        console.log("please, sit on the first row")
    }
    else {console.log("please sit in the back")}
}

const offerDrink = function(age){
    console.log("Have a drink on the house")
}

const danceLikeMoney = function(age){
    if (age == 42){
        console.log("You are the answer of the universe")
    }
    else {console.log("quit horsing around")}
}
askForAge(41, danceLikeMoney, getSeated)


/*Now you want to:

Ask your customers for their age,
Check whether they are allowed in the restaurant
If they are allowed to enter the restaurant, tell them where they should be seated
Finally, if a person, is extra cool, we want to offer them a drink and get them seated at a window.

*/