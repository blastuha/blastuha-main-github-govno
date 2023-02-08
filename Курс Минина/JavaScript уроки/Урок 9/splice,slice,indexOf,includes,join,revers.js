//* Методы массивов

//* Splice - метод, который удаляет элементы из массива и вставляет другие эл.
//* Splice - возвращает удаленные элементы, изменяет текущий массив

//* принимает 3 параметра: начальный индекс, конечный индекс удаления (не включая его самого), заменяемый элемент (ставится на место вырезанного)

const cars = ['BMW', 'Mercedes', 'Lada']
cars.splice(0, 1, 'Audi', 'Tesla')
console.log(cars)

const takedFromCars = cars.splice(0, 1)
console.log(takedFromCars)


//* Slice - вырезает элементы, не изменяя текущий массив
//* Slice - возвращает всегда новый массив
//* Принимает 2 параментра: начальный индекс, конечный индекс обрезки.

const agesOfDevs = [25, 24, 18, 56]
console.log(agesOfDevs.slice(1, 3))
console.log(agesOfDevs)


//* IndexOf - возвращает индекс элемента массива, если элемента нет - то возвращает -1

const favFood = ['IceCream', 'Eggs', 'Cola']
const indexOfCola = favFood.indexOf('Cola')
console.log(indexOfCola)


//* Includes - проверяет, существует ли такой элемент в массиве
//* выводит true/false

const tech = ['Java', 'JavaScript', 'C++']
const existTech = tech.includes('C++')
console.log(existTech)

//* Split(метод строк) + Join
//* Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
//* первый параметр - разделитель

//* Join - используется чтобы соеденить массив обратно в String
//*  Первый параметр - разделитель

const listOfOders = 'Майка, шорты, рюкзак'
const listOfOdersArray = listOfOders.split(', ')
console.log(listOfOdersArray)

const listOfOdersString = listOfOdersArray.join('; ')
console.log(listOfOdersString)

//* Reverse - разворачивает массив

const tech2 = ['Java', 'JavaScript', 'C++']
const  tecth2Reversed = tech2.reverse()
console.log(tecth2Reversed)