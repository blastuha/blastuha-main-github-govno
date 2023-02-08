const student = {
  stack: ['HTML'],
  level: 1,
  improveLevel: function() {
    this.level += 1
    if (this.level === 2) {
      this.stack.push('CSS')
    } 
    if (this.level === 3) {
      this.stack.push('JavaScript')
    } 
    if (this.level === 4) {
      this.stack.push('React')
    } 
    if (this.level === 5) {
      this.stack.push('NodeJS')
    } 
    if (this.level > 5) {
      console.log(`Студент выучил все технологии`)
    } 
    return this
  }
}

student
.improveLevel()
.improveLevel()
.improveLevel()
.improveLevel()
.improveLevel()

console.log(student)








// const obj = {
//   name: 'Boris',
//   lang: 'JavaScript',
// }

// console.log(obj[name])
// console.log(obj.name)
// console.log(obj['name'])

// const key = 'abc'
// console.log(key[key])




