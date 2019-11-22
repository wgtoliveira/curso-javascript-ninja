let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const isEven = x => x % 2 == 0

const myMap = numbers.map(isEven)

console.log('every: ' + numbers.every(isEven))
console.log('sme' + numbers.some(isEven))
console.table('myMap: ' + myMap)
console.table(numbers.forEach(x => console.log(x % 2 === 0)))
const evenNumbers = console.log(numbers.filter(isEven))
const myReduce = numbers.reduce((previous, current) => previous + current)
console.log(myReduce)
