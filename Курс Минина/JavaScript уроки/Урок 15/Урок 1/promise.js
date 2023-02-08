// //* Синхронный код

const numberOfElements = 10;
console.log("Начало цикла");
for (let i = 0; i < numberOfElements; i += 1) {
  console.log("i", i);
}
console.log("Конец цикла");

// //* Ассинхронный код не может выполняться пошагово
// пример ассинхронных функций, они вызываеются не линейно, не шаг за шагом

setTimeout(() => {
  // ассинхронная часть
  console.log("setTimeOut");
}, 3000);

console.log(numberOfElements); // выводится раньше setTimeout - это и есть ассинхронность (numberOfElements - синхронная часть)

setInterval(() => {
  // ассинхронная часть
  console.log("setInterval");
}, 1000);

const developer = {
  name: "Максим",
  isDev: true,
};

//* promise
// https://learn.javascript.ru/promise#:~:text=Promise%20(%D0%BE%D0%B1%D1%8B%D1%87%D0%BD%D0%BE%20%D0%B8%D1%85%20%D1%82%D0%B0%D0%BA%20%D0%B8,%D0%BD%D0%BE%20%D0%BE%D0%B1%20%D1%8D%D1%82%D0%BE%D0%BC%20%D1%87%D1%83%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B7%D0%B6%D0%B5.

//* Promise – это специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).

// Код, которому надо сделать что-то асинхронно, создаёт объект promise и возвращает его.
// Внешний код, получив promise, навешивает на него обработчики.
// По завершении процесса асинхронный код переводит promise в состояние fulfilled (с результатом) или rejected (с ошибкой). При этом автоматически вызываются соответствующие обработчики во внешнем коде.

//* resolve - код выполнен успешно, reject - с ошибкой
//* promis имеет 3 статуса: 1) pending (ожидание)б; 2) fullfield (выполнен); 3) rejected (с ошибкой)

const promise = new Promise(function (resolve, reject) {
  // Эта функция будет вызвана автоматически
  // В ней можно делать любые асинхронные операции,
  // А когда они завершатся — нужно вызвать одно из:
  // resolve(результат) при успешном выполнении
  // reject(ошибка) при ошибке
});

const promise2 = new Promise((resolve, reject) => {
  if (developer.isDev) {
    setTimeout(() => {
      resolve(`${developer.name} является разработчиком`);
    });
  } else {
    reject(`${developer.name} не является разработчиком`);
  }
});

console.log(promise2);

//* Методы promise (обработчики): then, catch, finally
// then, принимает в себя результат resolve / reject (используется, чтоб обработать выполнение промиса)
// catch, принимает в себя саму ошибку и выводит reject (для обработки промиса с ошибкой)
// finally, финальное сообщение? - не сказал что это (в последнюю очередь)
promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//* Способ использования, в общих чертах, такой:
// Код, которому надо сделать что-то асинхронно, создаёт объект promise и возвращает его.
// Внешний код, получив promise, навешивает на него обработчики.
// По завершении процесса асинхронный код переводит promise в состояние fulfilled (с результатом) или rejected (с ошибкой). При этом автоматически вызываются соответствующие обработчики во внешнем коде.
