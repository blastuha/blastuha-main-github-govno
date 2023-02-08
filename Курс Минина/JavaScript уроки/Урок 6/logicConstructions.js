// if
// if else
// switch case
// ? :

const isFrontEndDev = true;

if (isFrontEndDev) {
    console.log('Вы фронтик')
} else {
    console.log('Вы не фронтик')
}

// else if

const closingTime = 20
const currentTime = 21

if (currentTime > closingTime) {
    console.log('shop is closed')
} else console.log('shop is opened')

// 

const devJobType = 'Back-End'

if (devJobType === 'Front-End') {
    console.log('2000$')
} else if (devJobType === 'Back-End') {
    console.log('1500$')
} else {
    console.log('Зарплата не определена')
}

// switch case

switch (devJobType) {
    case 'Front-End':
        console.log('2000$')
        break
    case 'Back-End':
        console.log('1500$')
        break
    default: 
        console.log('Зарплата не определена')
}

// тернарный оператор ? ; (замена if else)

const favDrink = 'Coffe'
let message = ''

if (favDrink === 'Coffe') {
    message = 'Your fav drink is Coffe'
} else {
    message = 'We dont know your fav drink'
}

console.log(message)

// через тернарник

message = 
    favDrink === 'Coffe' ? 
    'Your fav drink is Coffe' :
    'We dont know your fav drink'

console.log(message)

