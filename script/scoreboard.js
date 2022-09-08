const scoreboard = () => {
  // if (getUNCookie() == "") {
  //   console.log("nope");
  //   document.cookie = "usersNumber=1;max-age=302400";
  // }
  if (!document.cookie) {
    alert("Nie masz rekordu!");
    document.location.href = "quizGothic.html";
  } else {
    const newRow = document.createElement("tr");
    const newDataCells = [];
    for (let i = 0; i < 5; i++) {
      newDataCells.unshift(document.createElement("td"));
    }

    newDataCells.forEach((e) => {
      newRow.appendChild(e);
    });

    for (let i = 0; i < usersNumber; i++) {
      for (let i = 0; i < newRow.children.length; i++) {
        const ele = newRow.children;
        ele[0].textContent = `${usersNumber}`;
        ele[1].textContent = getCookie("name");
        ele[2].textContent = getCookie("diff");
        ele[3].textContent = getCookie("points");
        ele[4].textContent = getCookie("date");
      }
    }
    usersNumber++;
    document.querySelector("table tbody").appendChild(newRow);
  }
};

const getCookie = (whatData) => {
  let cellData = `${whatData}${usersNumber}=`;
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  console.log(ca);

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(cellData) == 0) {
      return c.substring(cellData.length, c.length);
    }
  }
  return "";
};
