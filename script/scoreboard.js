const scoreboard = () => {
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

    for (let i = 0; i < newRow.children.length; i++) {
      const ele = newRow.children;
      ele[0].textContent = `${usersNumber}`;
      ele[1].textContent = getCookie();
    }
    // const cookieValue = getCookie();
    // console.log(cookieValue);

    document.querySelector("table tbody").appendChild(newRow);
  }
};

const getCookie = () => {
  let name = `name${usersNumber}=`;
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
