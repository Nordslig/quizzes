const showAnswers = (currentQuest, IDsArr) => {
  const texts = [...currentQuest.answers];

  let i = 0;

  while (document.querySelector(".answers").hasChildNodes()) {
    document
      .querySelector(".answers")
      .removeChild(document.querySelector(".answers").firstChild);
  }

  texts.forEach((ele) => {
    const li = document.createElement("li");
    li.textContent = ele.text;
    document.querySelector("div.qAndA ul").appendChild(li);
  });

  document.querySelectorAll(".answers *").forEach((ans) => {
    console.log(currentQuest.answers[i].text);
    ans.textContent = currentQuest.answers[i].text;
    i++;
    if (ans.textContent === correctAnswer) {
      ans.setAttribute("data-correct", 1);
    }
  });
  clickFun(IDsArr);
};

const clickFun = (IDsArr) => {
  const answers = document.querySelectorAll("div.qAndA li");

  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      checkIfCorrect(answer);
      answers.forEach((ans) => {
        ans.removeAttribute("data-correct");
      });
      IDsArr.shift();
      if (questNumber <= 10) {
        chooseQuestion(IDsArr);
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
