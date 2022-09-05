const scoreboard = () => {
  console.log("tak");
  if (!document.cookie) {
    alert("Nie masz rekordu!");
    document.location.href = "quizGothic.html";
  } else {
    const newRow = document.createElement("tr");
    const newDataCells = [];
    for (let i = 0; i < 5; i++) {
      newDataCells.unshift(document.createElement("td"));
    }
    console.log(newRow);
    document.querySelector("table").appendChild(newRow);
  }
};
