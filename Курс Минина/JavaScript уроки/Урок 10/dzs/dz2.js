const ordersArr = [4, 2, 1, 3]
const people = [
  { id: 1, name: 'Максим' },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
]


const giveTalonsInOrder = (patients, orders) => {
  // создаем объект с индексами в начале, без 0
  const objectWithIndexes = patients.reduce((acc, curPerson) => {
      acc[curPerson.id] = curPerson
      return acc;
  }, {})
  return orders.map((order) => objectWithIndexes[order])
}


const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);



//* Разбор reduce()

const ordersArr2 = [4, 2, 1, 3];
const people2 = [
    { id: 1, name: 'Максим' },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
];

const objectWithIndexes2 = people2.reduce((acc, curPerson) => {
    // console.log({acc, curPerson})
    acc[curPerson.id] = curPerson;
    return acc;
}, {})
console.log(objectWithIndexes2)

const objectInRightOder = ordersArr2.map((order) => objectWithIndexes2[order])
console.log(objectInRightOder)




//* повтор

const players = [
    {name: 'Miha', num: 14, stats: 98},
    {name: 'Leha', num: 27, stats: 82},
    {name: 'Ronaldo', num: 7, stats: 100},
]
const footballOrder = [14, 27, 7]
//хочу получить num - name: Miha, stats: 98

const playersNew = players.reduce((acc, curr) => {
    // acc[curr.num] = curr.name
    acc[curr.num] = {name: curr.name, stats: curr.stats, lol: curr.stats}
    //* acc[curr.num] - ключ
    //* после = {}, где name - ключ, curr.name - value и так далее. ключ может быть любой(lol)!
    return acc
},{})
console.log(playersNew)

//* map возвращает значение объекта objectWithIndexes по ключу order
const playersNewOrder = footballOrder.map((order) => playersNew[order] )
console.log(playersNewOrder)




const ordersArr3 = [4, 2, 1, 3];
const people3 = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];

function peopleInOrder(order, people) {

    const newPeople3 = people.reduce((acc, curr) => {
        acc[curr.id] = curr
        return acc
    }, {})

    return order.map((el) => {
      return newPeople3[el]
    })

}

console.log(peopleInOrder(ordersArr3, people3))



const ordersArr4 = [4, 2, 1, 3];
const object = 
  {
    '1': { id: 1, name: 'Максим' },
    '2': { id: 2, name: 'Николай' },
    '3': { id: 3, name: 'Ангелина' },
    '4': { id: 4, name: 'Виталий' }
  }


console.log(object[4])