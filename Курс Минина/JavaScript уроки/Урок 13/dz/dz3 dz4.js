class Dictionary {
  constructor(name) {
    this.name = name,
    this.words = {}
  }

  add(word, description) {
    if (!this.words[word]) {
      this.words[word] = description
    }
  }

  remove(key) {
    delete this.words[key]
  }

  get(key) {
    return this.words[key]
  }

  showAllWords() {
    for (const [key, value] of Object.entries(this.words)) {
      console.log(`${key}: ${value}`)
    }
  } 
}

const dictionary = new Dictionary('Толковый словарь');


dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('JavaScript2', 'популярный язык программирования2');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
// console.log(dictionary.get('JavaScript'))

dictionary.remove('JavaScript2');
dictionary.showAllWords()
console.log(dictionary)


//? DZ4

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name)
    this.name = name
    this.words = {}
  }

  add(word, description, hard = true) {
    if(!this.words[word]) {
      // this.words[word] - ключ / объект {word, descr, isD} - значение
      this.words[word] = {
        word,
        description,
        isDifficult: hard
      }
    }
  }

  showAllWords() {
    Object.values(this.words).forEach((keyValue) => {
      console.log(`${keyValue['word']} - ${keyValue['description']}`)
    })

  }

}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой илиискусством без специальной подготовки, обладая только поверхностными знаниями.')
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, атакже новоезначение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величиныв физике');
hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary)








//* Test, смотрю, что будет

const dic = {}

function dicFill(word, description) {
  dic[word] = {
    word,
    description
  }
}

dicFill('JavaScript', 'популярный язык программирования')
console.log(dic)