const student = {
  id: 1,
  lang: 'JavaScript',
  hasExpInReact: false
}

// Добавление
student.experienceInMonth = 6
console.log(student)

// Удаление
// delete 

delete student.hasExpInReact
console.log(student)

// Измнение
student.hasExpInReact = true
console.log(student)