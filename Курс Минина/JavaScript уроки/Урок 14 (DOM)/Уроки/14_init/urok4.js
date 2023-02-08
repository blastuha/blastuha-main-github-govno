//* Удаление элементов
const mainNavigation = document.querySelector('.main-navigation')
console.log(mainNavigation)
//* mainNavigation.remove()




//* closest - ищет ближайший родительский элемент, либо элемент, который стоит перед точкой (аналог querySelector)
const firstNavBtnTxt = document.querySelector('.main-navigation__button-item')
console.log(firstNavBtnTxt)

const navigation = firstNavBtnTxt.closest('.main-navigation')
console.log(navigation)





//* classList методы: add, remove, toggle
const firstNavBtn = document.querySelector('.main-navigation__button-item')

firstNavBtn.classList.add('main-navigation__button-item_selected') 
firstNavBtn.classList.remove('main-navigation__button-item_selected') 

//* toggle (если класс существует - то удаляет, если нет - то добавляет)

firstNavBtn.addEventListener('click', (event) => {
  event.target.classList.toggle('main-navigation__button-item_selected')
})




//* Работа с атрибутами 
// выбор элемента по дата-атрибуту
const secNavBtn = document.querySelector('a[data-button-id="2"]')
console.log(secNavBtn)
//* Проверяем существование атрибута - hasAttribute
console.log(secNavBtn.hasAttribute('type'))
console.log(secNavBtn.hasAttribute('href'))
//* Получаем значение атрибута - getAttribute
console.log(secNavBtn.getAttribute('href'))
//* Удаляем атрибут - removeAttribute
secNavBtn.removeAttribute('zhopa')
console.log(secNavBtn)
//* Добавляем атрибуты - setAttribute
secNavBtn.setAttribute('lal', 'значение lal')
console.log(secNavBtn)