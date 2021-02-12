let correctAnswer = 0;
let wrongAnswer = 0;
let skippedAnswer = 1;

class Questions {
  constructor(question, options, answer) {
    (this.question = question),
      (this.options = options),
      (this.answer = answer);
  }
}

const a = new Questions("The average of 2,4,6", ["1", "2", "24", "6"], 6);
const b = new Questions(
  "JavaScript is ______ Language.",
  ["Programming", "Scripting", "Application", "None", "skip"],
  "Scripting"
);

const d = new Questions(
  "Html is ______ Language.",
  ["Mark", " Mark up", "HyperText Markup", "funny", "skip"],
  "HyperText Markup"
);

// {
//     question: "JavaScript is ______ Language.",
//     options: ["Programming", "Scripting", "Application", "None"],
//     answer: "Scripting",
//   },
//   {
//     question: "Python is ______ Language.",
//     options: ["Beautiful", "complex", "Wonderful", "no one is correct"],
//     answer: "Beautiful",
//   },
//   {
//     question: "Html is ______ Language.",
//     options: ["Mark", " Mark up", "HyperText Mark up"],
//     answer: "HyperText Mark up",
//   },

console.log(a);
const questionSet = [
  a,
  b,
  d,
  new Questions(
    "Rose is ______ .",
    ["flower", " fruit", "sun", "don't know", "skip"],
    "flower"
  ),
];

function setQuestions() {
  const allQuestions = document.getElementById("all-questions");
  //console.log(form, "ssss");

  questionSet.map((elem, index) => {
    const { question, options } = elem;

    let questionWithOptions = document.createElement("div");

    questionWithOptions.innerHTML = `  
   <div > 
    <h1>${question}</h1>  

    <form id="question${index}" name="my-question"></form>
   </div>`;

    allQuestions.appendChild(questionWithOptions);
    const multipleOptions = document.getElementById(`question${index}`);

    options.forEach((element, index) => {
      id = element.replace(/\s+/g, "") + index + Math.random() * Math.random();
      console.log("id", id);
      const div = document.createElement("div");
      div.innerHTML = `
 <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      name="choice"
      id="${id}"
      value="${element}"
    />

    <label class="form-check-label" for="${id}">
      ${element}
    </label>
  </div>
`;
      multipleOptions.appendChild(div);
    });
  });
}
setQuestions();

function getAns() {
  var g = document.getElementsByName("choice");
  let answerSerial = 0;
  // first of all I need to ensure if all questions are answered.
  let questionAnswerded = 0;
  g.forEach((element, index) => {
    if (element.checked == true) {
      questionAnswerded++;
    }
  });

  //console.log(questionAnswerded);
  // if all the  question are answered then go for solution
  g.forEach((element, index) => {
    if (element.checked == true && questionAnswerded == 4) {
      answerComparison(element, answerSerial);
      answerSerial++;
    }
  });
  countingSkipOption();
  totalMarksObtained();
}

function answerComparison(chosenAns, answerSerial) {
  const chosedOption = chosenAns.value;
  const correctOption = questionSet[answerSerial].answer;

  chosedOption == correctOption
    ? correctAnsStyle(chosenAns)
    : wrongAnsStyle(chosenAns, correctOption, answerSerial);
}

function correctAnsStyle(chosenAns) {
  correctAnswer++;
  // console.log(chosenAns);
  chosenAns.style.backgroundColor = "green";
}

function wrongAnsStyle(chosenAns, correctOption, answerSerial) {
  wrongAnswer++;
  // console.log(correctOption);
  chosenAns.style.backgroundColor = "red";
  giveCorrectAns(answerSerial);
}

//function for indicating correct ans in case any one select worn answer
function giveCorrectAns(number) {
  const g = document.getElementsByName("choice");
  g.forEach((element, index) => {
    if (element.checked == false) {
      // console.log(element, " ", index);
      const nonChosenOption = element.value;
      const correctOption = questionSet[number].answer;
      if (nonChosenOption == correctOption) {
        element.style.backgroundColor = "green";
      }
    }
  });
}

function countingSkipOption() {
  let number = 0;

  const g = document.getElementsByName("choice");
  g.forEach((element, index) => {
    if (element.checked == true && element.value == ("skip" || "Skip")) {
      number++;
      // console.log(element, " ", index);
      //   const skipOption = element.value;
      //   if (skipOption == "skip" || skipOption == "Skip") {
      //     console.log(skippedAnswer, "skippevvvvvvvvvvvvvvvvvvvvvvvvv");
      //     skippedAnswer++;
      //   }
    }
  });
  skippedAnswer = number;
}

function totalMarksObtained() {
  const markForCorrectAns = correctAnswer * 1.25;
  const markForWrongAns = (wrongAnswer - skippedAnswer) * 0.25;

  console.log(wrongAnswer - skippedAnswer, "wrong");
  console.log(correctAnswer, "right");
  console.log(skippedAnswer, "skipped");
  const obtainedMarks = markForCorrectAns - markForWrongAns;

  console.log("obtained marks :", obtainedMarks);
}
