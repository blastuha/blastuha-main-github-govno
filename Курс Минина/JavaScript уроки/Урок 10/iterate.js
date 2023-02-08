//* for in - цикл для перебирания объектов (сказал, что устаревший способ)
const goodInfo = {
  id: 1,
  price: 80,
  currency: '$',
  name: 'shoes'
}

for (const key in goodInfo) {
  console.log('key', key)
  const value = goodInfo[key]
  console.log('value', value)
}

//* Методы объектов
//* Object.keys - более современный метод итерации ключей объекта - возвращает массив
const goodInfo2 = {
  id: 1,
  price: 80,
  currency: '$',
  name: 'shoes'
}

const keys = Object.keys(goodInfo2)
console.log(keys)

//* Object.values - итерация значений объекта - возвращает массив
const goodInfo3 = {
  id: 1,
  price: 80,
  currency: '$',
  name: 'shoes'
}

const values = Object.values(goodInfo3)
console.log(values)

//* Object.entries - одъединяет в себя и ключи, и значения - выводит массив
const goodInfo4 = {
  id: 1,
  price: 80,
  currency: '$',
  name: 'shoes'
}

const entries = Object.entries(goodInfo4)
console.log(entries)
console.log(entries[0])


//* Аргумент, не являющийся объектом, будет принудительно преобразован в объект (массив)
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]