// function declaration (объявляется через слово function())
//* функция не может быть вызвана до её определения

function feedAnimal(animalName = 'кошка', gender, type) {
    console.log(`Животное (${animalName}, ${gender}, ${type}) было покормлено`)
}

feedAnimal('Собака', 'female', 'породистая')

// function expression 
// (название функции пишется с помощью переменной)

const feedAnimal2 = function(animalName, gender, type) {
    console.log(`Животное (${animalName}, ${gender}, ${type}) было покормлено`)
}

feedAnimal2('Медведь', 'male', 'бурый')

// стрелочная функция () => {}

const feedAnimal3 = (animalName, gender, type) => {
    console.log(`Животное (${animalName}, ${gender}, ${type}) было покормлено`)
}

feedAnimal3('Заяц', 'nonbinar', 'русак')