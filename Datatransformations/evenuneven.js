const numbers = [0, 1, 4, 5, 6, 9]
/*
even = numbers.filter(num=> num%2 ==0)
odd = numbers.filter(notnum => notnum%2 !==0)

console.log(even)
console.log(odd)

let object1 =  {
    even: [] , 
    odd: []
}
object1.even.push(even)
object1.odd.push(odd)
console.log(object1.even)
console.log(object1)
*/

function evenodds(obj, num) {
if (num%2 ==0) {
    obj.odd.push(num)
    return obj
}
else { 
    obj.even.push(num)
    return obj}
}

obj1 = numbers.reduce(evenodds,{odd: [], even: []})
console.log(obj1)
