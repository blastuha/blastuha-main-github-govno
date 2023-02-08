const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
  return 'Гав-Гав';
  }
}
  const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
  return 'Чик-чирик';
  }
}

function makeDomestic(isDomestic) {
  console.log(`${this.type} по имени ${this.name} говорит
  ${this.makeSound()}`)
  return {
    ...this,
    isDomestic
  }
}

const makeD = makeDomestic.bind(bird)

console.log(makeDomestic.call(dog, true))
console.log(makeDomestic.apply(dog, [true]))
console.log(makeD())
console.log(makeDomestic.bind(bird)()) // 2-ая пара скобок, чтобы вызвать bind, так как call, apply - вызывают автоматически 








//* Решение курса 

//const dog = {
//   name: 'Чарли',
//   type: 'Собака',
//   makeSound() {
//       return 'Гав-Гав';
//   }
// };

// const bird = {
//   name: 'Петя',
//   type: 'Воробей',
//   makeSound() {
//       return 'Чик-чирик';
//   }
// }

// function makeDomestic(isDomestic) {
//   console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//   return {
//       ...this,
//       isDomestic,
//   }
// }

// makeDomestic.bind(dog, true)();
// makeDomestic.call(bird, false);
// makeDomestic.apply(bird, [true]);
