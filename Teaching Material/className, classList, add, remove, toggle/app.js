//* вариант через querySelector
const fullList = document.querySelector('.ol')

//* вешаем событие на ol через  onlick
// fullList.onclick = (event) => {
//   if (fullList.classList.contains('active')) {
//     fullList.classList.remove('active')
//   } else {
//     fullList.classList.add('active')
//   }
// }
//* вешаем событие на ol через  addEventListener
fullList.addEventListener('click', (event) => {
  if (fullList.classList.contains('active')) {
    fullList.classList.remove('active')
  } else {
    fullList.classList.add('active')
  }
})


//* вешаем событие на li
// fullList.addEventListener('click', (event) => {
//   const listItem = event.target

//   if (listItem.classList.contains('active')) {
//     listItem.classList.remove('active')
//   } else {
//     console.log(listItem)
//     listItem.classList.add('active')
//   }

// })


//* вариант через querySelectorAll и итерацию
// const fullLIst = document.querySelectorAll('.ol li')
// console.log(fullLIst)

// fullLIst.forEach((li) => {
//   li.addEventListener('click', (event) => {
//     console.log(event.target)
//   })
// })


//* Работаем с toggle

const box = document.querySelector('.box')
const innerBox = document.querySelector('.inner_box')

box.addEventListener('click', (event) => {
  event.target.classList.toggle('red')
})

//* Работаем с event.target.style
//! Так лучше не делать!! (Потому что стиль добавляется 'инлайново' )
innerBox.addEventListener('click', (event) => {
  event.target.style.border = '3px solid green'
})