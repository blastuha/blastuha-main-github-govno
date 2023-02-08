// 1 вариант

// function getName1(name) {
//     return `Имя равно ${name}`
// }

// const name = 'Borya'
// console.log(getName1(name))

// 2 вариант

// const getName2 = function(name) {
//     return `Имя равно ${name}`
// }

// const name2 = 'Den'
// console.log(getName2(name2))

// 3 вариант

// const getName3 = name => `Имя равно ${name3}`

// const name3 = 'Ira'
// console.log(getName3(name3))

//--------------------------------------------------
//----Задание номер 2

// const getSumOfNumbers = (number, type) => {
//     let sum = 0
//     if (type === 'odd') {
//         for (let i = 1; i <= number; i += 2) {
//             sum += i
//             console.log(sum, i)
//         }
//     } else if (type === 'even') {
//         for (let i = 0; i <= number; i += 2) {
//             sum += i
//             console.log(sum, i)
//         }
//     } else {
//         for (let i = 0; i <= number; i += 1) {
//             sum += i
//             console.log(sum, i)
//         }
//     }
// }

// getSumOfNumbers(10, 'even')

// второй вариант решения задачи выше

// const getSumOfNumbers2 = (number, type) => {
//     let sum = 0
//     if (type === 'even') {
//         for (let i = 0; i <= number; i++) {
//             if (i % 2 === 0) {
//                 sum += i 
//             }   
//         }
//     } else if (type === 'odd') {
//         for (let i = 0; i <= number; i++) {
//             if (i % 2 !== 0) {
//                 sum += i
//             }
//         }
//     } else {
//         for (let i = 0; i <= number; i++) {
//             sum += i
//         }
//     }
//     return console.log(sum)
// }

// getSumOfNumbers2(10, 'odd')

//--------------------------------------------------
//----Задание номер 3
// проверяем является ли число < 0 и целым
// если число целое, то узнаем сколько раз он может поделиться
// записываем количество делителей в переменную

// const cifra = 2
// console.log(Number.isInteger(cifra))



// function getDivisorsCount(number = 1) {
//     let divisors = 0

//     if (number < 0 || Number.isInteger(number) === false) {
//         console.log('number должен быть целым и больше нуля')
//     } else {
//         for (let i = 1; i <= number; i = i + 1) {
//             if (number % i == 0) {
//                 console.log(i)
//                 divisors = divisors + 1
//             }
//         }
//     }
//     return divisors
// }

// console.log(getDivisorsCount(10))


//--------------------------------------------------
//----Задание номер 4
// функция, которая принимает 2 параметра: вопрос, правильный ответ
// вопрос, заданный пользователю и передан, как параметр в функцию prompt


// function checkQuestionAnswer(question, correctAnswer) {
//     question = prompt(question)
    
//     if (question.trim().toLowerCase() === correctAnswer.toLowerCase()) {
//         alert('true')
//     } else {
//         alert('false')
//     }
// }


// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода')
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?',
// '32')
// checkQuestionAnswer('Как называется самая маленькая птица в мире?',
// 'Колибри')


//--------------------------------------------------
//----Задание номер 5

function showSuccessMessage(message) {
  message = console.log(message)
}

function showErrorMessage(message) {
  console.error(message)
}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
  for (let i = 0; i <= text.length; i = i + 1) {
    
    if (text[i] === errorSymbol) {
      errorCallback(`Найден запрещенный символ '${errorSymbol}' под индексом ${i}}`)
    } else if (!text.includes(errorSymbol)) {
      successCallback('В данном тексте нет запрещенных символов')
    }
  }
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';

// console.log(text.indexOf('а'))

checkTextOnErrorSymbol(text, 'а', showSuccessMessage,
showErrorMessage);


