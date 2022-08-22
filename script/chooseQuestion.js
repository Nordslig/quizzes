let questNumber = 1;
let numberOfCorrectAnswers = 0;

const questionsIDs = gothicTheme.questionsEasy.map((e) => e.id);

const randomQuestionsIDs = questionsIDs.sort(() => Math.random() - 0.5);

const randomAnswers = gothicTheme.questionsEasy.forEach((e) => {
  const randomOrder = e.answers.sort(() => Math.random() - 0.5);
  return randomOrder;
});

const chooseQuestion = () => {
  console.log(numberOfCorrectAnswers);
  const currentQuestID = randomQuestionsIDs.find(
    (e) => e === randomQuestionsIDs[0]
  );
  const currentQuest = gothicTheme.questionsEasy.find(
    (e) => e.id === currentQuestID
  );

  currentQuest.answers.forEach((ans) => {
    if (ans.correct) return (correctAnswer = ans.text);
  });

  document.querySelector("h3.questionValue").textContent =
    currentQuest.question;
  document.querySelector(".questionNumber").textContent = questNumber;

  document.querySelectorAll(".answer").forEach((e) => {
    if (e.classList.contains("answer1")) {
      e.textContent = currentQuest.answers[0].text;
    } else if (e.classList.contains("answer2")) {
      e.textContent = currentQuest.answers[1].text;
    } else if (e.classList.contains("answer3")) {
      e.textContent = currentQuest.answers[2].text;
    } else {
      e.textContent = currentQuest.answers[3].text;
    }
  });
  document.querySelectorAll(".answer").forEach((ans) => {
    if (ans.textContent === correctAnswer) {
      ans.setAttribute("data-correct", 1);
    }
  });
  questNumber++;
};
