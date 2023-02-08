// && (И)
// || (ИЛИ)
// ! (НЕ)

const userAge = 19
if (userAge > 5 && userAge <= 18) {
    console.log('Пользователь - школатрон')
} else {
    console.log('Пользователь большой')
}

//

const progLang = 'JavaScript'
const expInYear = 2

if (expInYear > '1'  && progLang === 'JavaScript') {
    console.log('Мы ищем вас')
} else {
    console.log('Вы нам не подходите')
}

// || (ИЛИ) 

const currentHours = 11

if (currentHours >= 19 || currentHours < 10) {
    console.log('Мы закрыты')
} else {
    console.log('Мы открыты')
}

// запись операндов в константу

const userNick = 'Maxim'
const defaultNick = false
const nickname = userNick || defaultNick || 'no name'

console.log(nickname)

//

const finalNick = userNick && 'Пользователь существует'
console.log(finalNick)

// ! (НЕ)

const hasAcces = true
if (!hasAcces) {
    console.log('Доступ Закрыт')
} else {
    console.log('Доступ Открыт')
}

const answer = prompt('Сколько вам лет?')

if (!answer) {
    alert('Введите ваше полное количество лет')
    prompt('Сколько вам лет?')
} else {
    alert(`Вам ${answer} лет`)
}

// Оператор объединения с null - ??

// false, 0, '', NaN, undefined, null
console.log(false || 'Hello')
console.log(false ?? 'Hello')

// null, undefined
console.log(null ?? 'Hello')