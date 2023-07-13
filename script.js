$(document).ready(function() {
    var questions = [
      {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Rome", "Madrid"],
        correctAnswer: 0
      },
      {
        question: "Who painted the Mona Lisa?",
        choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: 2
      },
      {
        question: "What is the largest planet in our solar system?",
        choices: ["Venus", "Jupiter", "Mars", "Saturn"],
        correctAnswer: 1
      }
    ];
  
    var currentQuestion = 0;
    var score = 0;
  
    function displayQuestion() {
      var question = questions[currentQuestion].question;
      var choices = questions[currentQuestion].choices;
  
      $('#question-container').html('<p>' + question + '</p>');
      for (var i = 0; i < choices.length; i++) {
        $('#question-container').append('<input type="radio" name="answer" value="' + i + '">' + choices[i] + '<br>');
      }
    }
  
    displayQuestion();
  
    $('#submit-btn').click(function() {
      var selectedAnswer = $('input[name="answer"]:checked').val();
  
      if (selectedAnswer == undefined) {
        alert("Please select an answer!");
        return;
      }
  
      if (selectedAnswer == questions[currentQuestion].correctAnswer) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        var result = "You scored " + score + " out of " + questions.length;
        $('#question-container').hide();
        $('#submit-btn').hide();
        $('#result-container').html(result);
      }
    });
  });
  