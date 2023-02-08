const salaries = [400, 500, 600, 2000, 350]

// Добавление элементов в массив
const seniorDevSalary = 5000

salaries.push(seniorDevSalary)

//* unshift - добавляет в начало массива
salaries.unshift(100, 101)

console.log(salaries)

// Удаление элементов
//* shift - удаляет первый элемент
salaries.shift()

//* pop - удаляет с конца
const lastRemovedEl = salaries.pop()

console.log(lastRemovedEl) 

// Изменение элементов
salaries[4] = 6000
console.log(salaries)