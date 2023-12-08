const input = document.getElementById("attempts_input");
const button = document.getElementById("attempt_button");
const attempts_title = document.getElementById("attempts");
const start = document.getElementById("start");
const finish = document.getElementById("finish");
const finishButton = document.getElementById("finish_button");

const number = Math.floor(Math.random() * 11);
let attemptsNumber = 1;

const hideStart = () => {
  start.classList.toggle("hide");
};

const hideFinish = () => {
  finish.classList.toggle("hide");
};

const errorAlert = () => {
  if (input.value < number) {
    alert("Número errado, o número é maior!");
  } else {
    alert("Número errado, o número é menor!");
  }
};

const formatAttempts = (attempts) => {
  return attempts > 1 ? `${attempts} tentativas` : `${attempts} tentativa`;
};

const showAttempts = () => {
  attempts_title.innerText = `Você acertou em ${formatAttempts(
    attemptsNumber
  )} tentativas!`;
};

const validateAttempts = () => {
  if (parseInt(input.value) === number) {
    hideStart();
    hideFinish();
    showAttempts();
  } else {
    attemptsNumber++;
    errorAlert();
  }
};

// click button
const handleButtonClick = (e) => {
  e.preventDefault();
  if (input.value > 10 || input.value < 0 || input.value) {
    alert("Insira um número entre 0 e 10!");
  } else {
    validateAttempts();
  }
};

const handleFinishBtnClick = () => {
  hideFinish();
  location.reload();
};

// Events
button.addEventListener("click", handleButtonClick);

finishButton.addEventListener("click", handleFinishBtnClick);

input.addEventListener("input", () => {
  if (input.value.length > 2) {
    input.value = input.value.slice(0, 2);
  }
});
