var askedQuestions = [];
var responsesForEmptyQuestion = ["Go on. I'm listening.", "Don't be shy. Let's hear it.", "How can I help you?", "Did you want to ask something?", "Something on your mind?", "Well ... ?"];
var responsesForStatement = ["Is that a question?", "I can only answer questions."];
var responsesForRepeatQuestions = ["I already told you.", "You're asking that again?", "I've given you my answer.", "No repeat questions."];
var responses = ["How would I know?", "Aah, flip a coin.", "That's up to you.", "Yes, no ... maybe?", "I have no earthly idea.", "Signs point ... somewhere.", "Yeah, that's a tough one.", "My sources are unavailable.", "You don't want my advice on that."];

var Answer = {
  emptyQuestions: function() {
    return responsesForEmptyQuestion[Math.floor(Math.random() * responsesForEmptyQuestion.length)]
  },

  forStatements: function() {
    return responsesForStatement[Math.floor(Math.random() * responsesForStatement.length)]
  },

  repeatQuestions: function() {
    return responsesForRepeatQuestions[Math.floor(Math.random() * responsesForRepeatQuestions.length)]
  },

  standardResponses: function() {
    return responses[Math.floor(Math.random() * responses.length)]
  }
};


var askedQuestion = {
  noQuestion: function(question) {
    return (question === "")
  },

  statement: function(question) {
    return (!(/\?$/.test(question)))
  },

  alreadyAsked: function(question) {
    return (askedQuestions.includes(question))
  }
};



var answerFader = function(response) {
  return $("#answer").fadeOut(600, function() {
        setTimeout(function() {
          $("#answer").text(response).fadeIn(600);
        }, 400);
      });
}

$(document).ready(function() {
  $("#ask-button").on("click", function() {
    var question = $("#question").val().trim();

    if (askedQuestion.noQuestion(question)) {
      answerFader(Answer.emptyQuestions);
    } else if (askedQuestion.statement(question)) { 
      answerFader(Answer.forStatements);
    } else if (askedQuestion.alreadyAsked(question)) {
        answerFader(Answer.repeatQuestions)
    } else {
      askedQuestions.push(question);
        answerFader(Answer.standardResponses)
    }
  });
});
