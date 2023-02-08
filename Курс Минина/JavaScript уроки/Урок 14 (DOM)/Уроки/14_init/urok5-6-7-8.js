//* Обработчики событий
//* addEventListener
const firstNavBtn = document.querySelector('.main-navigation__button-item')
firstNavBtn.addEventListener('click', (event) => {
  console.log(event.target)
  // const target = event.target
  const {target} = event // - более современный доступ к таргету
  // target.classList.toggle('main-navigation__button-item_selected')
})

const allBtns = document.querySelectorAll('.main-navigation__button-item')

allBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.target.classList.toggle('main-navigation__button-item_selected')
  })
})


//* submit - дефолтные действия: перезагрузка страницы и отправка данных из формы
//! по-умолчанию перезагружает страницу и отправляет данные

const createTaskForm = document.querySelector('.create-task-block')
createTaskForm.addEventListener('submit', (event) => {
  // console.log(event)
  event.preventDefault() //* отменяем дефолтные действия (//!)
  const {target} = event
  const taskNameInput = target.taskName
  const inputValue = taskNameInput.value
  if (inputValue) {
    alert(`Вы создали задачу ${inputValue}`)
  } else {
    alert('Введите правильные данные')
  }
  console.log(taskNameInput)
}) 


//* keydown (нажимаем на клавишу) / keyup (отпускаем)
//* удаляем пункты навигации при нажатии на кнопки 1, 2, 3  (делаем проверку, если такой атрибут, если атрибута нет)
document.addEventListener('keyup', (event) => {
  console.log(event)
  const {key} = event
  console.log('keydown', {key})

  const btnToDelete = document.querySelector(`[data-button-id="${key}"]`)

  if (btnToDelete) {
    const deleteConfirmed = confirm('Удаляем кнопку?')
    if (deleteConfirmed) {
      btnToDelete.remove()
    }
  }

})

document.addEventListener('keyup', (event) => {
  const {key} = event
  console.log('keyup', key)
  const btnToDelete = document.querySelector(`[data-button-id="${key}"]`)

})



//* Урок 14.8   mouseover/mouseout/mousemove

//* События мыши: mouseover
//* create tooltip (плохой вариант смотреть у него в ролике)

const createTooltip = (text) => {
  const tooltip = document.createElement("span")
  tooltip.textContent = text
  tooltip.className = 'tooltip'

  return tooltip
}

document.addEventListener('mouseover', (event) => {
  // console.log(event)
  const {target} = event
  // console.log(target)

  const isOverPukBtn = target.className.includes('puk')
  if (isOverPukBtn) {
    console.log('success')

    // console.log(pukBtn)
    const tooltipHTML = createTooltip('Привет')
    target.append(tooltipHTML)
  }

})



//* mouseout
// убираем подсказку

document.addEventListener('mouseout', (event) => {
  const {target} = event // элемент с которого увели мышку
  const tooltip =  document.querySelector('.tooltip')
  // console.log(tooltip)

  if (tooltip) {
    tooltip.remove()
  }

})


//* mousemove

document.addEventListener('mousemove', (event) => {
  console.log(event)
})