//* Опциональная цепочка

const developer = {
  name: 'Maxim',
  job: 'Front-end разработчик',
  experience: 24,
  // jobAllinfo: {
  //   type: 'Front-End',
  //   framework: 'ReactJS'
  // }
}

// console.log(developer.jobAllinfo.framework) //TypeError: Cannot read properties of undefined (reading 'framework')

//* Обход ошибки выше

if (developer && developer.jobAllinfo && developer.jobAllinfo.framework) {
  console.log('Разработчик знает framework')
} else {
  console.log('Разработчик не знает framework')
}

//* Опциональная цепочка
const developer = {
  name: 'Maxim',
  job: 'Front-end разработчик',
  experience: 24,
  // jobAllinfo: {
  //   type: 'Front-End',
  //   framework: 'ReactJS'
  // }
}

if (developer?.jobAllinfo?.framework)  {
  console.log('Разработчик знает framework')
} else {
  console.log('Разработчик не знает framework')
}