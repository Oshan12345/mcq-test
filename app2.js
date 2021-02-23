// // these are practice codes. main code file is app.js
// //here mcq is solved by 2 different logics.

// let correctAnswer = 0;
// let wrongAnswer = 0;
// let skippedAnswer = 0;
// let notAnswered = 0;
// //publications[0].toUpperCase() + publications.substring(1).toLowerCase();
// class Questions {
//   constructor(question, options, answer) {
//     (this.question = question),
//       (this.options = options),
//       (this.answer = answer);
//   }
// }

// const a = new Questions(
//   "The average of 2,4,6",
//   ["1", "2", "24", "7", "none"],
//   "none"
// );

// const b = new Questions(
//   "JavaScript is ______ Language.",
//   ["programming", "Scripting", "application", "None", "skip"],
//   "Scripting"
// );

// const d = new Questions(
//   "Html is ______ Language.",
//   ["Mark", " Mark up", "HyperText Markup", "none", "skip"],
//   "HyperText Markup"
// );
// const e = new Questions(
//   "Excel is a _____",
//   ["Database", "worksheet", "programming language", "none"],
//   "worksheet"
// );
// const f = new Questions(
//   "Padma is a _____",
//   ["river", "country", "programming language", "none"],
//   "river"
// );

// // for new question i need to change the value for "questionAnswerded" below in getAns() function
// const questionSet = [
//   a,
//   b,
//   d,
//   new Questions(
//     "Rose is ______ .",
//     ["flower", " fruit", "sun", "none", "skip"],
//     "Flower  "
//   ),
//   e,
//   f,
// ];

// function setQuestions() {
//   const allQuestions = document.getElementById("all-questions");

//   questionSet.forEach((element, index) => {
//     const { question, options } = element;
//     let questionWithOptions = document.createElement("div");

//     questionWithOptions.innerHTML = `
//    <div class="mt-3">
//     <h5 class="question">${index + 1} : ${question}</h5>
//     <div>
//     <form id="question${index}" name="my-question" class="question-options"></form></div>
//    </div>`;
//     allQuestions.appendChild(questionWithOptions);

//     const multipleOptions = document.getElementById(`question${index}`);

//     options.forEach((element, index) => {
//       let option = element.trim();
//       // new code for Capitalizing the first letter of a string
//       option = option[0].toUpperCase() + option.substring(1).toLowerCase();
//       //
//       id =
//         element.replace(/\s+/g, "") +
//         index +
//         Math.random() * Math.random() +
//         index;

//       multipleOptions.innerHTML += `

//     <input
//       class="form-check-input"
//       type="radio"
//       name="choice"
//       id="${id}"
//       value="${option}"

//     />

//     <label class="form-check-label " for="${id}"  style="margin-right: 10px;">
//       ${option}
//     </label>

// `;
//     });
//   });
// }
// setQuestions();

// function getAns() {
//   var g = document.getElementsByName("choice");
//   let answerSerial = 0;
//   // first of all I need to ensure if all questions are answered.
//   let questionAnswerded = 0;
//   g.forEach((element, index) => {
//     if (element.checked == true) {
//       questionAnswerded++;
//     }
//   });

//   // for new question i need to change the value for "questionAnswerded" below
//   if (questionAnswerded != 6) {
//     console.log("sorry, you need to ans all the questions.");
//     return;
//   }

//   // if all the  question are answered then go for solution
//   g.forEach((element, index) => {
//     if (element.checked == true && questionAnswerded == 6) {
//       answerComparison(element, answerSerial);
//       answerSerial++;
//     }
//   });
//   // countingSkipOption();
//   notAnsweredOptions();
//   totalMarksObtained(false);

//   let submitBtn = document.getElementById("answer-submit-btn");
//   submitBtn.style.display = "none";
// }

// //function for ans comparison
// function answerComparison(chosenAns, answerSerial) {
//   const chosedOption = chosenAns.value.toLowerCase().trim();
//   const correctOption = questionSet[answerSerial].answer.toLowerCase().trim();

//   chosedOption == correctOption
//     ? correctAnsStyle(chosenAns)
//     : wrongAnsStyle(chosenAns, correctOption, answerSerial);
// }

// function correctAnsStyle(chosenAns) {
//   correctAnswer++;
//   chosenAns.style.backgroundColor = "#5EFF33";
// }

// function wrongAnsStyle(chosenAns, correctOption, answerSerial) {
//   wrongAnswer++;
//   chosenAns.style.backgroundColor = "#FF0000";
//   giveCorrectAns(answerSerial);
// }

// function giveCorrectAns(number) {
//   console.log(number);
//   const correctOption = questionSet[number].answer.toLowerCase().trim();
//   const optionSets = document.getElementsByClassName("question-options");
//   const x = optionSets[number];

//   for (let i = 0; i < x.length; i++) {
//     const element = x[i];
//     const nonChoosedOptions = element.value.toLowerCase().trim();

//     if (element.checked === false && correctOption === nonChoosedOptions) {
//       element.style.backgroundColor = "#5EFF33";
//     }
//   }
// }

// // function countingSkipOption() {
// //   let number = 0;

// //   const g = document.getElementsByName("choice");
// //   g.forEach((element, index) => {
// //     if (
// //       element.checked == true &&
// //       element.value.toLowerCase().trim() === ("skip" || "Skip")
// //     ) {
// //       number++;
// //     }
// //   });
// //   skippedAnswer = number;
// //   console.log(skippedAnswer);
// // }

// function notAnsweredOptions() {
//   const g = document.getElementsByName("choice");
//   g.forEach((element, index) => {
//     if (
//       element.checked == true &&
//       element.value.toLowerCase().trim() === ("skip" || "Skip")
//     ) {
//       notAnswered++;
//     }
//   });
// }

// //function for displaying result. Duplicated code will be removed in future....
// function totalMarksObtained(isAutoSubmit) {
//   const right = document.getElementById("right");
//   const wrong = document.getElementById("wrong");
//   const skip = document.getElementById("skip");
//   const obtainedMarks = document.getElementById("marks-obtained");

//   if (isAutoSubmit === true) {
//     const markForCorrectAns = correctAnswer * 1.25;
//     const markForWrongAns = (wrongAnswer - skippedAnswer) * 0.25;
//     const obtainedMark = markForCorrectAns - markForWrongAns;
//     right.innerText = correctAnswer;
//     wrong.innerText = wrongAnswer - skippedAnswer;
//     obtainedMarks.innerText = obtainedMark;
//     skip.innerText = skippedAnswer;
//   } else {
//     const markForCorrectAns = correctAnswer * 1.25;
//     const markForWrongAns = (wrongAnswer - notAnswered) * 0.25;
//     const obtainedMark = markForCorrectAns - markForWrongAns;
//     const actualWrong = wrongAnswer - notAnswered;
//     right.innerText = correctAnswer;
//     wrong.innerText = actualWrong;
//     skip.innerText = notAnswered;
//     obtainedMarks.innerText = obtainedMark;
//   }
// }

// //function for auto submit using recursive method

// function autoSubmit(num = 0) {
//   let number = num;

//   const optionSets = document.getElementsByClassName("question-options");

//   if (number > optionSets.length - 1) {
//     totalMarksObtained(true);
//     return;
//   } else {
//     const perQuestionOptions = optionSets[number];
//     const correctOption = questionSet[number].answer.toLowerCase().trim();

//     for (let i = 0; i < perQuestionOptions.length; i++) {
//       const element = perQuestionOptions[i];
//       const nonChoosedOptions = element.value.toLowerCase().trim();

//       if (
//         element.checked === true &&
//         element.value.toLowerCase().trim() !== correctOption
//       ) {
//         wrongAnswer += 1;
//         element.style.backgroundColor = "#FF0000";
//       }
//       if (
//         element.checked == true &&
//         element.value.toLowerCase().trim() === ("skip" || "Skip")
//       ) {
//         skippedAnswer++;
//         console.log("skip", skippedAnswer);
//       }
//       if (
//         element.checked === true &&
//         element.value.toLowerCase().trim() === correctOption
//       ) {
//         correctAnswer++;
//         element.style.backgroundColor = "#5EFF33";
//       } else if (
//         element.checked === false &&
//         correctOption === nonChoosedOptions
//       ) {
//         element.style.backgroundColor = "blue";
//         notAnswered++;
//       }
//     }
//     autoSubmit((number += 1));
//   }
// }

// //function for displaying time
// const displayTime = () => {
//   let today = new Date();
//   let h = today.getHours();
//   let m = today.getMinutes();
//   let s = today.getSeconds();
//   let amPm = h;
//   h = h % 12;
//   h = h ? h : 12; // the hour '0' should be '12'
//   document.getElementById("display-time").innerHTML =
//     h + ":" + m + ":" + s + " " + (amPm >= 12 ? "PM" : "AM");
// };
// window.onload = () => {
//   x = document.getElementById("answer-submit-btn");
//   //after 10000 seconds answer will be submitted automatically
//   setTimeout(() => {
//     if (x.style.display != "none") {
//       autoSubmit();
//       x.style.display = "none";
//       console.log("answer is auto submitted");
//     }
//   }, 10000);
//   //this function is for updating time automatically
//   setInterval(displayTime, 500);
// };
