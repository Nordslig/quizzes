let guild = document.querySelector("span.guild");
let quote = document.querySelector("blockquote.quote");
let pointsNumber = document.querySelector("span.points");
let aboutGuild = document.querySelector("p.aboutGuild");

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
