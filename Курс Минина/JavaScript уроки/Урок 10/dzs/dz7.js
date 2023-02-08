//* suspectInfo - объект, в котором ключи - это подозреваемые в преступлении люди, а значения - массивы людей, которых видели подозреваемые в день убийства

const suspectInfo = {
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle'],
}


const deadPeople = ['Lucas', 'Bill']

function getKiller(suspect, dead) {
  for (const key in suspect) {

    if (dead.every((deadName) => suspect[key].includes(deadName))) {
      return key
    } 

  }
}

console.log(getKiller(suspectInfo, deadPeople))





// if (suspect[key].includes(dead[i])) {
//   console.log('true', suspect[key], dead[i], key)
// } else {
//   console.log('false', suspect[key], dead[i], key)
// }








// 2 вариант решения - через reduce()

// const suspectInfo2 = {
//   'James': ['Jacob', 'Bill', 'Lucas'],
//   'Johnny': ['David', 'Kyle', 'Lucas'],
//   'Peter': ['Lucy', 'Kyle'],
// }

// const deadPeople2 = ['Lucas', 'Bill']

// function getKiller2(suspect, dead) {


// }
