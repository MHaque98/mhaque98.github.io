const bgm = document.getElementById("bgm");
const volUp = document.getElementById("volUp");
const volMute = document.getElementById("volMute");

const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

highScoresList.innerHTML = highScores
  .map(score => {
    return `<tr><td>${score.name}</td><td>${score.score}</td></tr>`;
  })
  .join("");

window.addEventListener("load", () => {
  console.log("All assets are loaded");
  bgm.play();
});
volUp.addEventListener("click", () => {
  volUp.style.display = "none";
  volMute.style.display = "block";
  bgm.pause();
});
volMute.addEventListener("click", () => {
  volMute.style.display = "none";
  volUp.style.display = "block";
  bgm.play();
});
AOS.init();
