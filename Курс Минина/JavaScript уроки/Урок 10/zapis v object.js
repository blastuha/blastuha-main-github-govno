const object1 = {};
const a = Symbol('a');
const b = Symbol.for('b');

//* записываем символы в объект
object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);

console.log(objectSymbols.length, object1 );
// expected output: 2


//* Пытаюсь записать что-то в объект
const dev = {
  name: 'Boris',
  age: 24,
  framework: 'React'
}

const exp = 'hasExp'
dev[exp] = true

console.log(dev)