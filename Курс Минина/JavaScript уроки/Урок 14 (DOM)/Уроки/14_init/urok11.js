//* Делегирование событий - чем меньше обработчиков событий - тем лучше
//! Как делать неправильно: вешать обработчик событий на каждую кнопку пункта навигации
//? Правильно - повесить обработчик событий на весь блок пункта навигации (родитель)
//* обработчик сработает на любом элементе внутри mainNavigation



const allNavigationBtns = document.querySelectorAll('.main-navigation__button-item')
const mainNavigation = document.querySelector('.main-navigation')
console.log(mainNavigation)


mainNavigation.addEventListener('click', (event) => {
  // console.log('target', event.target)
  const isNavButton = event.target.closest('.main-navigation__button-item')
  // console.log(isNavButton)
  
  if (isNavButton) {
    allNavigationBtns.forEach((navBtn) => {
      navBtn.classList.remove('main-navigation__button-item_selected')
      // navBtn.classList.toggle('main-navigation__button-item_selected')
    })
    event.target.classList.add('main-navigation__button-item_selected')
  }

})







