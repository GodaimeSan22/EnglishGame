
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
  },
  {
    question: "Have you ever tried sushi?",
    options: ["Yes, I have.", "No, I didn't.", "Yes, I do."],
    answer: "Yes, I have."
  },
  {
    question: "Has Tom finished reading the book?",
    options: ["Yes, he has.", "Yes, he did.", "No, he haven't."],
    answer: "Yes, he has."
  },
  {
    question: "She ___ just left the office.",
    options: ["have", "has", "had"],
    answer: "has"
  },
  {
    question: "Have they seen that movie yet?",
    options: ["Yes, they have.", "Yes, they did.", "No, they don't."],
    answer: "Yes, they have."
  },
  {
    question: "I ___ never been so tired.",
    options: ["have", "has", "am"],
    answer: "have"
  },
  {
    question: "Has John ever been to New York?",
    options: ["Yes, he has.", "Yes, he did.", "No, he isn't."],
    answer: "Yes, he has."
  },
  {
    question: "Have you done your homework?",
    options: ["Yes, I have.", "Yes, I did.", "No, I don't."],
    answer: "Yes, I have."
  },
  {
    question: "She ___ already cleaned her room.",
    options: ["have", "has", "had"],
    answer: "has"
  },
  {
    question: "Have we started the project yet?",
    options: ["Yes, we have.", "Yes, we did.", "No, we don't."],
    answer: "Yes, we have."
  },
  {
    question: "They ___ never visited Paris.",
    options: ["have", "has", "had"],
    answer: "have"
  },
  {
    question: "Has he called you this morning?",
    options: ["Yes, he has.", "Yes, he did.", "No, he doesn't."],
    answer: "Yes, he has."
  },
  {
    question: "Have you seen my keys?",
    options: ["Yes, I have.", "Yes, I did.", "No, I don't."],
    answer: "Yes, I have."
  },
  {
    question: "We ___ just arrived.",
    options: ["have", "has", "had"],
    answer: "have"
  },
  {
    question: "Have they ever tried skydiving?",
    options: ["Yes, they have.", "No, they didn't.", "Yes, they do."],
    answer: "Yes, they have."
  },
  {
    question: "She ___ lived here for five years.",
    options: ["have", "has", "had"],
    answer: "has"
  },
  {
    question: "Have you read that book?",
    options: ["Yes, I have.", "Yes, I did.", "No, I don't."],
    answer: "Yes, I have."
  },
  {
    question: "Has your brother finished his work?",
    options: ["Yes, he has.", "No, he didn't.", "Yes, he does."],
    answer: "Yes, he has."
  },
  {
    question: "I ___ never eaten sushi before.",
    options: ["have", "has", "am"],
    answer: "have"
  },
  {
    question: "Have you visited the museum?",
    options: ["Yes, I have.", "Yes, I did.", "No, I don't."],
    answer: "Yes, I have."
  },
  {
    question: "Has the team won the match?",
    options: ["Yes, they have.", "No, they didn't.", "Yes, they do."],
    answer: "Yes, they have."
  }
];

let current = 0;
let playerHP = 10;
let enemyHP = 25;

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
