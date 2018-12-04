function oldestSoFar(oldest, maybeOldest) {
    let oldestAge = Math.max(oldest.age, maybeOldest.age);
    function name(person) {
        return person.age === oldestAge
    }
    return people.find(name)
}



function oldestSoFar3(oldest, maybeOldest, i, array) {
    let oldestAge = Math.max(oldest.age, maybeOldest.age)
    if(oldestAge > maybeOldest.age ) {
        return oldest}
    else {return array[i]}
}

const people = [
    {name: 'Don', age: 23},
    {name: 'Adam', age: 33},
    {name: 'Steve', age: 14},
    {name: 'Rachel', age: 56},
    {name: 'Maud', age: 46},
    {name: 'Hermien', age: 28}
]

console.log(people.reduce(oldestSoFar))
console.log(people.reduce(oldestSoFar3))