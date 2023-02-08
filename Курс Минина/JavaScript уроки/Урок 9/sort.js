//* Sort - сортирует массив в порядке убывания либо возрастания
//* Sort без параметров - сортирует по юникоду
const array = [1, 5, 3, 4, 6]

const sortFunction = arr => arr.sort((a, b) => {
  return a - b
})

console.log(sortFunction(array))

//
const names = ['Boris', 'Misha', 'Anna', 'Alice', 'Sergunya']
const sortedNames = names => names.sort()
console.log(sortedNames(names))