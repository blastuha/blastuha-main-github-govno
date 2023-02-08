// Задание 7 - выпадающий список

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

class CustomSelect {
  constructor(id, options = []) {
    this.id = id
    this.options = options
  }

  render(container) {
    
  }
}