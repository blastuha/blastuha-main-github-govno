const userName = 'super_user'
const pass = '12345'

const enteredName = prompt('Введите логин').trim()
console.log(userName)
const enteredPass = prompt('Введите пасс')        

if (userName === enteredName && enteredPass === pass) {
    alert(`Вы залогинились ${userName}`)
} else {
    alert('Пароль неверный')
}