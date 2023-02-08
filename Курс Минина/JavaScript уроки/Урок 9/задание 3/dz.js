//*-------Задача N3---------
//через findIndex()
const coffees = ['Latte', 'Cappuccino', 'Americano']

const coffeFinder = function(arr) {
  const coffeeName = prompt('Поиск кофе по названию:')

  const indexcoffeeName = arr.findIndex((coffee, index) => {
    return coffee.toLowerCase() === coffeeName.toLowerCase().trim()
  })

  console.log(indexcoffeeName)
  console.log(coffeeName)
  
  if (indexcoffeeName >= 0) {
    alert(`Держите ваш любимый кофе ${coffeeName.toLowerCase().trim()}. Он ${indexcoffeeName + 1}-й по популярности в нашей кофейне`)
  } else {
    alert(`К сожалению, такого вида кофе нет в наличии`)
    // coffeFinder(arr)
  }
}
coffeFinder(coffees)




//
//
////*-------Задача N4---------
//const coffees2 = ['Latte', 'Cappuccino', 'Americano'];
//const prices = [1.5,1, 2];
//
//const updPrices = prices.map((el, index) => {
//  return el + 0.5
//})
//console.log(updPrices)
//
//const clientAlert = function(coffeeArr, pricesArr) {
//  coffeeArr.forEach((el, index) => {
//    index = pricesArr[index]
//    console.log(`Кофе ${el} сейчас стоит ${index} евро`)
//  })
//}
//
//clientAlert(coffees2, updPrices)
//
//
//
//
////*-------Задача N5---------
//const clientsEstimations = []
//
//
//const askClientToGiveEstimation = function(arr) {
//  const goodEstimations = []
//  const notGoodEstimations = []
//  const ask = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'))
//
//  console.log(ask)
//
//  if (typeof ask === 'number' && ask > 0 && ask <= 10) {
//    arr.push(ask)
//  } 
//
//  for (let i = 0; i <= ask; i++) {
//    if (arr[i] >= 5) {
//      goodEstimations.push(arr[i])
//    } else {
//      notGoodEstimations.push(arr[i])
//    }
//  }
//  
//  console.log(`Всего положительных оценок: ${goodEstimations.length}`)
//  console.log(`Всего отризательных оценок: ${notGoodEstimations.length}`)
//  
//  return console.log(arr), console.log('goodEstimations', goodEstimations), console.log('notGoodEstimations', notGoodEstimations)
//  
//}
//askClientToGiveEstimation(clientsEstimations)
//askClientToGiveEstimation(clientsEstimations)
//askClientToGiveEstimation(clientsEstimations)
//askClientToGiveEstimation(clientsEstimations)
//askClientToGiveEstimation(clientsEstimations)
//
//
//
