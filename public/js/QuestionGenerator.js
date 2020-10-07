class QuestionGenerator {
  constructor(questions) {
    this.questions = questions;
    this.answer = null; //new Array(19).fill(0)
    this.result = null;
    this.currentquestion = -1;
    this.lookUpEndPoint = "/api/result";
    // this._addChoices = this._addChoices.bind(this);
    this._setupButtons = this._setupButtons.bind(this);
    this._nextQuestion = this._nextQuestion.bind(this);
    this._processQuestion = this._processQuestion.bind(this);
    if (
      typeof this.questions !== "undefined" &&
      $.type(this.questions) === "array"
    ) {
      //add pager
      $(document.createElement("p"))
        .addClass("pager")
        .attr("id", "pager")
        .text("Question 1 of " + this.questions.length)
        .appendTo("#frame");
      //add first question
      $(document.createElement("h4"))
        .addClass("question")
        .attr("id", "question")
        .text(this.questions[0]["question"])
        .appendTo("#frame");
      //add image if present
      if (
        this.questions[0].hasOwnProperty("image") &&
        this.questions[0]["image"] != ""
      ) {
        $(document.createElement("img"))
          .addClass("question-image")
          .attr("id", "question-image")
          .attr("src", this.questions[0]["image"])
          .attr("alt", htmlEncode(this.questions[0]["question"]))
          .appendTo("#frame");
      }
      //add choices
      this._nextQuestion();
      // this._addChoices(this.questions[0]["choices"]);

      // this._setupButtons();
    }
  }
  _addChoices(choices) {
    // if(typeof choices !== "undefined" && typeof choices == "object")
    {
      $("#child__answer").empty();
      // for(var i=0;i<choices.length; i++){
      //     $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#child__answer');
      // }
      for (let i in choices) {
        $(document.createElement("li"))
          .addClass("choice itemAns child__ans__item")
          .attr("data-index", choices[i])
          .text(i)
          .appendTo("#child__answer");
      }

      //add submit button
      $(document.createElement("div"))
        .addClass("choice-box")
        .attr("id", "submitbutton")
        .html("NEXT QUESTION &raquo;")
        .css({ "font-weight": 600, color: "white" })
        .appendTo("#child__answer");
    }
  }

  _nextQuestion() {
    let currentquestion = this.currentquestion;
    currentquestion += 1;
    $("#question").val;
    $("#question").text(this.questions[currentquestion]["question"]);
    $("#pager").text(
      "Question " + Number(currentquestion + 1) + " of " + this.questions.length
    );
    this._addChoices(this.questions[currentquestion]["choices"]);
    this.currentquestion = currentquestion;
    this._setupButtons();
  }

  _processQuestion(choice) {
    // this.answer[choice] = 1;
    throw new Error("You have to implement method _processQuesiont");
  }

  _dispatchFinishedEvent(result) {
    document.dispatchEvent(
      new CustomEvent("primary-finished", { detail: result })
    );
  }
  _setupButtons() {
    var score = 0,
      submt = true,
      picked,
      self = this;
    $(".choice").on("mouseover", function () {
      $(this).css({ "background-color": "#e1e1e1" });
    });

    $(".choice").on("mouseout", function () {
      $(this).css({ "background-color": "#fff" });
    });

    $(".choice").on("click", function () {
      let picked = $(this).attr("data-index");
      $(".choice").removeAttr("style").off("mouseout mouseover");
      $(this).css({
        "border-color": "#222",
        "font-weight": 500,
        "background-color": "#c1c1c1",
      });
      //   if (submt) {
      // submt = false;
      $("#submitbutton")
        .css({ color: "#000" })
        .on("click", () => {
          $(".choice").off("click");
          $("#submitbutton").off("click");
          self._processQuestion(picked);
          if (self.currentquestion == self.questions.length - 1) {
            self._getResult((result) => {
              self._printResult(result.result);
              self._endQuiz();
              self._dispatchFinishedEvent(result);
            });
          } else self._nextQuestion();
        });
      //   }
    });
  }

  _printResult(res) {
    console.log(res);
    $(document.createElement("h3"))
      .css({ "text-align": "center", "font-size": "2em" })
      .text("ban la: " + res)
      .appendTo("#alert-box");
  }

  _getResult(cb) {
    let binary_answer = this.answer;
    this.answer = parseInt(binary_answer.join(""), 2);
    let json_data = { key: this.answer };
    var self = this;
    console.log(json_data);
    $.ajax({
      url: self.lookUpEndPoint,
      type: "GET",
      data: json_data,
      // dataType: "application/json; charset=utf-8",
    })
      .done((result) => {
        let data = {
          answer: binary_answer,
          result: result,
        };
        console.log(this.answer);
        cb(data);
      })
      .fail(() => {
        this._printResult("Sorry sth went wrong");
      });
  }
  _endQuiz() {
    $("#question").empty();
    $("#child__answer").empty();
    $("#submitbutton").remove();
    $("#frame").remove();
    // this.answer = this.answer.join("");
    // let binary_answer = this.answer;
    // let decimal_converted_answer = parseInt(binary_answer, 2);
    // let json_data = { key: decimal_converted_answer };
  }
}
