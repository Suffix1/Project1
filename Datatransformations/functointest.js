const offerDrink = function() {
    console.log(`Here you have a free drink. Please find a seat at the window.`)
  }
  
  const getSeated = function(age) {
    if(age <= 47){
      console.log('Please find a seat in the front')
    } else {
      console.log('Please find a seat in the back')
    }
  }
  
  const askForAge = function(age, bullshit) {
    if(age >= 40) {
      console.log('Welcome to our Restaurant.')
      bullshit(age)
    } else {
      console.log(`We are closed, please try again in ${40 - age} years.`)
    }
  }

  askForAge(41,getSeated)
  