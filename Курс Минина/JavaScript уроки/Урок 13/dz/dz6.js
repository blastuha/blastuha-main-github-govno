class Dictionary {
  #name
  #words

  constructor(name) {
    this.#name = name,
    this.#words = {}
  }

  get mainName() {
    return this.#name
  }

  set setMainName(name) {
    this.#name = name
  }

  get allWorlds() {
    return this.#words
  }

  addNewWord(word, description) {
    this.#words[word] = description
  }

  add(word, description) {
    if (!this.#words[word]) {
      this.addNewWord(word, description)
    }
  }

  remove(key) {
    delete this.#words[key]
  }

  get(key) {
    return this.#words[key]
  }

  showAllWords() {
    for (const [key, value] of Object.entries(this.#words)) {
      console.log(`${key}: ${value}`)
    }
  } 
}

const dictionary = new Dictionary('Толковый словарь');


// dictionary.add('JavaScript', 'популярный язык программирования');
// dictionary.add('JavaScript', 'популярный язык программирования');
// dictionary.add('JavaScript2', 'популярный язык программирования2');
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
// // console.log(dictionary.get('JavaScript'))

// dictionary.remove('JavaScript2');
// dictionary.showAllWords()
// console.log(dictionary)
// console.log(dictionary.mainName)
// console.log(dictionary.allWorlds)


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

// const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
// hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой илиискусством без специальной подготовки, обладая только поверхностными знаниями.')
// hardWordsDictionary.add('неологизм', 'Новое слово или выражение, атакже новоезначение старого слова.');
// hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величиныв физике');
// hardWordsDictionary.remove('неологизм');
// hardWordsDictionary.showAllWords();

// console.log(hardWordsDictionary)

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой илиискусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величиныв физике.');
hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();
console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект вкотором есть слова
// дилетант и квант





