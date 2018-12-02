const numbers = [0, 1, 4, 5, 6, 9]

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


//object.even.replace(even)