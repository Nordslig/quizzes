const difficulties = document.querySelectorAll(".easy, .medium, .hard");

const easy = document.querySelector(".easy").addEventListener("click", () => {
  document.querySelector("main").classList.toggle("nvisible");
  document.querySelector(".qAndA").classList.toggle("nvisible");
  chooseQuestion();
});

// difficulties.forEach((diff) => {
//   if (diff.classList.contains("easy")) {
//   } else if (diff.classList.contains("medium")) {
//   } else if (diff.classList.contains("hard")) {
//   }
// });
