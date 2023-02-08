//* getTime

const date1 = new Date(2022, 0, 1)
const date2 = new Date(2021, 0 , 1)
console.log(date1)
console.log(date2)

//* количество мс с Jan1, 1970

console.log('date1', date1.getTime())
console.log('date2', date2.getTime())

//* узнаем разницу в мс, переводим в секунды, минуты, часы, дни
const difference = (date1.getTime() - date2.getTime()) / 1000 / 60 / 60 / 24
console.log(difference)

//* с помощью объекта Data мы можем считать скорость выполнения функций, алгоритма

const startTime = Date.now()

for (let i = 0; i < 1000000000; i++) {
  // do something
}

const endTime = Date.now()

console.log({startTime, endTime})
const difference2 = (endTime - startTime) 
console.log(difference2)


// new Date().getTime() === Date.now()
const check = new Date().getTime()
const check2 = Date.now()

console.log({check, check2})




//* Используя встроенные методы
var start = new Date()

// Событие, для которого замеряется время, происходит ниже:
// doSomethingForALongTime()
var end = new Date()
var elapsed = end.getTime() - start.getTime() // затраченное время в миллисекундах




//* Проверяет функцию и возвращает её возвращаемое значение
function printElapsedTime(fTest) {
  var nStartTime = Date.now(),
      vReturn = fTest(),
      nEndTime = Date.now();

  console.log('Затраченное время: ' + String(nEndTime - nStartTime) + ' миллисекунд');
  return vReturn;
}

console.log(printElapsedTime(yourFunction)) //сюда вставить функцию