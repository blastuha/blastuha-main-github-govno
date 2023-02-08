//*-------Задача N1---------
// функция, которая перебирает массив и удаляет человека из очереди
// если человек получил посылку, то пишет `сообщеение`
// если человек не получил посылку, то пишет другое `сообщение`

const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

let newPeopleWaiting = [...peopleWaiting];
// console.log(newPeopleWaiting)

const queueEdition = function (array) {
  let newArray = [...array];
  array.forEach((person) => {
    if (person === "Кристина" || person === "Олег" || person === "Кирилл") {
      newArray.splice(0, 1);
      console.log(
        `${person} получил(а) посылку. В очереди осталось ${newArray.length} человек`
      );
      // console.log((newArray.splice(0, 1)))
    } else {
      newArray.splice(0, 1);
      console.log(`${person} не получил(а) посылку и ушел(ла) из очереди.`);
      // console.log(newArray.splice(0, 1))
    }
  });
  return newArray;
};
console.log(queueEdition(peopleWaiting));

//*-------Задача N2---------
const getSumOfSequence = function (number) {
  let massive = [];
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    massive.push(i);
    console.log(massive);
    sum = massive[0] + massive[massive.length - 1];
    console.log(massive.length, sum);
  }
  return sum;
};
console.log(getSumOfSequence(5));

//*-------Задача N3---------
//через findIndex()
const coffees = ["Latte", "Cappuccino", "Americano"];

const coffeFinder = function (arr) {
  const coffeeName = prompt("Поиск кофе по названию:");

  const indexcoffeeName = arr.findIndex((coffee, index) => {
    return coffee.toLowerCase() === coffeeName.toLowerCase().trim();
  });

  console.log(indexcoffeeName);
  console.log(coffeeName);

  if (indexcoffeeName >= 0) {
    alert(
      `Держите ваш любимый кофе ${coffeeName.toLowerCase().trim()}. Он ${
        indexcoffeeName + 1
      }-й по популярности в нашей кофейне`
    );
  } else {
    alert(`К сожалению, такого вида кофе нет в наличии`);
    // coffeFinder(arr)
  }
};
coffeFinder(coffees);

//*-------Задача N4---------
const coffees2 = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

const updPrices = prices.map((el, index) => {
  return el + 0.5;
});
console.log(updPrices);

const clientAlert = function (coffeeArr, pricesArr) {
  coffeeArr.forEach((el, index) => {
    index = pricesArr[index];
    console.log(`Кофе ${el} сейчас стоит ${index} евро`);
  });
};

clientAlert(coffees2, updPrices);

//*-------Задача N5---------
const clientsEstimations = [];

const askClientToGiveEstimation = function (arr) {
  const goodEstimations = [];
  const notGoodEstimations = [];
  const ask = Number(prompt("Как вы оцениваете нашу кофейню от 1 до 10?"));

  console.log(ask);

  if (typeof ask === "number" && ask > 0 && ask <= 10) {
    arr.push(ask);
  }

  for (let i = 0; i <= ask; i++) {
    if (arr[i] >= 5) {
      goodEstimations.push(arr[i]);
    } else {
      notGoodEstimations.push(arr[i]);
    }
  }

  console.log(`Всего положительных оценок: ${goodEstimations.length}`);
  console.log(`Всего отризательных оценок: ${notGoodEstimations.length}`);

  return (
    console.log(arr),
    console.log("goodEstimations", goodEstimations),
    console.log("notGoodEstimations", notGoodEstimations)
  );
};
askClientToGiveEstimation(clientsEstimations);
askClientToGiveEstimation(clientsEstimations);
askClientToGiveEstimation(clientsEstimations);
askClientToGiveEstimation(clientsEstimations);
askClientToGiveEstimation(clientsEstimations);

//*-------Задача Сам Придумал---------
const imena = [
  "misha yakovlev",
  "borya shevnin",
  "anna lebedeva",
  "peter parker",
];

const imena3 = imena.map((sentence) => {
  const newImena = sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return newImena;
});

console.log(imena3);

//*-------Задача N6---------
// classic for
const numbers = [10, 4, 100, -5, 54, 2];

const newNumbers = function (arr) {
  let sum = 0;
  let toTheExtend;
  for (let i = 0; i < arr.length; i++) {
    toTheExtend = arr[i] ** 3;
    sum = sum + toTheExtend;
  }
  return console.log(sum);
};

newNumbers(numbers);

// for of
const numbers1 = [10, 4, 100, -5, 54, 2];

const numbers1New = (arr) => {
  let sum = 0;
  let toThePower;

  for (let numb of numbers1) {
    toThePower = numb ** 3;
    sum += toThePower;
  }
  return console.log(sum);
};

numbers1New(numbers1);

// forEach
const numbers2 = [10, 4, 100, -5, 54, 2];

const numbers2New = (arr) => {
  let toThePower;
  let sum = 0;
  arr.forEach((numb) => {
    toThePower = numb ** 3;
    sum += toThePower;
  });
  return console.log(sum);
};

numbers2New(numbers2);
console.log(numbers2);

// reduce
const numbers3 = [10, 4, 100, -5, 54, 2];

const numbers3New = numbers3.reduce((prev, curr) => {
  return (prev = prev + curr ** 3);
});
console.log(numbers3New);

// через функцию
const numbers3New2 = (arr) => {
  return arr.reduce((prev, curr) => {
    return (prev = prev + curr ** 3);
  });
};

console.log(numbers3New2(numbers3));

//*-------Задача N7---------
const goals = [1, 8, 1, 3, 2, -1, 5];

let maxNumberOfGoals = goals[0];
let maxNumberOfGoalsIndex = 0;
let minNumberOfGoals = goals[0];

goals.forEach((match, index) => {
  if (match > maxNumberOfGoals) {
    maxNumberOfGoals = match;
    maxNumberOfGoalsIndex = index;
  }
  if (match < minNumberOfGoals && match >= 0) {
    minNumberOfGoals = match;
  }
});
console.log(maxNumberOfGoals, minNumberOfGoals, maxNumberOfGoalsIndex);

const matchesWithMinNumberOfGoals = goals
  .map((match, index) => (match === minNumberOfGoals ? index + 1 : -1))
  .filter((match) => match > 0);

console.log(matchesWithMinNumberOfGoals);

console.log(`Самые нерезультативные матчи были под номерами ${matchesWithMinNumberOfGoals} . В каждом из них
было забито по ${minNumberOfGoals} мячу(а).`);

const goals2 = [1, 8, 1, 3, 2, -1, 5];
const numberOfGoalsPerSeason = goals2.reduce((prev, curr) => {
  if (curr >= 0) {
    return prev + curr;
  }
  if (curr < 0) {
    return prev;
  }
});
console.log(numberOfGoalsPerSeason);
//
const numberOfGoalsPerSeason2 = goals2.reduce((acc, goalNumber) => {
  return goalNumber >= 0 ? acc + goalNumber : acc;
}, 0);

console.log(`Общее количество голов за сезон равно ${numberOfGoalsPerSeason2}`);

//поиск автоматических поражений
const goals3 = [1, 8, 1, 3, 2, -1, 5];

const autoLoses = goals3.some((match) => {
  if (match < 0) {
    return match;
  }
});
console.log(autoLoses);

function autoLosesChecker(data) {
  if (data) {
    console.log("Были автоматические поражения: да");
  } else {
    console.log("Были автоматические поражения: нет");
  }
}
autoLosesChecker(autoLoses);

// сотировка голов в порядке возрастания
const goals4 = [1, 8, 1, 3, 2, -1, 5];
const goals4copy = [...goals4];
console.log(goals4copy);

const goals4higher = goals4copy.sort((a, b) => {
  return b - a;
});
console.log(goals4higher.join(" "));

//*-------Задача Своя2---------
const imena = [
  "misha yakovlev",
  "borya shevnin",
  "anna lebedeva",
  "peter parker",
];

const imena2 = imena.map((sentence) => {
  const newImena = sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return newImena;
});

console.log(imena2);

//*-------Задача Своя3---------
posts = [
  {
    id: 1,
    text: "One",
    likes: "1",
  },
  {
    id: 2,
    text: "Two",
    likes: 50,
  },
  {
    id: 3,
    text: "Three",
    likes: 7,
  },
];

const newPosts = posts.map((post) =>
  post.id === 1 ? { ...post, text: "other text" } : post
);

console.log(newPosts);
// 2 вариант записи
const newPosts2 = posts.map((post) => {
  if (post.id === 1) {
    return { ...post, text: "other text" };
  } else {
    return post;
  }
});

console.log(newPosts2);

//*-------Задача Своя4---------
//нужно, чтобы объект был: {id: 123, fullName: 'name'}
const profilesBackend = [
  {
    ID: 123,
    TITLE_X_FACTOR: "Леонид Анатольевич",
  },
  {
    ID: 223,
    TITLE_X_FACTOR: "Анатолий Федрович",
  },
];

//* Мишин вариант
const profilesRight = profilesBackend.map((obj) => {
  return {
    id: obj.ID,
    fullName: obj.TITLE_X_FACTOR,
  };
});
console.log(profilesRight);

//* более сложный вариант)
const newKeys = { ID: "id", TITLE_X_FACTOR: "fullName" };
//? Почему ключи должны называться также как у оригинального объекта? иначе unfedined

const profilesNew = profilesBackend.map((obj) => {
  const newObj = Object.keys(obj).map((key) => {
    const newKey = newKeys[key];
    return { [newKey]: obj[key] };
    //? почему newKey в квадратных скобках? потому что это строка?
  });
  return Object.assign({}, ...newObj);
  //? что значит строчка выше? Object.keys - образует массив! Зачем тут ...?
});
console.log(profilesNew);

//*-------Задача N8---------
const arr = ["mom", "mom", 1, "mom", "+", 1, "mom", "42mom"];
const operators = [">", "<", "=", "+", "-", "*", "/"];

const isNumber = (value) => !isNaN(value) && !isNaN(parseFloat(value));

function getMathResult(expression) {
  let expression4Edit = [...expression];

  if (expression.length < 3) {
    return "Ошибка";
  }

  if (expression.length > 3) {
    expression4Edit = expression.filter((el) => {
      return !isNaN(+el) || operators.includes(el);
    });
  }

  const firstNumb = +expression4Edit[0];
  const operator = expression4Edit[1];
  const secondNumb = +expression4Edit[2];

  switch (operator) {
    case "+":
      return firstNumb + secondNumb;
    case "-":
      return firstNumb - secondNumb;
    default:
      return "ошибко_О";
  }
}

console.log(getMathResult(arr));

//*-------Задача N9---------
// создать массив 1, 2, 3, 4, 5
// проитерирывать его копию
//  на каждой итерации

var arr2 = [];

for (var i = 0; i < 10; i++) {
  arr2[i] = [];
}

console.log(arr2);

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 5; j++) {
    arr2[i][j] = Math.floor(Math.random() * (20 - 1 + 1) + 1);
  }
}

console.log(arr2);

//

let aRR = [];

for (let i = 0; i < 5; i++) {
  const row = [];
  for (let j = 0; j < 5; j++) {
    row.push(j + 1);
  }
  aRR.push(row);
}
console.log(aRR);

//
const a1 = [];

for (let i = 0; i < 5; i++) {
  a1[i] = [];
  for (let j = 0; j < 5; j++) {
    a1[i].push(j + 1);
  }
}

console.log(a1);
//

//*-------Задача N10---------
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// через for / spread
let matrixSpread = [];

for (let i = 0; i < 1; i++) {
  matrixSpread = [...matrix[i], ...matrix[i + 1], ...matrix[i + 2]];
  console.log(matrixSpread);
}

//через for / concat
let matrixNew = [];
for (let i = 0; i < 1; i++) {
  matrixNew = matrix[i].concat(matrix[i + 1]).concat(matrix[i + 2]);
  console.log(matrixNew);
}

// reduce concat
const matrixNew2 = matrix.reduce((prev, curr) => {
  return prev.concat(curr);
}, []);

console.log(matrixNew2);

// reduce spread
const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix2);
console.log(...matrix2);

// const matrixN = matrix2.reduce((prev, curr) => {
//   return [...prev, ...curr]
// }, [])

// console.log(matrixN)

// forEach

const matrixFull = function (matrix) {
  res = [];
  matrix.forEach((arr) => {
    res.push(...arr);
  });
  return res;
};
console.log(matrixFull(matrix2));
