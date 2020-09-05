class SecondaryQuestionsGenerator extends QuestionGenerator {
  // constructor(questions) {
  //   $("#frame").empty();
  //   super(questions);
  //   this.answer = new Array(34).fill(0);
  //   this.lookUpEndPoint = "/api/spec-result";
  // }

  constructor(questions, ignoredQuestionIndices) {
    $("#frame").empty();
    super(questions);
    console.log(questions);
    this.answer = new Array(32).fill(0);
    ignoredQuestionIndices.forEach((i) => {
      this.answer[i] = 1;
    });

    // console.log("ignoredQuestionIndices", ignoredQuestionIndices);
    console.log(this.answer.join(""));
    this.lookUpEndPoint = "/api/spec-result";
  }

  // _nextQuestion()
  _processQuestion(choice) {
    if (this.currentquestion > -1) $("#alert-box").empty();
    // check if user want to answers the extra questions
    if (choice == 2) this.currentquestion += 2;
    else if (choice == 18) this.currentquestion == this.questions.length;
    this.answer[choice] = 1;
  }
  _endQuiz() {
    $("#question").empty();
    $("#child__answer").empty();
    $("#submitbutton").remove();
    $("#frame").remove();
  }
  _dispatchFinishedEvent(result) {
    document.dispatchEvent(new CustomEvent("finished", { detail: result }));
  }
}
