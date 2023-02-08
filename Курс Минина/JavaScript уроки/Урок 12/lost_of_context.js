//* 1-ый случай потери контекста (вызов функции без контекста)
const user = {
  name: 'Maxim',
  lang: 'JavaScript',
  getName() {
    return this.name
  },
  getLang: () => {
    console.log(this)
    return this.lang
  },
  getLang2: function() {
    console.log(this)
    return this.lang
  }
}

console.log(user.getName())

// сохраняем функцию в переменную
const newGetName = user.getName

console.log('newGetName', newGetName()) // ссылается на window, котекст потерян (нет доступа к имени)
console.log('newGetName', newGetName.call(user))
//! this - объект перед точкой


//* 2-ой случай потери контекста (вызов стрелочной функции)
// у стрелочной функции нет своего this, ссылается на контекст выше, то есть глобальный - window
console.log(user.getLang())
console.log(user.getLang.call(user))

console.log(user.getLang2())