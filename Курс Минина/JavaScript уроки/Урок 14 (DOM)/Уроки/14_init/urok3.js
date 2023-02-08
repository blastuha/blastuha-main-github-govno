//* createElement - метод позволяющий создавать HTML-элемент

const newNavButton = document.createElement('a')
newNavButton.className = 'main-navigation__button-item'
newNavButton.href = '#tasks_expired'
newNavButton.dataset.buttonId = '4'
newNavButton.textContent = 'Просроченные задачи'
console.log(newNavButton) 


//* append, prepend - позволяют добавлять эл. в DOM-дерево
// append - добавляет в самый конец / prepend - в начало  

const mainNavigation = document.querySelector('.main-navigation')
mainNavigation.append(newNavButton)


//* insertAdjacentElement(position, element) - также позволяет добавлять эл. в ДОМ-дерево
//? может добавлять до/перед самого элемента, не только во внутрь как append/prepend (во внутрь тоже может)
// принимает 2 параметра (смотреть mdn)

const newNavButton2 = document.createElement('a')
newNavButton2.className = 'main-navigation__button-item'
newNavButton2.href = '#tasks_expired'
newNavButton2.dataset.buttonId = '4'
newNavButton2.textContent = 'insertAdjacentElement'

mainNavigation.insertAdjacentElement('beforeBegin', newNavButton2)