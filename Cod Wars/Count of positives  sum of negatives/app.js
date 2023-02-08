const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
const arr2 = []

function countPositivesSumNegatives(arr) {
  let count = 0
  let sum = 0

  if (arr === null || arr.length === 0) {
    return []
  }

  arr.forEach((el) => {

    if (el > 0) {
      count++
    }

    if (el < 0) {
      sum += el
    }

  })

  return [count, sum]
}

console.log(countPositivesSumNegatives(arr))
console.log(countPositivesSumNegatives(arr2))


//* Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const string = 'b!o!rya!'
const copyString = [...string]
const copyString2 = string.split('')
// console.log(copyString2)

function removeExclamationMarks(s) {
  const copyS = [...s]

  for (let i = 0; i < s.length; i++) {

    if (s[i] === '!') {
      copyS.splice(i, 1, '')
    }
  }

  return copyS.join('')
}

console.log(removeExclamationMarks(string))


