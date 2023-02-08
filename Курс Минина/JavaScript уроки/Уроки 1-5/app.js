// let answer = prompt('Сколько будет 2+2?')

// if(prompt(answer) == 4) {
//     alert('true')
// } else {
//     alert('false')
// }

// let answer2 = prompt('Корень из 9?')

// if(answer2 == 3) {
//     alert('true') 
// } else {
//     alert('false')
// }

// let answer3 = prompt('2^5 = ?')

// if(answer3 == 32) {
//     alert('true')
// } else {
//     alert('false')
// }

// =============================== УРОК 2
const q1 = ' Какая самая маленькая страна мира по населению?'
const q2 = 'Какая самая большая страна мира по населению?'
const q3 = 'Какой самый большой материк на планете?'

const answ1 = 'China'
const answ2 = 'Евразия'
const answ3 = 'Ватикан'

console.log(q1, answ3)

// ================================ УРОК 4
// преобразование типов данных
const age = 20
console.log(typeof age)
console.log(typeof String(age)) // явное преобразование

const updatedAge = '1' + 20
const bobka = 20
const updBobka = toString(bobka)
console.log(typeof updBobka)
console.log(typeof updatedAge) // неявное преобразование

//Преобразование строки к числу
const lol = '5'
console.log(typeof lol)
console.log(Number(lol), typeof Number(lol))

console.log(Number('Hello World'))

// Преобразование к boolean

console.log(Boolean('Hello'))
console.log(Boolean('-5'))
console.log(Boolean(null))

//================================== УРОК - 5

const hjk = 'Russia'
const qwe = 'I love'
const hjkQwe = `${qwe} ${hjk}`
console.log(hjkQwe)

//indexof, includes

const tt = 'Боря любит бебру' 
console.log(tt.indexOf('о'))
console.log(tt.indexOf('FSDGjk'))

console.log(tt.includes('Б'))
console.log(tt.includes('ы'))

//Обрезка строки - slice, substring (одно и тоже)
let la = 'JavaScript'
console.log(la.slice(0, 4))
console.log(la.substring(0, 4))

//Замена символов в строке
let la1 = 'JavaScript lol lol'
console.log(la1.replace('Script', 'Boba'))
console.log(la1.replaceAll('a', 'A'))
console.log(la1.replaceAll('lol', 'lel'))

//repeat (повторение)
const helloText = 'hello'
console.log(helloText.repeat(5))

//trim 
const nameOfUser = prompt('Whats ur name?')
console.log(nameOfUser)
console.log(nameOfUser.trim())

