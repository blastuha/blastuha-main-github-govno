const peopleWithVisa = [
  {
  firstName: 'Stasia',
  lastName: 'Ward',
  criminalRecord: false,
  passportExpiration: '02.06.2023',
  },
  {
  firstName: 'Elliot',
  lastName: 'Baker',
  criminalRecord: false,
  passportExpiration: '16.12.2022',
  },
  {
  firstName: 'Leighann',
  lastName: 'Scott',
  criminalRecord: true,
  passportExpiration: '31.07.2023',
  },
  {
  firstName: 'Nick',
  lastName: 'Pop',
  criminalRecord: false,
  passportExpiration: '31.11.2024',
  },
];

function allowVisa(array) {
  const today = new Date().getTime()

  return array.filter((obj) => {
    const splittetObj = obj.passportExpiration.split('.')
    const d = splittetObj[0]
    const m = splittetObj[1]
    const y = splittetObj[2]

    console.log(new Date())

    const dateRight = [y, m, d].join('.')

    if (new Date(dateRight).getTime() > today && (!obj.criminalRecord)) {
      console.log(new Date(dateRight).getTime())
      return obj
    }
  })

}

console.log(allowVisa(peopleWithVisa))






// Почему находит Один элемент? 
// function allowVisa(array) {
//   const today = new Date().getTime()

//   return array.filter((obj) => {
//     const dateObj = new Date(obj.passportExpiration)
//     const y = dateObj.getFullYear()
//     console.log(y)
//     console.log(dateObj)
//   })

// }

// console.log(allowVisa(peopleWithVisa))