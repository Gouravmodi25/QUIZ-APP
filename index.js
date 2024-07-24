const questions = [
  {
    question: "Which is the largest animal in the world",
    answeres: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the samllest country in the world",
    answeres: [
      { text: "Vatican City", correct: true },
      { text: "Butan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri Lanka", correct: false },
    ],
  },
  {
    question: "Which is the largest dessert in the world",
    answeres: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent  in the world",
    answeres: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Artic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Where is Ram Mandir situated",
    answeres: [
      { text: "Ayodhya", correct: true },
      { text: "Varanasi", correct: false },
      { text: "Kashi", correct: false },
      { text: "Janakpur", correct: false },
    ],
  },
  {
    question: "Who is The Prime Minister of India",
    answeres: [
      { text: "Nitish modi", correct: false },
      { text: "Gourav Modi", correct: false },
      { text: "Narendra Modi", correct: true },
      { text: "Amit shah", correct: false },
    ],
  },
  {
    question: "Gir National Park in Gujarat is famous for",
    answeres: [
      { text: "Tiger", correct: false },
      { text: "Lion", correct: true },
      { text: "Zebra", correct: false },
      { text: "Gorrila", correct: false },
    ],
  },
  {
    question: "Who composed the Ramayan",
    answeres: [
      { text: "Rishi Vishwamitra", correct: false },
      { text: "Rishi Vyasa", correct: false },
      { text: "Rishi Vasishta", correct: false },
      { text: "Rishi Valmiki", correct: true },
    ],
  },
  {
    question: "Which is The National Tree of India",
    answeres: [
      { text: "Banayan Tree", correct: true },
      { text: "Peepal Tree", correct: false },
      { text: "Neem Tree", correct: false },
      { text: "Coconut Tree", correct: false },
    ],
  },
  {
    question: "Which is The National Animal of India",
    answeres: [
      { text: "Bull", correct: false },
      { text: "Tiger", correct: true },
      { text: "Cow", correct: false },
      { text: "Lion", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answereElement = document.getElementById("answereButton");
const nextButton = document.getElementById("nextButton");

let currentQuesIndex = 0;
let score = 0;
startQuiz();
function startQuiz() {
  resetState();
  currentQuesIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuesIndex];
  let questionNo = currentQuesIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answeres.forEach((answere) => {
    let button = document.createElement("button");
    button.innerHTML = answere.text;
    button.classList.add("answereBnt");
    answereElement.appendChild(button);
    if (answere.correct) {
      button.dataset.correct = answere.correct;
    }
    button.addEventListener("click", selectAnswere);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answereElement.firstChild) {
    answereElement.removeChild(answereElement.firstChild);
  }
}

function selectAnswere(e) {
  const selectbtn = e.target;
  const Iscorrect = selectbtn.dataset.correct === "true";
  if (Iscorrect) {
    selectbtn.classList.add("correct");
    score++;
  } else {
    selectbtn.classList.add("incorrect");
  }
  Array.from(answereElement.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextbtn() {
  currentQuesIndex++;
  if (currentQuesIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuesIndex < questions.length) {
    handleNextbtn();
  } else {
    startQuiz();
  }
});
