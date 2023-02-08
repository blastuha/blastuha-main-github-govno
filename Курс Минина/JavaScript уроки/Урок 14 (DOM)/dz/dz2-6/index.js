const tasks = [
  {
  id: '1138465078061',
  completed: false,
  text: 'Посмотреть новый урок по JavaScript',
  },
  {
  id: '1138465078062',
  completed: false,
  text: 'Выполнить тест после урока',
  },
  {
  id: '1138465078063',
  completed: false,
  text: 'Выполнить ДЗ после урока',
  },
]

const taskList = document.querySelector('.tasks-list')

const createTaskItem = function(taskId, taskText) {
  const taskItem = document.createElement('div')
  const taskItemMainContainer = document.createElement('div')
  const taskItemMainContent = document.createElement('div')
  const form = document.createElement('form')
  const input = document.createElement('input')
  const label = document.createElement('label')
  const span = document.createElement('span')
  const button = document.createElement('button')
  const inputId = `${taskId}`;
  
  taskItem.className = 'task-item'
  taskItem.dataset.taskId = `task-${inputId}`
  taskItemMainContainer.className = 'task-item__main-container'
  taskItemMainContent.className = 'task-item__main-content'
  form.className = 'checkbox-form'
  input.className = 'checkbox-form__checkbox'
  input.type = 'checkbox'
  input.id = `${inputId}`
  label.htmlFor = `${inputId}`
  span.className = 'task-item__text'
  span.textContent = `${taskText}`
  button.className = 'task-item__delete-button default-button delete-button'
  button.dataset.deleteTaskId = '5'
  button.textContent = 'Удалить'

  taskList.append(taskItem)
  taskItem.append(taskItemMainContainer)
  taskItemMainContainer.append(taskItemMainContent)
  taskItemMainContent.append(form)
  form.append(input, label)
  taskItemMainContent.append(span)
  taskItemMainContainer.append(button)

  return taskItem
}


tasks.forEach((el) => {
  createTaskItem(el.id, el.text)
})

const createTaskBlock =  document.querySelector('.create-task-block')

createTaskBlock.addEventListener('submit', (event) => {
  const inputValue = event.target.taskName.value
  const newTask = {
    id: Date.now(),
    text: inputValue
}

  event.preventDefault()

  const isExistText = tasks.some((el) => el.text === inputValue)
  console.log(isExistText)

  if (inputValue && !isExistText) {
    tasks.push(newTask)
    createTaskItem(newTask.id, newTask.text)
  } else if (!inputValue) {
    errorMassage('Название не должно быть пустым')
    return
  } else if (isExistText) {
    console.log('hello')
    errorMassage('Дубль')
    return
  }
})

const errorMassage = function(message) {
    const errorMassage = document.createElement('span')
    errorMassage.className = 'error-message-block'
    errorMassage.textContent = message
    createTaskBlock.append(errorMassage)

    return errorMassage
}


// Задание 5 - Функция удалить + появление модального окна

const createModalWindow = function() {
  const modalOverlay = document.createElement('div')
  const deleteModal = document.createElement('div')
  const deleteModalQuestion = document.createElement('h3')
  const deleteModalButtons = document.createElement('div')
  const cancelButton = document.createElement('button')
  const confirmButton = document.createElement('button')

  modalOverlay.className = 'modal-overlay modal-overlay_hidden'
  deleteModal.className = 'delete-modal'
  deleteModalQuestion.className = 'delete-modal__question'
  deleteModalQuestion.textContent = 'Вы действительно хотите удалить эту задачу?'
  deleteModalButtons.className = 'delete-modal__buttons'
  cancelButton.className = 'delete-modal__button delete-modal__cancel-button'
  cancelButton.innerText = 'Отменить'
  confirmButton.className = 'delete-modal__button delete-modal__confirm-button'
  confirmButton.innerText = 'Подтвердить'

  document.body.prepend(modalOverlay)
  modalOverlay.append(deleteModal)
  deleteModal.append(deleteModalQuestion, deleteModalButtons)
  deleteModalButtons.append(confirmButton, cancelButton)

  return {
    modalOverlay,
    deleteModal,
    deleteModalQuestion,
    deleteModalButtons,
    cancelButton,
    confirmButton,
  }
}

let targetTaskIdToDelete = null;

taskList.addEventListener('click', (event) => {
  const {target} = event
  const deleteBtn = target.closest('.task-item__delete-button')

  if (deleteBtn) {
    const closestItem = deleteBtn.closest('.task-item')
    const closestTaskId = closestItem.dataset.taskId
    targetTaskIdToDelete = closestTaskId
    const overlayHidden = document.querySelector('.modal-overlay_hidden')
    if (overlayHidden) {
      overlayHidden.classList.remove('modal-overlay_hidden')
    }
  }
  

})

const {cancelButton, confirmButton, deleteModal, modalOverlay} = createModalWindow()

deleteModal.addEventListener('click', (event) => {
  const {target} = event
  if (target === confirmButton) {
    const deleteIndex = tasks.findIndex((task) => targetTaskIdToDelete === task.id) 
    modalOverlay.classList.add('modal-overlay_hidden')
    if (deleteIndex >= 0) {
      tasks.splice(deleteIndex, 1)
      const taskHTML = document.querySelector(`[data-task-id="${targetTaskIdToDelete}"]`)
      taskHTML.remove()
    }
  } else {
    modalOverlay.classList.add('modal-overlay_hidden')
  }
})



// Задание N6 - темная тема

let theme = 0
const taskItems = document.querySelectorAll('.task-item')
const allDocumentButtons = document.getElementsByTagName('button')

document.addEventListener('keydown', (event) => {
  const {key} = event
  console.log(key)
  if (key === 'Tab' && theme === 0) {
    event.preventDefault()
    document.body.style.backgroundColor = '#24292E'

    taskItems.forEach((task) => {
      task.style.color = '#ffffff'
    })

    for (let i = 0; i < allDocumentButtons.length; i++) {
      allDocumentButtons[i].style.border = '1px solid #ffffff'
    }

    theme = 1
    console.log(theme)
  } else if (key === 'Tab' && theme > 0) {
    event.preventDefault()
    document.body.style.backgroundColor = 'initial'
    theme = 0

    taskItems.forEach((task) => {
      task.style.color = 'initial'
    })

    for (let i = 0; i < allDocumentButtons.length; i++) {
      allDocumentButtons[i].style.border = 'none'
    }
  }
}) 



// // Задание 7 - выпадающий список

// const createDropDownList = function() {
//   const selectDropDown = document.createElement('div')
//   const selectDropDownButton = document.createElement('div')
//   const selectDropDownText = document.createElement('span')
//   const selectDropDownList = document.createElement('ul')
//   const selectDropDownListItem1 = document.createElement('li')
//   const selectDropDownListItem2 = document.createElement('li')
//   const selectDropDownListItem3 = document.createElement('li')
//   const selectDropDownListItem4 = document.createElement('li')
//   const selectDropDownListItem5 = document.createElement('li')

//   selectDropDown.className = 'select-dropdown select-dropdown--123'
//   selectDropDownButton.className = 'select-dropdown__button select-dropdown__button--123'
//   selectDropDownText.className = 'select-dropdown select-dropdown--123'
//   selectDropDownList.className = 'select-dropdown__list select-dropdown__list--123'
//   selectDropDownListItem1.className = 'select-dropdown__list-item'
//   selectDropDownListItem1.dataset.value = '1' 
//   selectDropDownListItem1.textContent = 'JavaScript'
//   selectDropDownListItem2.className = 'select-dropdown__list-item'
//   selectDropDownListItem2.dataset.value = '2' 
//   selectDropDownListItem2.textContent = 'NodeJS'
//   selectDropDownListItem3.className = 'select-dropdown__list-item'
//   selectDropDownListItem3.dataset.value = '3' 
//   selectDropDownListItem3.textContent = 'ReactJS'
//   selectDropDownListItem4.className = 'select-dropdown__list-item'
//   selectDropDownListItem4.dataset.value = '4' 
//   selectDropDownListItem4.textContent = 'HTML'
//   selectDropDownListItem5.className = 'select-dropdown__list-item'
//   selectDropDownListItem5.dataset.value = '5' 
//   selectDropDownListItem5.textContent = 'CSS'

//   selectDropDown.append(selectDropDownButton)
//   selectDropDownButton.append(selectDropDownText)
//   selectDropDown.append(selectDropDownList)
//   selectDropDownList.append(selectDropDownListItem1, selectDropDownListItem2, selectDropDownListItem3, selectDropDownListItem4, selectDropDownListItem5)
// }

// class CustomSelect {
//   constructor(id, options) {
//     this.id = id
//     this.options = options
//   }

//   render(container) {
    
//   }
// }