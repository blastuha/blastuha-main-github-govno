const string = 'Borya'

function solution(str){
  const strReversed = str.split('').reverse().join('')
  console.log([...str])
  return strReversed
}

console.log(solution(string))

// 35231 => [1,3,2,5,3]

const numbs = 35231

function fun(anyNumbs) {
  const arr2 = []
  const arr = anyNumbs.toString().split('').reverse()

  for (let i = 0; i < arr.length; i++) {
    arr2.push(Number(arr[i]))
  }

  return arr2
} 

console.log(fun(numbs))
console.log(fun(0))

//

const numToSeparate = 12345;


const arrayOfDigits = Array.from(String(numToSeparate), Number);

const arrayOfDigitsRev = [...arrayOfDigits].reverse()

console.log(arrayOfDigits); 
 //[1,2,3,4,5]
console.log(arrayOfDigitsRev)


//
const q = 123
const arr = Array.from(String(q), Number)

console.log(arr)