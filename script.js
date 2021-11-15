const answersArr = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
];

const error = document.querySelector(".error");
const answer = document.querySelector(".answer");
const input = document.querySelector(".question");
const ball = document.querySelector(".ball-img");

const animationBall = () => {
  ball.classList.add("shake-animaton");
  setTimeout(checkInput, 1000);
};

const checkInput = () => {
  if (input.value !== "" && input.value.slice(-1) === "?") {
    provideAnswer();
    error.textContent = "";
  } else if (input.value !== "" && input.value.slice(-1) !== "?") {
    error.textContent = "This is not a question";
    answer.textContent = "";
  } else {
    error.textContent = "Ask a question";
    answer.textContent = "";
  }
  ball.classList.remove("shake-animaton");
};

const provideAnswer = () => {
  const nr = Math.floor(Math.random() * 20);
  answer.innerHTML = `<span>Answer:</span> ${answersArr[nr]}`;
};

ball.addEventListener("click", () => {
  animationBall();
});
