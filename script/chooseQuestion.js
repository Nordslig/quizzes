const randomizeAnswers = (arr) => {
  arr.sort(() => Math.random() - 0.5);
};

const chooseQuestion = () => {
  let questNumber = 1;
  let i = 0;

  let currentQuest =
    gothicTheme.questionsEasy[
      Math.floor(Math.random() * gothicTheme.questionsEasy.length)
    ];

  document.querySelector("h3.questionValue").textContent =
    currentQuest.question;
  document.querySelector(".questionNumber").textContent = questNumber;

  randomizeAnswers(currentQuest.answers);

  document.querySelectorAll(".answer").forEach((e) => {
    e.textContent = currentQuest.answers[i].text;
    // if(questionsArrayNewOrder[i].correct)
    i++;
  });
  questNumber++;
  removeQuestFromArray(currentQuest.id);
};

const removeQuestFromArray = (currentQuest) => {
  // console.log(gothicTheme.questionsEasy);
  const lastQuestion = gothicTheme.questionsEasy.find(
    (ele) => ele.id === currentQuest
  );
  console.log(lastQuestion);
  // if (currentQuest === ele.id) {
  //   console.log(gothicTheme.questionsEasy);
  // }
  gothicTheme.questionsEasy.find((ele) => {
    // console.log(lastQuestion.id);
    // console.log(ele.id);
    if (ele.id === lastQuestion.id) {
      gothicTheme.questionsEasy.slice(1, 1);
      console.log(gothicTheme.questionsEasy);
    }
  });
};
