const questions = [
  {
    question: "Have you ever visited London?",
    options: ["Yes, I have.", "Yes, I do.", "Yes, I did."],
    answer: "Yes, I have."
  },
  {
    question: "Has she finished her homework?",
    options: ["Yes, she has.", "Yes, she did.", "Yes, she does."],
    answer: "Yes, she has."
  },
  {
    question: "They ___ already eaten.",
    options: ["have", "has", "had"],
    answer: "have"
  },
  {
    question: "He ___ never been to Japan.",
    options: ["have", "has", "is"],
    answer: "has"
  },
  {
    question: "Have we met before?",
    options: ["Yes, we did.", "Yes, we have.", "Yes, we do."],
    answer: "Yes, we have."
  }
];

let current = 0;
let playerHP = 3;
let enemyHP = 3;

function loadQuestion() {
  if (playerHP <= 0 || enemyHP <= 0) {
    endGame();
    return;
  }

  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const buttons = document.querySelectorAll(".answers button");
  buttons.forEach((btn, index) => {
    btn.innerText = q.options[index];
  });

  document.getElementById("player-hp").innerText = playerHP;
  document.getElementById("enemy-hp").innerText = enemyHP;
  document.getElementById("feedback").innerText = "";
}

function checkAnswer(button) {
  const selected = button.innerText;
  const correct = questions[current].answer;

  if (selected === correct) {
    enemyHP--;
    document.getElementById("feedback").innerText = "✅ Hit! Enemy lost 1 HP!";
  } else {
    playerHP--;
    document.getElementById("feedback").innerText = "❌ Miss! You lost 1 HP!";
  }

  current = (current + 1) % questions.length;

  setTimeout(loadQuestion, 1500);
}

function endGame() {
  const feedback = document.getElementById("feedback");
  const question = document.getElementById("question");

  if (playerHP <= 0) {
    question.innerText = "💀 You Lost!";
    feedback.innerText = "The enemy defeated you!";
    document.getElementById("enemy-img").src = "images/enemy1.png";
  } else if (enemyHP <= 0) {
    question.innerText = "🏆 You Won!";
    feedback.innerText = "Enemy defeated!";
    document.getElementById("enemy-img").src = "images/enemy1.png";
  }

  document.querySelector(".answers").style.display = "none";
  document.getElementById("restart-btn").style.display = "inline-block";
}

function restartGame() {
  playerHP = 3;
  enemyHP = 3;
  current = 0;

  document.querySelector(".answers").style.display = "block";
  document.getElementById("restart-btn").style.display = "none";
  document.getElementById("enemy-img").src = "images/enemy1.png";

  loadQuestion();
}

window.onload = loadQuestion;
