const input = document.getElementById("attempts_input");
const button = document.getElementById("attempt_button");
const attempts_title = document.getElementById("attempts");
const start = document.getElementById("start");
const finish = document.getElementById("finish");
const finishButton = document.getElementById("finish_button");

const number = Math.floor(Math.random() * 11);
let attemptsNumber = 1;

const toggleScreen = () => {
  start.classList.toggle("hide");
  finish.classList.toggle("hide");
};

const errorAlert = () => {
  if (input.value < number) {
    alert("Número errado, o número é maior!");
  } else {
    alert("Número errado, o número é menor!");
  }
};

//#region Attempts
const formatAttempts = (attempts) => {
  return attempts > 1 ? `${attempts} tentativas!` : `${attempts} tentativa!`;
};

const showAttempts = () => {
  attempts_title.innerText = `Você acertou em ${formatAttempts(
    attemptsNumber
  )}`;
};
//#endregion

const validateAttempts = () => {
  if (parseInt(input.value) === number) {
    toggleScreen();
    showAttempts();
  } else {
    attemptsNumber++;
    errorAlert();
  }
};

//#region Buttons Click
const handleStartBtnClick = (e) => {
  e.preventDefault();
  if (input.value > 10 || input.value < 0 || input.value === "") {
    alert("Insira um número entre 0 e 10!");
  } else {
    validateAttempts();
  }
};

const handleFinishBtnClick = () => {
  location.reload();
};

const keypressFinishBtn = (e) => {
  if (e.key === "Enter" && start.classList.contains("hide")) {
    handleFinishBtnClick();
  }
};

const sliceInput = () => {
  if (input.value.length > 2) {
    input.value = input.value.slice(0, 2);
  }
};
//#endregion

//#region Events
button.addEventListener("click", handleStartBtnClick);
finishButton.addEventListener("click", handleFinishBtnClick);
document.addEventListener("keypress", keypressFinishBtn);
input.addEventListener("input", sliceInput);
//#endregion
