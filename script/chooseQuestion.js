const chooseQuestion = (IDsArr) => {
  const currentQuestID = IDsArr.find((e) => e === IDsArr[0]);

  const currentQuest = currentDiff.find((e) => e.id === currentQuestID);

  currentQuest.answers.forEach((ans) => {
    if (ans.correct) return (correctAnswer = ans.text);
  });

  document.querySelector("h3.questionValue").textContent =
    currentQuest.question;
  document.querySelector(".questionNumber").textContent = questNumber;

  questNumber++;

  showAnswers(currentQuest, IDsArr);
};
