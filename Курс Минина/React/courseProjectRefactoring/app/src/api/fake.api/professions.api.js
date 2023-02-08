export const professions = {
  doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
  waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
  physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
  engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
  actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
  cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" },
};

// ассинхронный запрос (делаем вид реального запроса), делаем эмуляцию запроса с сервера, для этого пользуемся задержкой
// ситуация, когда нет ошибок. мы запрашиваем с сервера и он всегда отвечает положительно

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(professions);
    }, 2000);
  });

// Мы экспортируем professions как константу. Я бы не хотел, чтобы она была доступна из наших методов API. Для этого я создам дефолтный экспорт

export default {
  fetchAll,
};
