const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionBox = document.getElementById("box");
const qCounter = document.getElementById("questionCounter");
const scores = document.getElementById("score");
let currentQuestions = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Who is this character from the Metal Gear Solid Franchise?",
    choice1: "Solid Snake",
    choice2: "The Boss",
    choice3: "Liquid Snake",
    choice4: "Big Boss",
    box: '<img class = "q-image w-100" src="Assets/images/metalgear.gif">',
    answer: 4
  },
  {
    question: "Which game franchise is this character from?",
    choice1: "Crash Bandicoot",
    choice2: "Spyro",
    choice3: "Kingdom Hearts",
    choice4: "Ratchet & Clank",
    box: '<img class = "q-image w-100" src="Assets/images/aku1.jpg">',
    answer: 1
  },
  {
    question: "To whom does this sword belong to?",
    choice1: "War",
    choice2: "Cloud",
    choice3: "Gladiolus",
    choice4: "Noctis",
    box: '<img class = "q-image" src="Assets/images/buster.gif">',
    answer: 2
  },
  {
    question: "Who is this character?",
    choice1: "Samurai Sam",
    choice2: "Link",
    choice3: "Raiden",
    choice4: "Big Boss",
    box: '<img class = "q-image w-100" src="Assets/images/mgr.gif">',
    answer: 3
  },
  {
    question: "Which game is this image from?",
    choice1: "Watchdogs",
    choice2: "Nier Automata",
    choice3: "Assassins Creed Syndicate",
    choice4: "Horizon Zero Dawn",
    box: '<img class = "q-image w-100" src="Assets/images/hzd.jpg">',
    answer: 4
  },
  {
    question: "Who is this character?",
    choice1: "Doom Slayer",
    choice2: "Soldier 76",
    choice3: "Master Chief",
    choice4: "Marcus Fenix",
    box: '<img class = "q-image w-100" src="Assets/images/doom.jpg">',
    answer: 1
  },
  {
    question: "Which Franchise are these blades found in?",
    choice1: "God of War",
    choice2: "Prince of Persia",
    choice3: "Darksiders",
    choice4: "Warhammer",
    box: '<img class = "q-image w-100" src="Assets/images/gow.gif">',
    answer: 1
  },
  {
    question: "Who is this character?",
    choice1: "Vergil",
    choice2: "Nero",
    choice3: "Sparda",
    choice4: "Dante",
    box: '<img class = "q-image w-100" src="Assets/images/dmc.gif">',
    answer: 2
  },
  {
    question: "Who is this character?",
    choice1: "Zelda",
    choice2: "Luigi",
    choice3: "Mario",
    choice4: "Link",
    box: '<img class = "q-image w-100" src="Assets/images/zelda.jpg">',
    answer: 4
  },
  {
    question: "When was this legenday game released?",
    choice1: "2006",
    choice2: "2007",
    choice3: "2008",
    choice4: "2009",
    box: '<img class = "q-image w-100" src="Assets/images/mw2.jpg">',
    answer: 4
  },
  {
    question: "Who was the main antagonist of FFXV?",
    choice1: "Bahamut, God of War",
    choice2: "Sephiroth",
    choice3: "Ardyn Izunia",
    choice4: "Ifrit, God of Fire",
    box: '<img class = "q-image w-100" src="Assets/images/ffxv.jpg">',
    answer: 3
  },
  {
    question: 'Who is titled "The World Eater" in Skyrim?',
    choice1: "Alduin",
    choice2: "Akatosh",
    choice3: "Paarthurnax",
    choice4: "Kyne",
    box: '<img class = "q-image w-100" src="Assets/images/skyrim.jpg">',
    answer: 1
  },
  {
    question: "Which one of these games take place during the Wild West era?",
    choice1: "Grand Theft Auto",
    choice2: "Red Dead Redemption",
    choice3: "Sleeping Dogs",
    choice4: "Monster Hunter",
    box: '<img class = "q-image w-100" src="Assets/images/wildwest.jpg">',
    answer: 2
  },
  {
    question: "Which franchise would you find this being?",
    choice1: "Dragon Ball Z",
    choice2: "Final Fantasy",
    choice3: "Dragon Quest",
    choice4: "Monster Hunter",
    box: '<img class = "q-image w-100" src="Assets/images/nergigante.jpg">',
    answer: 4
  },
  {
    question: "Who does his quote belong to?",
    choice1: "Kratos",
    choice2: "Vergil",
    choice3: "Scorpion",
    choice4: "Baraka",
    box: '<img class = "q-image w-100" src="Assets/images/mk.png">',
    answer: 3
  },
  {
    question: "Who does his quote belong to?",
    choice1: "Ezio Auditore",
    choice2: "Altair ibn la-Ahad",
    choice3: "Edward Kenway",
    choice4: "Connor",
    box: '<img class = "q-image w-100" src="Assets/images/assassins.png">',
    answer: 1
  },
  {
    question: "Which game is this soundtrack from?",
    choice1: "Hollow Knight",
    choice2: "Ori & the Blind Forest",
    choice3: "Limbo",
    choice4: "Firewatch",
    box:
      '<img class = "q-image w-75" src="Assets/images/circle.gif"><audio id = "audio" controls autoplay > <source src="Assets/audio/LightofNibel.mp3" type="audio/mpeg"></audio>',
    answer: 2
  },
  {
    question: "Which game is this soundtrack from?",
    choice1: "Morrowind",
    choice2: "Skyrim",
    choice3: "Shadow of Mordor",
    choice4: "Shadow of the Colossus",
    box:
      '<img class = "q-image w-75" src="Assets/images/circle2.gif"><audio id = "audio" controls autoplay > <source src="Assets/audio/skyrim.mp3" type="audio/mpeg"></audio>',
    answer: 2
  },
  {
    question: "Which franchise is this soundtrack from?",
    choice1: "Uncharted",
    choice2: "Tomb Raider",
    choice3: "Destiny",
    choice4: "The Last Guardian",
    box:
      '<img class = "q-image w-100" src="Assets/images/circle3.gif"><audio id = "audio" controls autoplay loop > <source src="Assets/audio/uncharted.mp3" type="audio/mpeg"></audio>',
    answer: 1
  },
  {
    question: "Which franchise is this soundtrack from?",
    choice1: "Doom",
    choice2: "Crysis",
    choice3: "Mass Effect",
    choice4: "Halo",
    box:
      '<img class = "q-image w-100" src="Assets/images/circle4.gif"><audio id = "audio" controls autoplay loop > <source src="Assets/audio/halo.mp3" type="audio/mpeg"></audio>',
    answer: 4
  },
  {
    question: "Which game is this snippet from?",
    choice1: "Horizon Zero Dawn",
    choice2: "Baldurs Gate",
    choice3: "The Witcher 3",
    choice4: "God of War",
    box:
      '<video id="video" controls autoplay> <source src="Assets/videos/geralt.mp4" type="video/mp4"><source src="mov_bbb.ogg" type="video/ogg"> Your browser does not support HTML5 video.</video>',
    answer: 3
  },
  {
    question: "Which game is this trailer from?",
    choice1: "Advanced Warfare",
    choice2: "Portal 2",
    choice3: "Black Ops III",
    choice4: "Titanfall 2",
    box:
      '<video id="video" controls autoplay> <source src="Assets/videos/titanfall.mp4" type="video/mp4"><source src="mov_bbb.ogg" type="video/ogg"> Your browser does not support HTML5 video.</video>',
    answer: 4
  }
];

//CONSTANTS
const correctBonus = 1;
const maxQuestions = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestions();
};

getNewQuestions = () => {
  if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("endPage.html");
  }

  questionCounter++;
  qCounter.innerHTML = `${questionCounter} of ${maxQuestions}`;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerHTML = currentQuestion.question;
  box.innerHTML = currentQuestion.box;
  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerHTML = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};
choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;

    let answer = currentQuestion.answer;
    let choiceText = currentQuestion["choice" + answer];

    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(correctBonus);
    }

    console.log(answer);
    console.log(choiceText);
    console.log(selectedChoice);
    console.log(selectedAnswer);

    selectedChoice.parentElement.classList.add(classToApply);
    document.getElementById(answer).classList.add("correct");

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      document.getElementById(answer).classList.remove("correct");
      getNewQuestions();
    }, 1200);
  });
});

incrementScore = num => {
  score += num;
  scores.innerHTML = score;
};

startGame();
AOS.init();
