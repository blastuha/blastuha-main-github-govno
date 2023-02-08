// Дебаг с помощью console.log

let sum = 0
const numberOfEl = 10


console.log(sum)
debugger
for (let i = 1; i < numberOfEl; i++) {
    debugger
    sum = sum + i
    // console.log(i, sum)
}
// console.log(sum)

const halfOfSum = sum / 2
debugger
console.log(halfOfSum)
debugger

//консоль лог нужно вставлять в правильные места, чтобы ловить ошибку