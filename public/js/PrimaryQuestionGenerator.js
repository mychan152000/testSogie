class PrimaryQuestionsGenerator extends QuestionGenerator {
  constructor(questions) {
    super(questions);
    this.answer = new Array(19).fill(0);
  }

  _processQuestion(choice) {
    this.answer[choice] = 1;
  }

  _endQuiz() {
    $("#question").empty();
    $("#child__answer").empty();
    $("#submitbutton").remove();
    // $("#frame").remove();
  }
}
