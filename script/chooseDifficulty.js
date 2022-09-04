const difficulties = document.querySelectorAll(".easy, .medium, .hard");

// difficulty ID [easy = 1, medium = 2, hard = 3]
let difficultyID;
let currentDiffGuilds;
let currentDiff;
let questNumber = 1;
let points = 0;
let guildId = 1;

difficulties.forEach((diff) => {
  if (diff.classList.contains("easy")) {
    diff.addEventListener("click", () => {
      difficultyID = 1;
      showQAA();
      currentDiff = gothicTheme.questionsEasy;
      currentDiffGuilds = gothicTheme.guilds[0].easy;
      const IDsArr = randomQA(currentDiff);
      chooseQuestion(IDsArr);
    });
  } else if (diff.classList.contains("medium")) {
    diff.addEventListener("click", () => {
      difficultyID = 2;
      showQAA();
      currentDiff = gothicTheme.questionsMedium;
      currentDiffGuilds = gothicTheme.guilds[0].medium;
      const IDsArr = randomQA(currentDiff);
      chooseQuestion(IDsArr);
    });
  } else if (diff.classList.contains("hard")) {
    diff.addEventListener("click", () => {
      difficultyID = 3;
      showQAA();
      currentDiff = gothicTheme.questionsHard;
      currentDiffGuilds = gothicTheme.guilds[0].hard;
      const IDsArr = randomQA(currentDiff);
      chooseQuestion(IDsArr);
    });
  }
});

const showQAA = () => {
  document.querySelector("main").classList.toggle("nvisible");
  document.querySelector(".qAndA").classList.toggle("nvisible");
};

const randomQA = (currentDiff) => {
  const questionsIDs = currentDiff.map((e) => e.id);

  const randomQuestionsIDs = questionsIDs.sort(() => Math.random() - 0.5);

  currentDiff.forEach((e) => {
    const randomOrder = e.answers.sort(() => Math.random() - 0.5);
    return randomOrder;
  });

  return randomQuestionsIDs;
};
