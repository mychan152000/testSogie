/** Simple JavaScript Quiz
 * version 0.1.0
 * http://journalism.berkeley.edu
 * created by: Jeremy Rue @jrue
 *
 * Copyright (c) 2013 The Regents of the University of California
 * Released under the GPL Version 2 license
 * http://www.opensource.org/licenses/gpl-2.0.php
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */

var quiztitle = 'Quiz SOGIESC'
// var result = JSON.parse()
var answer_bin = new Array(19).fill(0)
var answers = new Array()

var currentquestion = 0,
  score = 0,
  submt = true,
  picked

/**
 * HTML Encoding function for alt tags and attributes to prevent messy
 * data appearing inside tag attributes.
 */
function htmlEncode(value) {
  return $(document.createElement('div')).text(value).html()
}

/**
 * This will add the individual choices for each question to the ul#child__answer
 *
 * @param {choices} JSON  The choices from each question
 */
function addChoices(choices) {
  // if(typeof choices !== "undefined" && typeof choices == "object")
  {
    $('#child__answer').empty()
    // for(var i=0;i<choices.length; i++){
    //     $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#child__answer');
    // }
    for (i in choices) {
      $(document.createElement('li'))
        .addClass('choice itemAns child__ans__item')
        .attr('data-index', choices[i])
        .text(i)
        .appendTo('#child__answer')
    }

    //add submit button
    $(document.createElement('div'))
      .addClass('choice-box')
      .attr('id', 'submitbutton')
      .html('NEXT QUESTION &raquo;')
      .css({ 'font-weight': 600, color: 'white' })
      .appendTo('#child__answer')
  }
}

/**
 * Resets all of the fields to prepare for next question
 */
function nextQuestion() {
  submt = true
  $('#question').val
  $('#question').text(quiz[currentquestion]['question'])
  $('#pager').text(
    'Question ' + Number(currentquestion + 1) + ' of ' + quiz.length
  )
  if (
    quiz[currentquestion].hasOwnProperty('image') &&
    quiz[currentquestion]['image'] != ''
  ) {
    if ($('#question-image').length == 0) {
      $(document.createElement('img'))
        .addClass('question-image')
        .attr('id', 'question-image')
        .attr('src', quiz[currentquestion]['image'])
        .attr('alt', htmlEncode(quiz[currentquestion]['question']))
        .insertAfter('#question')
    } else {
      $('#question-image')
        .attr('src', quiz[currentquestion]['image'])
        .attr('alt', htmlEncode(quiz[currentquestion]['question']))
    }
  } else {
    $('#question-image').remove()
  }
  addChoices(quiz[currentquestion]['choices'])
  setupButtons()
}

/**
 *
 *
 * @param {choice} number The li zero-based index of the choice picked
 */
function processQuestion(choice, choice_val) {
  currentquestion++
  answer_bin[choice] = 1
  answers.push(choice_val)
}

/**
 * Sets up the event listeners for each button.
 */
function setupButtons() {
  $('.choice').on('mouseover', function () {
    $(this).css({ 'background-color': '#e1e1e1' })
  })
  $('.choice').on('mouseout', function () {
    $(this).css({ 'background-color': '#fff' })
  })
  $('.choice').on('click', function () {
    picked = $(this).attr('data-index')
    picked_val = $(this).text()
    $('.choice').removeAttr('style').off('mouseout mouseover')
    $(this).css({
      'border-color': '#222',
      'font-weight': 500,
      'background-color': '#c1c1c1',
    })
    if (submt) {
      submt = false
      $('#submitbutton')
        .css({ color: '#000' })
        .on('click', function () {
          $('.choice').off('click')
          $(this).off('click')
          processQuestion(picked, picked_val)
          if (currentquestion == quiz.length) {
            endQuiz((result) => {
              console.log(result)
              document.dispatchEvent(
                new CustomEvent('finished', { detail: result })
              )
            })
          } else nextQuestion()
        })
    }
  })
}

/**
 * Quiz ends, display a message.
 */
function printResult(res) {
  $('#question').empty()
  $('#child__answer').empty()
  $('#submitbutton').remove()
  $('#frame').remove()
  $(document.createElement('h3'))
    .css({ 'text-align': 'center', 'font-size': '2em' })
    .text('ban la: ' + res)
    .appendTo('#alert-box')
}
var endQuiz = function (callback) {
  let binary_answer = answer_bin.join('')
  let decimal_converted_answer = parseInt(binary_answer, 2)
  let json_data = { key: decimal_converted_answer }
  $.ajax({
    url: '/api/result',
    type: 'GET',
    data: json_data,
    // dataType: "application/json; charset=utf-8",
  })
    .done(function (result) {
      printResult(result)
      data = {
        answer: binary_answer,
        result: result,
      }
      callback(data)
    })
    .fail(function () {
      printResult('Sorry sth went wrong')
    })
}

/**
 * Runs the first time and creates all of the elements for the quiz
 */
function primaryQuestionsInit(quiz) {
  //add title
  // if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
  //   $(document.createElement("h1")).text(quiztitle).appendTo("#frame");
  // } else {
  //   $(document.createElement("h1")).text("Quiz").appendTo("#frame");
  // }

  //add pager and questions
  if (typeof quiz !== 'undefined' && $.type(quiz) === 'array') {
    //add pager
    $(document.createElement('p'))
      .addClass('pager')
      .attr('id', 'pager')
      .text('Question 1 of ' + quiz.length)
      .appendTo('#frame')
    //add first question
    $(document.createElement('h4'))
      .addClass('question')
      .attr('id', 'question')
      .text(quiz[0]['question'])
      .appendTo('#frame')
    //add image if present
    if (quiz[0].hasOwnProperty('image') && quiz[0]['image'] != '') {
      $(document.createElement('img'))
        .addClass('question-image')
        .attr('id', 'question-image')
        .attr('src', quiz[0]['image'])
        .attr('alt', htmlEncode(quiz[0]['question']))
        .appendTo('#frame')
    }
    //add choices
    addChoices(quiz[0]['choices'])

    setupButtons()
  }
}
