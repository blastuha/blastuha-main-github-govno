//* contextmenu (по умолчанию - меню на правый клик)

document.addEventListener('contextmenu', (event) => {
  console.log(event)
  event.preventDefault() //* contextmenu по умолчанию не откроется
})

//* change, input
//change - работает когда изменил значение в input и убрал фокус с поля ввода
//input - срабатывает сразу как мы вводим символ в поле ввода

const chekTaskNameInputOnValidation = (value) => {
  if (!value || value.includes('@')) {
    return false
  }
  
  return true
}

const createTaskBlock = document.querySelector('.create-task-block')
const taskNameInput = createTaskBlock.querySelector('.create-task-block__input')

taskNameInput.addEventListener('input', (event) => {
  // console.log(event)
  const {target} = event
  const {value} = target
  const isValid = chekTaskNameInputOnValidation(value)
  const newMassageBlockFromDOM = document.querySelector('.error-message-block')
  // console.log(target)

  if (!isValid) {
    const newMassageBlock = document.createElement('span')
    newMassageBlock.className = 'error-message-block'
    newMassageBlock.textContent = 'Ошибка! Текст для задачи не должен быть пустым и != @'
    createTaskBlock.append(newMassageBlock)
  } else if (isValid && newMassageBlockFromDOM) {
    newMassageBlockFromDOM.remove()
  }
})