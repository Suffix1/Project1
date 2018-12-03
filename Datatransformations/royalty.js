

employer = {
    first_name: 'Charles',
    last_name: 'Peterson',
    title: 'Baron',
    gender: 'female'
}

employer1 = {
    first_name: 'Charles',
    last_name: 'Peterson',
    title: 'Baron',
    gender: 'male'
}


const employers = [employer, employer1]




const findFormOfAddress = function(employer){
    if (employer.title === 'Baron'){
        if (employer.gender === 'male'){
            console.log(`Lord ${employer.last_name} has arrived`)}
        else {console.log(`Lady ${employer.last_name} has arrived`)}
    }
    else {console.log('not a baron')
    }

}


employers.forEach(function(element){
    console.log(findFormOfAddress(element))
})
