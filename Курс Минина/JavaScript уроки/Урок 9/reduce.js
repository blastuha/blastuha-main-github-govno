//* Reduce - (аккумулятор - накопитель с начальным параметром = 0 (только в этом случае))
//* аккумулятор может быть 0, может быть объектом - {}, массивом - [], может быть - [0, a[0]] (смотреть ниже)
//* Когда мы что-то собираем в аккумулятор

const devSal6 = [100, 200, 300, 400]

const sumDevSal6 = devSal6.reduce((acc, salary, index, array) => {
  return acc + salary
}, 0)
console.log(sumDevSal6)

//

const pokemon = [
  { name: "charmander", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "bulbasaur", type: "grass" }
]

const getMapFromArray = data => data.reduce((acc, item) => {
  // добавляем ключ объекта к нашему объекту, т.е. charmander: { type: 'water' }
  acc[item.name] = { type: item.type };
  return acc;
}, {});

console.log(getMapFromArray(pokemon))

const bobs = [
  { name: 'bobs1', type: 'Мятный'},
  { name: 'bobs2', type: 'Дыня'}
]





const getMapFromBobs = bobs.reduce((acc, item) => {
  acc[item.name] = {type: item.type}
  return acc
}, {})

console.log(getMapFromBobs)

//

const a = [3, 1, 2, 5, 2, 4]
let max = a[0]

for (let i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i]
  }
}
console.log(max)

// через Reduce

const b = [2, 7, 9, 11, 3]

const maxb = b.reduce((acc, item, index) => {
  if(acc < item) {
    return item
  } else {
    return acc
  }
})
console.log(maxb)

/// вернуть максимальное число, точнее его индекс
const bb = [2, 7, 9, 11, 3]

const maxbb = bb.reduce((prev, curr, index) => {
  if (curr > prev[1]) {
    return [index, curr]
  } else {
    return prev
  }
}, [0, bb[0]])
console.log(maxbb)










//
//Дан массив с числами. Найдите сумму первых N элементов до первого нуля. 
//Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

const m = [1, 2, 10, 0, 20, 0, 20]
let stopIndex

const mChecker = data => data.reduce((acc, curr, index) => {
  if (curr === 0) {
    stopIndex = index
    return acc
  }
  // Будет false, пока не найдем stopIndex
  if (stopIndex !== undefined && index > stopIndex) {
    return acc
  }

  return acc += curr
})
console.log(mChecker(m))



// test

const u = [1, 5, 2, 6]

const uMax = data => data.reduce((acc, curr) => {
  if (acc > curr) {
    return acc
  } else {
    return curr
  }
})

console.log(uMax(u))

// test bobs3
const bobsiki = [
  {name: 'Мята', countInPack: 8},
  {name: 'Мёд', countInPack: 5},
  {name: 'Вишня', countInPack: 1},
]

const bobsikiNew = bobsiki.reduce((acc, obj, index) => {
  acc[obj.name] = {countInPack: obj.countInPack}
  return acc
}, {})

console.log(bobsikiNew)


// Сделать 'Wizard': [int: 5, strg: 2, ag: 3]

const personsOfGame = [
  {type: 'Wizard', stats: {int: 5, strg: 2, ag: 3}},
  {type: 'Barbarian', stats: {int: 1, strg: 5, ag: 2}},
]

const updPersons = function(person) {
  return person.reduce((acc, item) => {
    acc[item.type] = {stats: item.stats}
    return acc
  }, {})
}
console.log(updPersons(personsOfGame))

//
const personsOfGame2 = [
  {type: 'Wizard', stats: {int: 5, strg: 2, ag: 3}},
  {type: 'Barbarian', stats: {int: 1, strg: 5, ag: 2}},
]

const updPersons2 = data => data.reduce((acc, item) => {
  acc[item.type] = [item.stats]
  return acc
}, {})

console.log(updPersons2(personsOfGame2))



// найти макс и индекс
const mz = [6, 5, 4, 1, 3, 7]

const maxMz = mz.reduce((prev, curr, index) => {
  if (curr > prev[1]) {
    return [index, curr]
  } else {
    return prev
  }
}, [0, mz[0]])
console.log(maxMz)


// одномерный массив из двухмерного
const mq = [[1, 2], 3, 4, [5, [6, 7]]]
const newMq = mq.flat(2)
console.log(newMq)

const mq2 = [[1, 2], [3, 4], [5, 6]]

const mq2flat = mq2.reduce((prev, curr, index) => {
  return prev.concat(curr)
}, [])
console.log(mq2flat)




// посчитать среднее
const numbers = [2, 3, 11, 15, 4]

const numbersAverage = numbers.reduce((prev, curr) => {
  console.log('prev', prev, 'curr', curr)
  return prev + curr / numbers.length
}, 0)

console.log(numbersAverage)


console.log( (2 + 3 + 11 + 15 + 4) / 5 )
console.log( 2 + 3 + 11 + 15 + 4 / 5)

//2.04 + 3.64 + 2.4 + 0.68 + 0.4


// count jedi

const users = [
  {
    username: 'bob',
    jedi: false
  },
  {
    username: 'top',
    jedi: true
  },
  {
    username: 'gog',
    jedi: true
  }
]
console.log(users)

const counterJedi = users.reduce((count, user) => {
  if (user.jedi) {
    console.log(count, user)
    count++
  }
  return count
}, 0)
console.log(counterJedi)

const countJedi = (users) => {
  return users.reduce((count, user) => {
    if (user.jedi) {
      console.log(count, user)
      count++
    }
    return count
  }, 0)
}
console.log(countJedi(users))


// получаем массив из тех, кто является джедаем
const users2 = [
  {
    username: 'bob',
    jedi: false
  },
  {
    username: 'top',
    jedi: true
  },
  {
    username: 'gog',
    jedi: true
  }
]

const jedies2 = users2.reduce((prev, curr) => {
  if (curr.jedi) {
    prev.push(curr.username)
  }
  return prev
}, [])
console.log(jedies2)


// склеить в один общий документ и только взять самую последнюю дату
const documents = [
  {
    content: 'Ты был мне как брат',
    author: "Obi-Wan",
    date: '2017-01-15'
  },
  {
    content: 'Боря любит бебру',
    author: "Booster",
    date: '2022-05-16'
  },
  {
    content: 'Августинтик',
    author: "Алисик",
    date: '2021-03-17'
  }
]

const generalDocument = documents.reduce((genDocument, currObj) => {
  genDocument.content += currObj.content + '; '
  genDocument.authors.push(currObj.author)

  if (!genDocument.date ||
    new Date(genDocument.date).valueOf() <= new Date (currObj.date).valueOf()) {
    genDocument.date = currObj.date

  }
  return genDocument
},
{ 
  content: '',
  authors: [],
  date: null
})
console.log(generalDocument)


const date = new Date(2021, 03, 15).valueOf()
const date2 = new Date(2021, 02, 14).valueOf()
const d = new Date().valueOf()

console.log(date)
console.log(date2)
console.log(d)

