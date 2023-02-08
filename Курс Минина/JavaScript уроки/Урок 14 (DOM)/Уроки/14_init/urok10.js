//* Всплытие (от элемента к window)

const all = document.querySelectorAll('*')
console.log(all)

// all.forEach((el) => {
//   el.addEventListener('click', (event) => {
//     alert(`Всплытие ${el.tagName}`)
//   })
// })


//* Погружение (от window к элементу)
// используется 3 параметр - true

// all.forEach((el) => {
//   el.addEventListener('click', (event) => {
//     alert(`Всплытие ${el.tagName}`)
//   }, true)
// })



//* Остановка всплытия (метод - stopPropagation)
//* target - элемент, на котором сработало событие 
//* currentTarget - элемент, на котором сработало событие сейчас


all.forEach((el) => {
  el.addEventListener('click', (event) => {
    if (event.currentTarget.className === 'form') {
      event.stopPropagation()
    }
    alert(`Всплытие ${el.tagName}`)
  })
})