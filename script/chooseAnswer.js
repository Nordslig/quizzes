const answers = document.querySelectorAll(".answer");

const chooseAnswer = () => {
  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      checkIfCorrect(answer);
      answers.forEach((ans) => {
        ans.removeAttribute("data-correct");
      });
      randomQuestionsIDs.shift();
      if (questNumber <= 10) {
        chooseQuestion();
      } else {
        if (points >= 4 && points <= 7) guildId = 2;
        else if (points > 8) guildId = 3;
        endScreen();
      }
    });
  });
};

const checkIfCorrect = (ans) => {
  if (ans.hasAttribute("data-correct")) {
    points++;
  }
};

chooseAnswer(randomQuestionsIDs);
