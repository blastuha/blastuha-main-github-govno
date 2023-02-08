// const body = document.querySelector('body')
// console.log(body)

// body.innerHTML = `
// <form class="create-user-form">
//   <label>
//     Имя
//   <input type="text" name="userName" placeholder="Введите ваше
//   имя">
//   </label>
//   <label>
//     Пароль
//   <input type="password" name="password" placeholder="Придумайте
//   Пароль">
//   </label>
//   <button type="submit">
//     Подтвердить
//   </button>
// </form>
// `



// //* Второй способ через createElement (неправильно)
// const body = document.querySelector('body')
// const userForm = document.createElement('form')
// userForm.className = 'create-user-form'
// const label = document.createElement('label')
// const input = document.createElement('input')
// const button = document.createElement('button')
// input.type = 'text'
// input.name = 'userName'
// input.placeholder = 'Введите ваше имя'
// button.textContent = 'submit'
// console.log(input)

// body.append(userForm, label, input, button)


//* second time
//* innerHTML

// document.body.innerHTML = `
// <form class="create-user-form">
//   <label>
//     Имя
//   <input type="text" name="userName" placeholder="Введите ваше
//   имя">
//   </label>
//   <label>
//     Пароль
//   <input type="password" name="password" placeholder="Придумайте
//   Пароль">
//   </label>
//   <button type="submit">
//     Подтвердить
//   </button>
// </form>
// `


//* document.createElement

const userForm = document.createElement('form')
const labelName = document.createElement('label')
const inputName = document.createElement('input')
const labelPass = document.createElement('label')
const inputPass = document.createElement('input')
const submitButton = document.createElement('button')

userForm.className = 'create-user-form'
labelName.textContent = 'Имя'
inputName.type = 'text'
inputName.name = 'userName'
inputName.placeholder = '"Введите ваше имя'
labelPass.textContent = 'Пароль'
inputPass.type = 'password'
inputPass.name = 'password'
inputPass.placeholder = 'Придумайте пароль'
submitButton.type = 'submit'
submitButton.textContent = 'Подтвердить'

document.body.append(userForm, labelName, inputName, labelPass, inputPass, submitButton)

