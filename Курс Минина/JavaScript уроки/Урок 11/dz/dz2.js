//* количество дней до др
const myBirthday = new Date(2023, 04, 11)


function daysBeforeBirthday(nextBirthdayDate) {
  const today = new Date().getTime()
  nextBirthdayDate.getTime()

  const diff = (nextBirthdayDate - today) // / 1000 / 60 / 60 / 24

  const convertMsToDays = function(dateInMs) {
    return Math.round(dateInMs / 1000 / 60 / 60 / 24)
  }

  convertMsToDays(diff)

  return `Через ${convertMsToDays(diff)} дней будет день рождения Бори`

}

console.log(daysBeforeBirthday(myBirthday))





//* Решение курса

const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);

const getDaysBeforeBirthday = (birthdayDate) => {
    const currentDateMs = Date.now();
    const birthdayDateMs = birthdayDate.getTime();
    return convertMsToDays(birthdayDateMs - currentDateMs);
}

console.log(getDaysBeforeBirthday(new Date(2023, 04, 11)))