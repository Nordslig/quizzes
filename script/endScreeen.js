let usersNumber = 1;

let guild = document.querySelector("span.guild");
let quote = document.querySelector("blockquote.quote");
let pointsNumber = document.querySelector("span.points");
let aboutGuild = document.querySelector("p.aboutGuild");

const cDate = new Date();
const cDay = cDate.getDate();
const cMonth = cDate.getMonth() + 1;
const cYear = cDate.getFullYear();
const recordDate = `${cDay}:${cMonth}:${cYear}`;

const endScreen = () => {
  document.querySelector(".qAndA").classList.toggle("nvisible");
  document.querySelector(".endView").classList.toggle("nvisible");
  pointsNumber.textContent = points;
  if (guildId === 1) {
    guild.textContent = currentDiffGuilds[0].guildName;
    quote.textContent = currentDiffGuilds[0].quoteText;
    aboutGuild.textContent = currentDiffGuilds[0].longDesc;
  } else if (guildId === 2) {
    guild.textContent = currentDiffGuilds[1].guildName;
    quote.textContent = currentDiffGuilds[1].quoteText;
    aboutGuild.textContent = currentDiffGuilds[1].longDesc;
  } else {
    guild.textContent = currentDiffGuilds[2].guildName;
    quote.textContent = currentDiffGuilds[2].quoteText;
    aboutGuild.textContent = currentDiffGuilds[2].longDesc;
  }
};
document.querySelector(".showSaveForm").addEventListener("click", () => {
  document.querySelector(".wrap").style.filter = "blur(2px)";
  document.querySelector(".saveDataForm").classList.toggle("nvisible");
  document
    .querySelector(".saveData")
    .addEventListener("click", () => saveData());
});

const saveData = () => {
  const name = document.querySelector(".iptName").value;
  if (!name || name.length <= 4) {
    console.error("NIE DA SIĘ");
  } else {
    const tempName =
      (document.cookie = `name${usersNumber}=${name};max-age=302400`);
    const tempPoints =
      (document.cookie = `points${usersNumber}=${points};max-age=302400`);
    const tempDiff =
      (document.cookie = `diff${usersNumber}=${difficultyID};max-age=302400`);
    const tempDate =
      (document.cookie = `date${usersNumber}=${recordDate};max-age=302400`);

    document.querySelector(".wrap").style.filter = "none";
    document
      .querySelectorAll(".saveDataForm, .endView, .scoreboard")
      .forEach((ele) => ele.classList.toggle("nvisible"));
    scoreboard();
  }
};

// const a = getCookie(document.cookie);
// td.innerHTML = getCookie();
// const cookieValue = document.cookie
//   .split("; ")
//   .find((row) => row.startsWith(`diff${usersNumber}`))
//   ?.split("=")[1];
// console.log(cookieValue);
// document.querySelectorAll(".dataFromCookies *").forEach((td) => {
//   if () {
//   }
//   td.textContent = document.cookie
//     .split("; ")
//     .find((row) => row.startsWith(`name${usersNumber}`))
//     ?.split("=")[1];
// });
