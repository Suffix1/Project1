const numbers = [0, 1, 4, 5, 6, 9]

even = numbers.filter(num=> num%2 ==0)
uneven = numbers.filter(notnum => notnum%2 !==0)


console.log(even)
console.log(uneven)