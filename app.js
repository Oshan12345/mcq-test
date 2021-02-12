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
  ["Programming", "Scripting", "Application", "None"],
  "Scripting"
);

const d = new Questions(
  "Html is ______ Language.",
  ["Mark", " Mark up", "HyperText Markup", "funny"],
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
    ["flower", " fruit", "sun", "don't know"],
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
      const div = document.createElement("div");
      div.innerHTML = `
 <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      name="choice"
      id="${element.replace(/\s+/g, "") + index}"
      value="${element}"
    />

    <label class="form-check-label" for="${
      element.replace(/\s+/g, "") + index
    }">
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

  console.log(questionAnswerded);
  // iff all the  question are answered then go for solution
  g.forEach((element, index) => {
    if (element.checked == true && questionAnswerded == 4) {
      const chosedOption = element.value;
      const correctOption = questionSet[answerSerial].answer;
      answerComparison(chosedOption, correctOption);
      answerSerial++;
    }
  });
}

function answerComparison(chosenAns, correctAns) {
  console.log("hi");
  chosenAns == correctAns
    ? console.log("ans is correct")
    : console.log(`ans is wrong. Correct Answer is ${correctAns}`);
}
