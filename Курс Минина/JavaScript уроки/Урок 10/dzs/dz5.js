const groceries = {
  "Orange Juice": {
  price : 1.5,
  discount: 10,
  },
  "Chocolate": {
  price : 2,
  discount : 0,
  },
  // more items...
}

const shoppingBag = [
  { product: 'Chocolate', quantity: 3 },
  { product: 'Orange Juice', quantity: 23 },
]

function getTotalPriceOfShoppingBag(shoppingBag) {

  const shoppingBagNew = shoppingBag.reduce((acc, curr) => {
    acc[curr.product] = {quantity: curr.quantity}
    return acc
  }, {}) 

  let sum = 0

  for (const key in groceries) {
    for (const key2 in shoppingBagNew) {

      if (key === key2) {
        let discount = ((groceries[key].price * shoppingBagNew[key2].quantity) * groceries[key].discount) / 100
        let priceOfItem = (groceries[key].price * shoppingBagNew[key2].quantity) - discount

        if (groceries[key].discount === 0) {
          priceOfItem = (groceries[key].price * shoppingBagNew[key2].quantity)
        }

        sum += priceOfItem
      } 

    }
  }
  return sum
  
} //end function

console.log(getTotalPriceOfShoppingBag(shoppingBag))








//*----------------С деструкторизацией--------------
const groceries2 = {
  "Orange Juice": {
  price : 1.5,
  discount: 10,
  },
  "Chocolate": {
  price : 2,
  discount : 0,
  },
  // more items...
}


const shoppingBag2 = [
  { product: 'Chocolate', quantity: 3 },
  { product: 'Orange Juice', quantity: 23 },
]
let sum = 0

function getTotalPriceOfShoppingBag(shoppingBag) {

  const shoppingBagNew = shoppingBag2.reduce((acc, curr) => {
    acc[curr.product] = {quantity: curr.quantity}
    return acc
  }, {}) 

  for (const key in groceries2) {
    
    const {price,discount} = groceries2[key]

    for (const key2 in shoppingBagNew) {

      if (key === key2) {
        const priceWithDiscount = price - (price * discount / 100)
        let totalPrice = priceWithDiscount * shoppingBagNew[key2].quantity
        console.log(totalPrice)
        sum += totalPrice

      } 

    }

  }
  return sum
} //end function

console.log(getTotalPriceOfShoppingBag(shoppingBag2))

