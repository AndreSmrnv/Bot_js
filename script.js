console.log("Work");

const form = document.querySelector(".bot__form form");
const db = {
  "Как дела": "Хорошо! У тебя как?",
  "Как открыть консервы": "никак",
  "Сколько тебе лет": 0,
};
// const botAnswer = document.querySelector('#bot__answer')
const botAnswer = document.getElementById("bot__answer");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // event.target.bottext - input элемент
  // form === event.target
  const value = event.target.bottext.value;

  if (value) {
    const answer = db[value];

    if (answer !== undefined) {
      botAnswer.innerText = answer;
    } else {
      botAnswer.innerText = "Я не знаю ответа на данный вопрос";
    }

    botAnswer.classList.add("animate__pulse");
  }
  setTimeout(() => botAnswer.classList.remove("animate__pulse"), 1000);
  form.reset();
  // let value = event.target.bottext.value
});
