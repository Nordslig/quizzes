const difficulties = document.querySelectorAll(".easy, .medium, .hard");

// difficulty ID [easy = 1, medium = 2, hard = 3]
let difficultyID = 1;
let currentDiffGuilds;
let currentDiff;
// const easy = document.querySelector(".easy").addEventListener("click", () => {
//   document.querySelector("main").classList.toggle("nvisible");
//   document.querySelector(".qAndA").classList.toggle("nvisible");
//   currentDiffGuilds = gothicTheme.guilds[0].easy;
//   chooseQuestion();
// });

difficulties.forEach((diff) => {
  if (diff.classList.contains("easy")) {
    diff.addEventListener("click", () => {
      showQAA();
      currentDiff = gothicTheme.questionsEasy;
      currentDiffGuilds = gothicTheme.guilds[0].easy;
      const ranQuestIDs = randomQAA();
      chooseQuestion(ranQuestIDs);
    });
  } else if (diff.classList.contains("medium")) {
    diff.addEventListener("click", () => {
      showQAA();
      currentDiff = gothicTheme.questionsMedium;
      currentDiffGuilds = gothicTheme.guilds[0].medium;
      chooseQuestion();
    });
  } else if (diff.classList.contains("hard")) {
    diff.addEventListener("click", () => {
      showQAA();
      currentDiff = gothicTheme.questionsHard;
      currentDiffGuilds = gothicTheme.guilds[0].hard;
      chooseQuestion();
    });
  }
});

const showQAA = () => {
  document.querySelector("main").classList.toggle("nvisible");
  document.querySelector(".qAndA").classList.toggle("nvisible");
};
