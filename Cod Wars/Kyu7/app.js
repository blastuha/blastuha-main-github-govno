// // a = "xyaabbbccccdefww"
// // b = "xxxxyyyyabklmopq"
// // longest(a, b) -> "abcdefklmopqwxy"

// // a = "abcdefghijklmnopqrstuvwxyz"
// // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// const a = "xyaabbbccccdefww"
// const b = "xxxxyyyyabklmopq"

// function longest(s1, s2) {
//   const s3 = s1 + s2
//   const s3Sorted = [...s3].sort()
//   // const s3End = [...new Set (s3Sorted)].join('') // вариант через new Set

//   // const s3End = s3Sorted.filter((letter, index) => { // через filter
//   //   return s3Sorted.indexOf(letter) === index
//   // }) //

//   const uniqLetters = []
//   s3Sorted.forEach((el) => {
//     if (!uniqLetters.includes(el)) {
//       uniqLetters.push(el)
//     }
//   })

//   if (s1 === s2) {
//     return s1
//   }

//   // return s3End // new Set
//   // return s3End.join('') // filter
//   return uniqLetters.join('')
// }

// console.log(longest(a, b))
// console.log(longest('fgddfgdffgdf', 'gdgfdyhtdyy'))

// //*------------------------
// //https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// function sumTwoSmallestNumbers(numbers) {

//   const numbersSorted = numbers.sort((a, b) => a - b)

//   return numbersSorted[0] + numbersSorted[1]

// }

// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))

// //*------------
// //https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// function getCount(str) {
//   let count = 0

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//       count ++
//     }
//   }

//   return count
// }

// console.log(getCount('treea'))

// //*-----------
// // https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

// // убрать мутацию исходного массива
// //

// function removeSmallest(numbers) {
//   if (numbers.length === 0) {
//     return numbers
//   }
//   const smallest = numbers.reduce((acc, curr) => {
//     return Math.min(acc, curr)
//   })
//   const indexOfSmallest = numbers.indexOf(smallest)
//   return [...numbers.filter((el, index) => index !== indexOfSmallest)]
// }

// console.log(removeSmallest([5,3,2,1,4]))

// console.log(removeSmallest([]))

// //*---------------
// // https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
// // У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто "лягут" на третью и треугольника не получится.

// function isTriangle(a,b,c) {
//   if (a + b > c && b + c > a && a + c > b) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(isTriangle(1, 2, 2))
// console.log(isTriangle(7, 2, 2))
// console.log(isTriangle(0, 8, 4))
// console.log(isTriangle(8, 9, 1))

// //*-------------------------------
// //https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
// // пробежаться по массиву, узнать длинну массива,
// // если длинна массива четная, то возвращаем 2 центральных символа
// // если длинна массива нечетная, то возвращаем 1 центральный символ
// // если 1 символ то его и возвращаем

// const string1 = 'borya'
// console.log(string1[6/2])

// function getMiddle(s) {
//   const result = []

//   if (s.length === 1 || s.length <= 0) {
//     return s
//   }

//   if (s.length % 2 === 0) {
//     result.push(s[(s.length/2) - 1], s[s.length/2],)
//     return result.join('')
//   }

//   if (s.length % 2 !== 0) {
//     result.push(s[Math.floor(s.length/2)])
//     return result.join('')
//   }

// }

// // console.log(getMiddle('borya'))
// // console.log(getMiddle('A'))
// // console.log(getMiddle(''))
// // console.log(getMiddle('gena'))
// // console.log(getMiddle('middle'))
// // console.log(getMiddle('morgenshtern'))
// // console.log(getMiddle('test'))
// console.log(getMiddle('testing'))
// console.log(getMiddle('testinggg'))
// console.log(getMiddle('testingggrr'))
// console.log(getMiddle('qwertyuiopasd'))
// console.log(getMiddle('qwertyuiopasdfg'))
// console.log(getMiddle('qwertyuiopasdfghj'))

//*---------------------------
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {
  const str = String(num);
  const strSplitet = str.split("");
  const result = [];

  for (let i = 0; i < strSplitet.length; i++) {
    result.push(strSplitet[i] * strSplitet[i]);
  }

  const resultString = result.map((str) => Number(str)).join("");
  return +resultString;
}

console.log(squareDigits(9119));

// const a = ['1', '2']

// const aN = a.map((el) => Number(el))
// console.log(aN)
// console.log(typeof(aN))

//*---------------------------------------------------------
// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
  const arr = [];
  const anyArr = numbers.split(" ").sort((a, b) => a - b);
  arr.push(anyArr[anyArr.length - 1], anyArr[0]);
  return arr.join(" ");
}

console.log(highAndLow("2 1 3 5 4"));

function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  console.log(numbers);

  var min = Math.min.apply(null, numbers);
  var max = Math.max.apply(null, numbers);

  return max + " " + min;
}

console.log(highAndLow("2 1 3 5 4"));

//* через метод map можно быстро приводить значения внутри массива к строке или числам
const str = "1 2 3";
const strNew = str.split(" ").map(String);
console.log(strNew);

//*-------------------------------------------------------
//! Очень важная задачка
// https://www.codewars.com/kata/545af3d185166a3dec001190/

//each_cons([1,2,3,4], 2)
// #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

function eachCons(array, n) {
  const result = [];
  // const first = []

  for (let i = 0; i <= array.length - n; i++) {
    const first = []; // каждую итерацию создает новую переменную first
    for (let j = i; j < i + n; j++) {
      console.log("j", j, "i", i);
      first.push(array[j]);
      console.log("first", first);
    }
    result.push(first);
  }
  return result;
}

console.log(eachCons([1, 2, 3, 4], 2));

//each_cons([1,2,3,4], 2)
// #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

function eachCons2(arr, n) {
  return arr
    .map((el, i) => arr.slice(i, i + n))
    .filter((el) => el.length === n);
}

console.log(eachCons2([1, 2, 3, 4], 2));

console.log(eachCons2([1, 2, 3, 4], 3));

const m = [1, 2, 3, 4];
const newM = m.slice(0, 2);
console.log(newM);

//*--------------------------------
//! тоже важная задача на indexOf
//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  return str.indexOf(ending, str.length - ending.length) != -1;
}

console.log(solution("abc", "bc"));
console.log(solution("abc", "d"));
console.log(solution("abcde", "cde"));
console.log(solution("abcde", "cwe"));

// пример логики выдачи true/false
function solution2() {
  const result = 4 + 2;
  return result === 6;
}

console.log(solution2());

// solution 2
function solution(str, ending) {
  return str.substr(ending.length);
}
console.log(solution("abc", "bc"));
console.log(solution("abc", "d"));

// solution 3
function solution(str, ending) {
  return str.endsWith(ending);
}
console.log(solution("abc", "bc"));
console.log(solution("abc", "d"));

//

// function solution(str, ending) {
//   const isThere = str.indexOf(ending, str.length - ending.length);
//   if (str.length === ending.length) {
//     const x = str.indexOf(ending);
//     console.log(x);
//     return x >= 0 ? true : false;
//   }
//   return isThere > 0 ? true : false;
// }

// console.log(solution("abc", "bc")); // returns true
// console.log(solution("abc", "d")); // returns false
// console.log(solution("samurai", "ra"));
// console.log(solution("abc", "abc"));

//* Jaden Casing Strings
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript

const string1 = "How can mirrors be real if our eyes aren't real";
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

const jadenStr = (str) => {
  const words = str.split(" ");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(jadenStr(string1));

// String.prototype.toJadenCase = function () {
//   return this.split(" ").map(function(word){
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }).join(" ")
// не разобрал эту шляпу

//* Sum of odd numbers
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
