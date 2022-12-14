//находим кнопку и создаем ей функцию клика
document.querySelector("#generate").addEventListener("click", () => {
  //в ней вызываем функцию генерации цитаты
  generated();
});
//создаём функцию генерации цитаты
generated = () => {
  //создаём объект с цитатами
  let quotes = {
    "Махатма Ганди": '"Вы должны быть таким, каким хотите увидеть мир"',
    "Мишель Де Монтень":
      '"Кто боится страданий, тот страдает уже от своей боязни"',
    Конфуций: '"На самом деле, жизнь проста, но мы настойчиво ее усложняем"',
    Платон: '"В поисках счастья для других мы находим его для себя"',
    "Хелен Адамс Келлер":
      '"Когда одна дверь счастья закрывается, открывается другая; но мы часто не замечаем ее, уставившись взглядом в закрытую дверь"',
    "Зигмунд Фрейд":
      '"Прежде чем диагностировать у себя депрессию и заниженную самооценку, убедитесь, что вы не окружены идиотами"',
    "Джошуа Дж. Марин":
      '"Сложности делают жизнь интересной, а их преодоление делает жизнь наполненной смыслом"',
    "Оливер Уэнделл Холмс":
      '"Ум, растянутый новым опытом, никогда не сможет вернуться к своим прежним размерам"',
    "Коразон Акино":
      '"Лучше умереть значимой смертью, чем жить бессмысленной жизнью"',
    "Наполеон Хилл":
      '"Что разум человека может постигнуть и во что он может поверить, того он способен достичь"',
  };

  //получаем значение перечисляемых свойств
  let authors = Object.keys(quotes);
  //получаем случайного автора
  let author = authors[Math.floor(Math.random() * authors.length)];
  //получаем случайную цитату
  let quote = quotes[author];
  //добавляем полученные данные в разметку
  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
};
