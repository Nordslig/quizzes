const difficulties = document.querySelectorAll(".easy, .medium, .hard");

const easy = document.querySelector(".easy").addEventListener("click", () => {
  document.querySelector("main").classList.toggle("nvisible");
  document.querySelector(".qAndA").classList.toggle("nvisible");
  chooseQuestion();
});

// difficulties.forEach((e) => {
//   e.addEventListener("click", () => {
//     console.log("działa");
//     document.querySelector("main").classList.toggle("nvisible");
//     document.querySelector(".qAndA").classList.toggle("nvisible");
//   });
// });

difficulties.forEach((diff) => {
  if (diff.classList.contains("easy")) {
    // console.log("easy");
  } else if (diff.classList.contains("medium")) {
    // console.log("medium");
  } else if (diff.classList.contains("hard")) {
    // console.log("hard");
  }
});
