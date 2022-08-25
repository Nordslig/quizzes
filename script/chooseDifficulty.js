// const difficulties = document.querySelectorAll(".easy, .medium, .hard");

// difficulty ID [easy = 1, medium = 2, hard = 3]
let difficultyID = 1;
let currentDiffGuilds;

const easy = document.querySelector(".easy").addEventListener("click", () => {
  document.querySelector("main").classList.toggle("nvisible");
  document.querySelector(".qAndA").classList.toggle("nvisible");
  currentDiffGuilds = gothicTheme.guilds[0].easy;
  chooseQuestion();
});

// difficulties.forEach((diff) => {
//   if (diff.classList.contains("easy")) {
//   } else if (diff.classList.contains("medium")) {
//   } else if (diff.classList.contains("hard")) {
//   }
// })
