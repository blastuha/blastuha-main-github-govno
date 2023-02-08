//* Concat -  Метод объединения массивов 


const currDevs = ['Max', 'Oleg']
const newDevs = ['Toha', 'Glebasta']

const allDevs = currDevs.concat(newDevs)
console.log(allDevs)

//* ... - spread operator - 2 второй способ объединения

const allDevs2 = [
  ...currDevs,
  ...newDevs,
]

console.log(allDevs2)