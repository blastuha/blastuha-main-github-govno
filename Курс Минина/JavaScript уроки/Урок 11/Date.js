//* Даты
// new Date (year, month, hours, min, sec, ms)

const date = new Date()
console.log(date)

//* месяца начинаются с 0, где 0 - январь, 11 - декабрь
//* метод получения year

const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000)
console.log(newDate)

console.log('year', newDate.getFullYear())
console.log('month', newDate.getMonth())
console.log('date', newDate.getDate())
console.log('hours', newDate.getHours())
console.log('minutes', newDate.getMinutes())
// и так далее

//* день недели считается от 0 до 6, где 0 - вскр

console.log('day', newDate.getDay())

if (newDate.getDay() === 4) { 
  console.log('Сегодня четверг')
} else {
  console.log('Сегодня не четверг')
}

//* Изменение даты

newDate.setFullYear(2001)
newDate.setMonth(2)
newDate.setDate(27)
newDate.setHours(16)
// и так далее
console.log(newDate)







