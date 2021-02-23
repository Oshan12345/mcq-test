let correctAnswer = 0;
let wrongAnswer = 0;

let notAnswered = 0;
class Questions {
  constructor(question, options, answer) {
    (this.question = question),
      (this.options = options),
      (this.answer = answer);
  }
}

const a = new Questions(
  "Which of the following is true about variable naming conventions in JavaScript?",
  [
    "You should not use any of the JavaScript reserved keyword as variable name.",
    "JavaScript variable names should not start with a numeral (0-9).",

    "Both of the above.",
    "none",
  ],
  "Both of the above."
);

const b = new Questions(
  "JavaScript is ______ Side Scripting Language.",
  ["Browser", "ISP", "application", "None"],
  "Browser"
);

const c = new Questions(
  "Html is ______ Language.",
  ["Mark", " Mark up", "HyperText Markup", "none"],
  "HyperText Markup"
);
const d = new Questions(
  "Which built-in method calls a function for each element in the array?",
  ["while()", "loop()", "forEach()", "none"],
  "forEach()"
);
const e = new Questions(
  "Which of the following function of Array object joins all elements of an array into a string?",
  ["concat()", "join()", " pop()", "push()"],
  "join()"
);

// for new question i need to change the value for "questionAnswerded" below in getAns() function
const questionSet = [a, b, c, d, e];

function setQuestions() {
  let elem = document.getElementById("reset-btn");
  const previousAns = localStorage.getItem("answered");
  const totalMarks = localStorage.getItem("marks");
  if (previousAns != null) {
    elem.style.display = "block";
    let submitbtn = document.getElementById("answer-submit-btn");
    submitbtn.style.display = "none";
    const questionSection = document.getElementById("all-questions");
    questionSection.innerHTML = JSON.parse(previousAns);
    console.log(
      (document.getElementById("result-div").innerHTML = JSON.parse(totalMarks))
    );
  } else {
    let mcqId = 0;
    const allQuestions = document.getElementById("all-questions");

    questionSet.forEach((element, index) => {
      const { question, options } = element;
      let questionWithOptions = document.createElement("div");
      questionWithOptions.innerHTML = `  
   <div class="mt-4"> 
    <h5 class="question">${index + 1} : ${question}</h5>  
    <div>
    <form id="question${index}" name="my-question" class="question-options"></form></div>
   </div>`;
      allQuestions.appendChild(questionWithOptions);
      const multipleOptions = document.getElementById(`question${index}`);

      options.forEach((element, index) => {
        mcqId++;

        let option = element.trim();
        // code for Capitalizing the first letter of a string
        option = option[0].toUpperCase() + option.substring(1).toLowerCase();

        let id = element.replace(/\s+/g, "") + mcqId;

        multipleOptions.innerHTML += `
    <input
      class="form-check-input"
      type="radio"
      name="choice"
      id="${id}"
      value="${option}"
     />
    <label class="form-check-label " for="${id}"  style="margin-right: 10px;">
      ${option}
    </label>
`;
      });
    });
    elem.style.display = "none";
  }
}

setQuestions();

//function for manual and auto submit using recursive method

function autoSubmit(num = 0) {
  let number = num;

  const optionSets = document.getElementsByClassName("question-options");

  if (number > optionSets.length - 1) {
    let submitbtn = document.getElementById("answer-submit-btn");

    submitbtn.classList.toggle("submitted");

    const x = document.getElementById("all-questions");

    localStorage.setItem("answered", JSON.stringify(x.innerHTML));

    window.scroll(0, 0);
    totalMarksObtained();
    let elem = document.getElementById("reset-btn");
    elem.style.display = "block";
    return;
  } else {
    const perQuestionOptions = optionSets[number];
    const correctOption = questionSet[number].answer.toLowerCase().trim();

    for (let i = 0; i < perQuestionOptions.length; i++) {
      const element = perQuestionOptions[i];
      const nonChoosedOptions = element.value.toLowerCase().trim();

      if (
        element.checked === true &&
        element.value.toLowerCase().trim() !== correctOption
      ) {
        wrongAnswer += 1;
        element.style.backgroundColor = "#FF0000";
      }

      if (
        element.checked === true &&
        element.value.toLowerCase().trim() === correctOption
      ) {
        correctAnswer++;
        element.style.backgroundColor = "#5EFF33";
      } else if (
        element.checked === false &&
        correctOption === nonChoosedOptions
      ) {
        element.style.backgroundColor = "blue";
        notAnswered++;
      }
    }
    autoSubmit((number += 1));
  }
}

function totalMarksObtained() {
  const markForCorrectAns = correctAnswer * 1.25;
  const markForWrongAns = wrongAnswer * 0.25;
  const obtainedMark = markForCorrectAns - markForWrongAns;
  document.getElementById("right").innerText = correctAnswer;
  document.getElementById("wrong").innerText = wrongAnswer;
  document.getElementById("marks-obtained").innerText = obtainedMark;
  const result = document.getElementById("result-div");
  localStorage.setItem("marks", JSON.stringify(result.innerHTML));
}

//function for displaying time
const displayTime = () => {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let amPm = h;
  h = h % 12;
  h = h ? h : 12; // the hour '0' should be '12'
  document.getElementById("display-time").innerHTML =
    h + ":" + m + ":" + s + " " + (amPm >= 12 ? "PM" : "AM");
};

const reset = (id) => {
  let elem = document.getElementById(id);
  elem.style.display = "none";
  localStorage.removeItem("answered");
  const questionSection = document.getElementById("all-questions");
  questionSection.innerHTML = "";
  document.getElementById("result-div").innerHTML = "";
  setQuestions();
  window.location.reload();
};

window.onload = () => {
  //this function is for submitting answer automatically after certain time. Can be used if necessary
  // const previousAns = localStorage.getItem("answered");
  // const submitbtn = document.getElementById("answer-submit-btn");
  // const classItems = submitbtn.classList;
  // //after 2 minutes answer will be submitted automatically
  // if (previousAns == null) {
  //   setTimeout(() => {
  //     if (classItems.contains("submitted") != true) {
  //       autoSubmit();
  //       submitbtn.style.display = "none";
  //       console.log("answer is auto submitted");
  //     }
  //   }, 200000);
  // }

  //this function is for updating time automatically
  setInterval(displayTime, 500);
};
