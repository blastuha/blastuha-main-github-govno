class Developer {
  constructor(fullName, age, position) {
    this.fullName = fullName
    this.age = age
    this.position = position
    this.technologies = []
  }

  code() {

  }

  // learnNewTechnologies(technology) {
  //   this.technologies.push(technology)
  // } 
  //? в чем смысл этой строчки?
}

//
class JuniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, 'Junior')
    this.technologies = ['HTML', 'CSS', 'JavaScript']
  }

  code() {
    console.log(`Junior-разработчик пишет код...`)
  }
}


const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
juniorDeveloper.code();
console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies); // 'Анастасия', 20, 'Junior'
// console.log(juniorDeveloper)



