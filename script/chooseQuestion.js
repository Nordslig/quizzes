let questNumber = 1;
let points = 0;
let guildId = 1;

const questionsIDs = gothicTheme.questionsEasy.map((e) => e.id);

const randomQuestionsIDs = questionsIDs.sort(() => Math.random() - 0.5);

const randomAnswers = gothicTheme.questionsEasy.forEach((e) => {
  const randomOrder = e.answers.sort(() => Math.random() - 0.5);
  return randomOrder;
});

const chooseQuestion = () => {
  console.log(points);
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

  document.querySelectorAll(".answer").forEach((ans) => {
    if (ans.classList.contains("answer1")) {
      ans.textContent = currentQuest.answers[0].text;
    } else if (ans.classList.contains("answer2")) {
      ans.textContent = currentQuest.answers[1].text;
    } else if (ans.classList.contains("answer3")) {
      ans.textContent = currentQuest.answers[2].text;
    } else {
      ans.textContent = currentQuest.answers[3].text;
    }
    if (ans.textContent === correctAnswer) {
      ans.setAttribute("data-correct", 1);
    }
  });
  questNumber++;
};
