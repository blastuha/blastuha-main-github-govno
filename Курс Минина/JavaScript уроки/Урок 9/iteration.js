const devNames = ['Maxim', 'Igor', 'Nastya', 'Irina']

//* for

for (let i = 0; i < devNames.length; i += 1) {
    // console.log(devNames[i])
}


//* for of

for (const name of devNames) {
    // console.log(name)
}


//* for in (обход по свойствам объекта)
let obj2 = {
    name: 'Boris',
    age: 24,
    worldStatus: 'the lion, the king'
}

for (let prop in obj2) {
    console.log('obj.' + prop + ': ' + obj2[prop])
}


//* метод forEach
const devNames2 = ['Maxim', 'Igor', 'Nastya', 'Irina']

devNames2.forEach((name, index, array ) => {
    console.log(name, index, array)
})


//* метод Map (неявно возвращает новый измененный массив)
const devSal = ['100', '200', '300', '400']

const newDevSal =  devSal.map((salary, index, array) => {
    return salary * 2
})

// console.log(newDevSal)


//* метод Filter (фильтрует по условию)
const filtredDevSal = devSal.filter((salary, index, array) => {
    // return salary >= 300
    return index % 2 === 0
})
console.log(filtredDevSal)


//* метод Find (ищет по условию, только первый найденный элемент)
const devSal2 = ['100', '200', '300', '400']
const searchDevSal2 = devSal2.find((salary) => {
    return salary > 200
})
// console.log(searchDevSal2)


//* метод findIndex (возвращает индекс)
const devSal3 = [100, 200, 300, 400]
const iSearch = devSal3.findIndex((salary) => {
    return salary === 400
})
console.log(iSearch)


//* Some - хотя бы одно значение (возвращает: true/false)
const devSal4 = [100, 200, 300, 400]
const searchedIndex = devSal4.some((salary) => {
    return salary === 3000
})
console.log(searchedIndex)


//* Every - проверяет(условие) каждое значение (возвращает: true/false)
const devSal5 = [100, 200, 300, 400]
const searchedIndex2 = devSal5.every((salary) => {
    return salary > 1
})
console.log(searchedIndex2)

