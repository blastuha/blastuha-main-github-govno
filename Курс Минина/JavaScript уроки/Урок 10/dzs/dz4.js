const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

function giveJobToStudent(student, jobName) {

  console.log(`Поздравляем с новой работой студента ${student.fullName}. Теперь он ${jobName}`)
  const newStudent = {...student}
  newStudent.job = jobName
  return newStudent

}

console.log(giveJobToStudent(student, 'веб-разработчик'))


const string = 'hello; boy'
const newString = string.split('; ')
console.log(newString)

const newStringJoined = newString.join('; ')
console.log(newStringJoined)