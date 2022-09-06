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
    // console.log(cookiesArray);
    // const aaa = cookiesArray;
    for (let i = 0; i < newRow.children.length; i++) {
      const ele = newRow.children;
      ele[0].textContent = `${usersNumber}`;
      // ele.textContent = cookiesArray[i];
      // console.log(aaa);
    }
    const cookieValue = getCookie();
    console.log(cookieValue);

    document.querySelector("table tbody").appendChild(newRow);
  }
};

const getCookie = () => {
  let name = `name${usersNumber}=`;
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    // console.log(c.substring());
    while (c.charAt(0) == "") {
      c = c.substring(0);
    }
    // console.log(c.substring(name.length, c.length));
    if (c.indexOf(name) == 1) {
      return c.substring(name.length + 1, c.length);
    }
  }
  return "";
};
