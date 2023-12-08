const userInput = document.getElementById("attempts_input");
const guessButton = document.getElementById("attempt_button");
const attemptsTitle = document.getElementById("attempts");
const startScreen = document.getElementById("start");
const finishScreen = document.getElementById("finish");
const finishButton = document.getElementById("finish_button");

const randomNumber = Math.floor(Math.random() * 11);
let attemptsNumber = 1;

const toggleScreens = () => {
  startScreen.classList.toggle("hide");
  finishScreen.classList.toggle("hide");
};

const showError = () => {
  if (userInput.value < randomNumber) {
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
  attemptsTitle.innerText = `Você acertou em ${formatAttempts(attemptsNumber)}`;
};
//#endregion

const validateAttempts = () => {
  if (parseInt(userInput.value) === randomNumber) {
    toggleScreens();
    showAttempts();
  } else {
    attemptsNumber++;
    showError();
  }
};

//#region Buttons Click
const handleGuessButtonClick = (e) => {
  e.preventDefault();
  if (userInput.value > 10 || userInput.value < 0 || userInput.value === "") {
    alert("Insira um número entre 0 e 10!");
  } else {
    validateAttempts();
  }
};

const handleFinishButtonClick = () => {
  location.reload();
};

const keypressFinishButton = (e) => {
  if (e.key === "Enter" && startScreen.classList.contains("hide")) {
    handleFinishButtonClick();
  }
};
//#endregion

const sliceInput = () => {
  if (userInput.value.length > 2) {
    userInput.value = userInput.value.slice(0, 2);
  }
};

//#region Events
guessButton.addEventListener("click", handleGuessButtonClick);
finishButton.addEventListener("click", handleFinishButtonClick);
document.addEventListener("keypress", keypressFinishButton);
userInput.addEventListener("userInput", sliceInput);
//#endregion
