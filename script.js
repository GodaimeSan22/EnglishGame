const questions = [
  {
    question: "What is the past tense of 'go'?",
    options: ["goed", "went", "goes"],
    answer: "went"
  },
  {
    question: "What is the plural of 'child'?",
    options: ["childs", "children", "childes"],
    answer: "children"
  },
  {
    question: "Which one is an adjective?",
    options: ["run", "happy", "quickly"],
    answer: "happy"
  }
];

let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  const buttons = document.querySelectorAll(".answers button");
  buttons.forEach((btn, index) => {
    btn.innerText = q.options[index];
  });
  document.getElementById("feedback").innerText = "";
}

function checkAnswer(button) {
  const selected = button.innerText;
  const correct = questions[current].answer;
  if (selected === correct) {
    document.getElementById("feedback").innerText = "✅ Correct! Enemy defeated!";
  } else {
    document.getElementById("feedback").innerText = "❌ Wrong! Enemy attacked!";
  }
  current = (current + 1) % questions.length;
  setTimeout(loadQuestion, 1500);
}

window.onload = loadQuestion;
