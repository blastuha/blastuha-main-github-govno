const someDate = new Date(2022, 01, 22)
console.log(someDate.getFullYear())

function getDateFormat(date, separator) {
  const dateRight = []
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  
  if (m < 10) {
    m = 0 + m.toString()
  }
  if (d < 10) {
    d = 0 + d.toString()
  }

  dateRight.push(d, m, y)

  return dateRight.join(separator)
}

console.log(getDateFormat(someDate, '.'))




//* вариант решения из курса

const addZero = (numberStr) => String(numberStr).length === 1 ? `0${numberStr}` : String(numberStr);

const getDateFormat2 = (date, separator = '.') => {
    const dateItem = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dateArray = [dateItem, month + 1, year].map((item) => addZero(item));
    console.log('dateArray', dateArray)

    return dateArray.join(separator);
}

console.log(getDateFormat2(new Date(2022, 01, 22)));