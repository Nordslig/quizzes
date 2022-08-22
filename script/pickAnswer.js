const answers = document.querySelectorAll(".answer");

const pickAnswer = () => {
  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      checkIfCorrect(answer);
      answers.forEach((ans) => {
        ans.removeAttribute("data-correct");
      });
      randomQuestionsIDs.shift();
      chooseQuestion();
    });
  });
};

const checkIfCorrect = (ans) => {
  if (ans.hasAttribute("data-correct")) {
    numberOfCorrectAnswers++;
  }
};

pickAnswer(randomQuestionsIDs);
