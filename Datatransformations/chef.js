function speak(){
    console.log("hello i am chef")
}

function cook(){
    console.log("shut up i am cooking")
}

let chef = {
    speak: speak,
    cook: cook
}

chef.speak()
chef.cook()