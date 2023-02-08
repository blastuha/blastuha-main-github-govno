const winnerApplicants = {
  '001': {
  name: 'Максим',
  age: 25,
  },
  '201': {
  name: 'Светлана',
  age: 20,
  },
  '304': {
  name: 'Екатерина',
  age: 35,
  },
}

const todaysWinner = {
  prize: '10 000$',
}

function randomNumber(arr) {
  const rand = Math.floor(Math.random() * arr.length)
  return arr[rand]
}
const numbers = []

function getWinner(players, winner) {

  for (const [key, value] of Object.entries(players)) {
    numbers.push(key)
    console.log('key', key)

    const randomN = randomNumber(numbers)
    console.log('randomN', randomN)
    console.log(key)

    if (randomN === key) {
      console.log(key)

      return {
        prize: winner.prize,
        name: players[key].name,
        age: players[key].age,
      }
    }
    
  }

}

console.log(getWinner(winnerApplicants, todaysWinner))