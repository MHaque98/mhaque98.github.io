const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerHTML = mostRecentScore;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const maxHighScores = 5;

const endBg = document.getElementById("end-screen");

const backgrounds = ["end-bg", "end-bg2", "end-bg3", "end-bg4"];

endBg.style.backgroundImage =
  "url(Assets/images/" +
  backgrounds[Math.floor(Math.random() * backgrounds.length)] +
  ".jpg)";

saveScore = e => {
  e.preventDefault();
  console.log("working");
  const score = {
    score: mostRecentScore,
    name: "Player"
  };
  console.log(score);
  highScores.push(score);

  highScores.sort((a, b) => b.score - a.score);

  highScores.splice(5);

  console.log(highScores);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};

document.getElementById("save").addEventListener("click", saveScore);

endSnd = document.getElementById("endSnd");
window.addEventListener("load", () => {
  console.log("All assets are loaded");
  endSnd.play();
});

AOS.init();
