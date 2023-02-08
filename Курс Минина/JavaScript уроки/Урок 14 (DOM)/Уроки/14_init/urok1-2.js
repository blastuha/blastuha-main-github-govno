//* устаревшие методы получения элементов

const tasksBlock = document.getElementById('tasks')
console.log(tasksBlock)

const allNavButtons = document.getElementsByClassName('main-navigation__button-item')
console.log(allNavButtons)

const buttons = document.getElementsByTagName('button')
console.log(buttons)



//* современные методы - querySelector - ищет первое совпадение / querySelectorAll - все
const tasksBlock2 = document.querySelector('#tasks')
console.log(tasksBlock2)

//* получение по тегу через querySelectorAll
const buttons2 = document.querySelectorAll('button')
console.log(buttons2)

//* получение по атрибуту [] 
const firstButtonNav = document.querySelector('[data-button-id="1"]')
console.log(firstButtonNav)

//* оптимизация - более короткий путь до элемента (так быстрее)
const createTaskBlock = document.querySelector('.create-task-block')
// доступ по атрибуту
const submitButton = createTaskBlock.querySelector('[type="submit"]')
console.log('submitButton', submitButton)









//* УРОК 14.2 - Свойства html - документов

//* получение названия класса
const tasksWrapper = document.querySelector('.tasks__wrapper')
tasksWrapper.className = 'название нового класса' // ломается вёрстка
console.log(tasksWrapper.className)




//* получаем элемент с ID
const taksBlock = document.querySelector('#tasks')
tasksBlock.id = 'lol' // ломается вёрстка
console.log(tasksBlock.id)



//* Изменяем html значение кнопки innerHTML / textContent
//? textContent - не обрабатывает теги например: <b><b>, а inner - обрабатывает
const submitBut = document.querySelector('.create-task-block__button')
submitBut.innerHTML = 'hello' // меняем значение кнопки
submitButton.textContent = 'helloTextContent'
console.log(submitBut)




//* innerHTML
console.log(tasksBlock.innerHTML) // весь html-код блока
// tasksBlock.innerHTML = '' // очищаем весь html блока
// tasksBlock.innerHTML = '<b>TasksBlock<b>'




//* children - получаем массив детей внутри родительского тега
const createTaskForm = document.querySelector('.create-task-block')
console.log(createTaskForm.children)

// createTaskForm.children = null // нельзя таким способом удалить детей




//* data-атрибуты (можно получать и изменять), обращаемся через dataset (заменяет data)
//? обращаемся через camelCase data-button-id -- buttonId (без черточек) 

const firstBtn = document.querySelector('.main-navigation__button-item')
console.log(firstBtn.dataset.buttonId) //* хранит data id

console.log(firstBtn.dataset.buttonId = 10) 




//* style

console.log(firstBtn.style) // список примененных стилей к элементу

// font-weight - пишется через camelCase
firstBtn.style.fontWeight = 'bold'
firstBtn.style.boxShadow = 'inset 0 0 0 3px' //внутренняя тень на кнопку навигации (1)









