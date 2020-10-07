var priQuestResult = "";
var priQuestBinaryAnswers = "";
var secondQuestStack = [];
var ignoredQuestionIndices = [];
function post(path, params, method = "post") {
  // The rest of this code assumes you are not using a library.
  // It can be made less wordy if you use one.
  const form = document.createElement("form");
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement("input");
      hiddenField.type = "hidden";
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}
$(document).ready(function () {
  //  from PrimaryQuestionsGenerators
  const primaryQuestGen = new PrimaryQuestionsGenerator(quiz);

  document.addEventListener("primary-finished", function (event) {
    let priQuestBinaryAnswers = event.detail.result;
    console.log(priQuestBinaryAnswers);
    let answer_content = document.getElementsByClassName("content-answer");
    post("/result", { result: priQuestBinaryAnswers });
    // answer_content[0].innerHTML =
    //   "<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSd78pOgtZxEpCEV28NEvKl9HUEqTYlnHO1o3QxFiphqezbYOA/viewform?embedded=true' width='940' height='654' frameborder='0' marginheight='0' marginwidth='0'>Loading…</iframe>";
    //prepare the order for the question
    // let questionStack = prepareSecondaryQuestions(priQuestBinaryAnswers);
    // const secondQuestionGen = new SecondaryQuestionsGenerator(
    //   questionStack,
    //   ignoredQuestionIndices
    // );
  });

  document.addEventListener("finished", function (event) {
    return;
  });
});

// function parseResult(event) {}
function concatQuestion(array, first, last = undefined) {
  if (last === undefined) return array.concat(secondary_quiz[first]);
  else return array.concat(secondary_quiz.slice(first, last + 1));
}

function getIgnoredIndices(array, QuestIndicesList) {
  return array
    .filter((question) => {
      if (QuestIndicesList.includes(array.indexOf(question))) return question;
    })
    .map((question) => {
      return question["ignored"];
    });
}

function prepareSecondaryQuestions(answersArray) {
  //answerArrat[5] => emo_attract_Không
  //answerArrat[9] => emo_attract_Nhiều hơn hai giới
  let ignoredQuest = [];
  if (answersArray[5] == 1 || answersArray[9] == 1) {
    secondQuestStack = concatQuestion(secondQuestStack, 0);
    if (answersArray[5] == 1) {
      secondQuestStack = concatQuestion(secondQuestStack, 1, 2);
      ignoredQuest.push(3, 4);
    } else if (answersArray[9] == 1) {
      secondQuestStack = concatQuestion(secondQuestStack, 3, 4);
      ignoredQuest.push(1, 2);
    }
  } else {
    const ignoredIndices = getIgnoredIndices(secondary_quiz, [0, 1, 2, 3, 4]);
    ignoredQuestionIndices.push.apply(ignoredQuestionIndices, ignoredIndices);
  }

  //answerArrat[12] => sex_attract_Không
  //answerArrat[5] => sex_attract_Nhiều hơn 2 giới
  if (answersArray[12] == 1 || answersArray[16] == 1) {
    secondQuestStack = concatQuestion(secondQuestStack, 5);
    if (answersArray[12] == 1) {
      secondQuestStack = concatQuestion(secondQuestStack, 6, 7);
      ignoredQuest.push(8, 9);
    } else if (answersArray[16] == 1) {
      secondQuestStack = concatQuestion(secondQuestStack, 8, 9);
      ignoredQuest.push(6, 7);
    }
  } else {
    const ignoredIndices = getIgnoredIndices(secondary_quiz, [5, 6, 7, 8, 9]);
    ignoredQuestionIndices.push.apply(ignoredQuestionIndices, ignoredIndices);
  }
  ignoredQuestionIndices.push.apply(
    ignoredQuestionIndices,
    getIgnoredIndices(secondary_quiz, ignoredQuest)
  );
  console.log(ignoredQuestionIndices);
  return secondQuestStack;
}
