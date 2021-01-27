console.log("Work");

const form = document.querySelector(".bot__form form");
const botAnswer = document.getElementById("bot__answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = e.target.bottext.value;
  console.log(value);
});
