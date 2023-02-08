//* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

const string = "I love arrays they are my favorite"


function stringToArray(str) {
  const newStr = str.split(' ')
  return newStr
}

console.log(stringToArray(string))

//* Sam Harris=>S.H
//* patrick feeney=>P.F

// const name = 'boris shevnin'

// function abbrevName(name){
//   const arrName = name.split(' ')
//   const firstLetter = arrName[0].split('').splice(0, 1).join('').toUpperCase()
//   const secLetter = arrName[1].split('').splice(0, 1).join('').toUpperCase()
//   return (`${firstLetter}.${secLetter}`)
// }

// console.log(abbrevName(name))

//* более короткий вариант
const name = 'boris shevnin'

function abbrevName(name){
  const arrName = name.split(' ')
  console.log(arrName)
  const firstLetter = arrName[0][0].toUpperCase()
  const secLetter = arrName[1][0].toUpperCase()
  console.log(secLetter)
  return (`${firstLetter}.${secLetter}`)
}

console.log(abbrevName(name))


//* - https://www.codewars.com/kata/545af3d185166a3dec001190

// const duplicate = x => [x, x + 1]

// const newArr = [2, 3, 4].map(duplicate)
// console.log(newArr)


// function eachCons(array, n) {
//   const fun = n => [n, n + 1, n + 2]
// 	const newArr = array.map(fun)
//   return newArr
// }

// console.log(eachCons([2, 3, 4, 5], 3))


function eachCons(array, n) {
  const result = []

  for (let i = 0; i <= array.length - n; i++) {
    const first = []
    for (let j = i; j < i + n; j++) {
      // console.log(j)
      first.push(array[j])
      console.log(first)
    }
    result.push(first)
  }
  return result
}

console.log(eachCons([1,2,3,4], 2))
console.log(eachCons([1,2,3,4], 3))