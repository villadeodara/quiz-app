'use strict';

const QUIZ_DATA = {
  title: "Europe Travel Quiz",
  questions: [//1
    {
      question: "Designed by Catalan architect Antoni Gaudí, this Basilica is still unfinished after a century: ",
      image_url: "https://images.pexels.com/photos/1062037/pexels-photo-1062037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      image_alt: "interior scene of a church",
      options: [
        "Basilica of Our Lady of Candelaria", 
        "Sagrada Familia", 
        "Basilica de la Macarena", 
        "Basilica of Saints Justus and Pastor"
      ],
      answer: "Sagrada Familia"
    },
    //2
    {
      question: "This 900-year-old castle and fortress in central London is notable for housing the crown jewels:",
      image_url: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      image_alt: 'london street scene',
      options: [
        "Windsor Castle",
        "Buckingham Palace", 
        "The Tower of London",
        "Hampton Court Palace"
      ],
      answer: "The Tower of London"
    },
    //3
    {
      question: "This 18th-century sculpted fountain was featured in the movie 'Three coins in the fountain'",
      image_url: "https://images.pexels.com/photos/2885919/pexels-photo-2885919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      image_alt: 'italy street scene with a fountain',
      options: [
        "Fontana del Tritone", 
        "The Nasone", 
        "Fontana della Barcaccia", 
        "The Trevi Fountain"
      ],
      answer: "The Trevi Fountain"
    },
    //4
    {
      question: "This Opulent, 19th-century royal residence was built by King Ludwig II, and is the only one which he lived to see completed:",
      image_url: "https://images.unsplash.com/photo-1565133060055-204fd1bf2e14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1648&q=80",
      image_alt: 'interior scene of a palace',
      options: [
        "Neuschwanstein Castle", 
        "Hohenschwangau Castle", 
        "Linderhof Palace", 
        "Herrenchiemsee New Palace"],
      answer: "Linderhof Palace"
    },
    //5
    {
      question: "In Paris, the Ladurée chain of pastry shops was established in 1862, and has been known for this french dessert: ",
      image_url: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      image_alt: 'photo of a dessert shop',
      options: [
        "Crème caramel", 
        "Madeleine", 
        "Mille-feuille", 
        "Macaron"
      ],
      answer: "Macaron"
    },
    //6
    {
      question: "This museum in italy has a statue of Machiavelli near its entrance: ",
      image_url: "https://cdn.pixabay.com/photo/2016/11/06/17/23/gallery-1803525_1280.jpg",
      image_alt: 'the exterior scene of a museum',
      options: [
        "Galleria Palatina", 
        "Circuito Museale Boboli e Argenti", 
        "Galleria degli Uffizi", 
        "Gallerie dell’Accademia"
      ],
      answer: "Galleria degli Uffizi"
    },
    ],
  currentQuestion: 0,
  score: 0
};

const BOARD_TYPE = {
  START: 0,
  QUESTION: 1,
  CORRECT_RESULT: 2,
  WRONG_RESULT: 3,
  FINAL_SCORE: 4,
}

// Helper function to generate the header string for 
// each board.
function generateHeaderString() {
  return `<h1> ${QUIZ_DATA.title} </h1>`;
}

// Render the start board.
function renderStartBoard() {
  console.log("renderStartBoard called.");

  let startBoardString = generateHeaderString();

  startBoardString += `
  <p> How well do you know about Europe? let's find out...</p>
  <div class="button_row">
    <button class="js-start-button">Start</button>
  </div>`;

  $('.board').html(startBoardString);
}

function generateScoreDivString(i) {
  let total_num_questions = QUIZ_DATA.questions.length;
  
  let question_number = (QUIZ_DATA.currentQuestion === QUIZ_DATA.questions.length) ? QUIZ_DATA.questions.length : QUIZ_DATA.currentQuestion + 1;

  return `
  <div class="score">
    <p> Question: ${question_number}/${total_num_questions} Score: ${QUIZ_DATA.score}/${total_num_questions} </p>
  </div>`
}
// Helper function to generate image division for the // ith question.
function generateImageDivString(i) {
  let image_url = QUIZ_DATA.questions[i].image_url;
  let image_alt = QUIZ_DATA.questions[i].image_alt;
  return `
  <div class="img_container">
    <img src="${image_url}" alt="${image_alt}">
  </div>`;
}

// Helper function to generate the question for the 
// ith question.
function generateQuestionString(i) {
  return `<h2> ${QUIZ_DATA.questions[i].question} </h2>`;
}

function generateOptionsFormString(i) {
  let optionsString = '';
  for (let j = 0; j < QUIZ_DATA.questions[i].options.length; ++j) {
    optionsString += `<input type="radio" name="option" value="${QUIZ_DATA.questions[i].options[j]}">${QUIZ_DATA.questions[i].options[j]}<br>`
  }
  return `
  <form> ${optionsString}
    <br>
    <div class="button_row">
      <button class="js-answer-button">Submit</button>
    </div>
  </form>`
}
// Render the question board. 
function renderQuestionBoard() {
  console.log("renderQuestionsBoard called.");

  let questionBoardString = generateHeaderString();
  questionBoardString += generateScoreDivString(
    QUIZ_DATA.currentQuestion); 
  questionBoardString += generateImageDivString(
    QUIZ_DATA.currentQuestion);
  questionBoardString += generateQuestionString(
    QUIZ_DATA.currentQuestion);
  questionBoardString += generateOptionsFormString(
    QUIZ_DATA.currentQuestion);
  console.log(questionBoardString);
  
  $('.board').html(questionBoardString); 
}

function renderCorrectResultBoard() {
  console.log("renderCorrectResultBoard called.");

  let correctResultBoardString = generateHeaderString();
  correctResultBoardString += generateScoreDivString();
  correctResultBoardString += `
  <p>Correct!</p>
  <div class="button_row">
    <button class="js-next-button">Next</button>
  </div>`;

  $('.board').html(correctResultBoardString);
}

function renderWrongResultBoard() {
  console.log("renderWrongResultBoard called.");

  let wrongResultBoardString = generateHeaderString();
  wrongResultBoardString += generateScoreDivString();

  let correctAnswer = QUIZ_DATA.questions[QUIZ_DATA.currentQuestion].answer;

  wrongResultBoardString += `
  <p>Wrong! The answer is: ${correctAnswer}.</p>
  <div class="button_row">
    <button class="js-next-button">Next</button>
  </div>`;

  $('.board').html(wrongResultBoardString);
}

function renderFinalScore() {
  console.log("renderFinalScoreBoard called.")

  let finalScoreBoardString = generateHeaderString();
  finalScoreBoardString += generateScoreDivString();

  let finalScorePercent = Math.floor(QUIZ_DATA.score/QUIZ_DATA.questions.length*100);

  finalScoreBoardString += `
  <p>You've scored: </p>
  <p class="final_score"> ${finalScorePercent}% <p>
  <div class="button_row">
    <button class="js-restart-button">Restart</button>
  </div>`;

  $('.board').html(finalScoreBoardString);
}

function renderBoard(type) {
  console.log("renderBoard called with type: " + type);
  switch (type) {
    case BOARD_TYPE.START:
      renderStartBoard();
      break;
    case BOARD_TYPE.QUESTION:
      renderQuestionBoard();
      break;
    case BOARD_TYPE.CORRECT_RESULT:
      renderCorrectResultBoard();
      break;
    case BOARD_TYPE.WRONG_RESULT:
      renderWrongResultBoard();
      break;
    case BOARD_TYPE.FINAL_SCORE:
      renderFinalScore();
      break;
    default:
      break;
  }
}

// Register the handler for the "Start" button.
// Use event delegation.
function handleStart() {
  console.log("handleStart called.");

  $('.board').on('click', '.js-start-button', 
  event => {
    console.log('js-start-button clicked.');
    renderBoard(BOARD_TYPE.QUESTION);
  });
}

// Register a handle that handles the click event of 
// click on a submit button of a question. Compare the 
// answer with the selected option, and render the 
// result board accordingly.
function handleQuestionAnswered() {
  console.log("handleAnswerQuestion called.");

  $('.board').on('click', '.js-answer-button',
  event => {
    console.log('js-answer-button clicked.');

    let selectedOption = $("input[name=option]:checked").val();
    if (!selectedOption) {
      alert("Choose an option");
      renderBoard(BOARD_TYPE.QUESTION);
      return;
    } 

    let currentQuestion = QUIZ_DATA.questions[QUIZ_DATA.currentQuestion];

    if (currentQuestion.answer == selectedOption) {
      QUIZ_DATA.score += 1;
      renderBoard(BOARD_TYPE.CORRECT_RESULT);
    } else {
      renderBoard(BOARD_TYPE.WRONG_RESULT);
    }

    if (QUIZ_DATA.currentQuestion < QUIZ_DATA.questions.length) {
      QUIZ_DATA.currentQuestion += 1;
    }
  })
}

function handleResultShown() {
  console.log("handResultShown called.");

  $('.board').on('click', '.js-next-button', 
  event => {
    console.log('js-next-button clicked.');
    
    if (QUIZ_DATA.currentQuestion === QUIZ_DATA.questions.length) {
      renderBoard(BOARD_TYPE.FINAL_SCORE);
    } else {
      renderBoard(BOARD_TYPE.QUESTION);
    }
  });
}

function handleFinalScoreShown() {
  console.log("handleFinalScoreShown called");

  $('.board').on('click', '.js-restart-button', 
  event => {
    console.log('js-restart-button clicked.');
    
    QUIZ_DATA.currentQuestion = 0;
    QUIZ_DATA.score = 0;
    renderBoard(BOARD_TYPE.QUESTION);
  });
}

function handleQuizApp() {
  Object.freeze(BOARD_TYPE);
  renderBoard(BOARD_TYPE.START);
  handleStart();
  handleQuestionAnswered();
  handleResultShown();
  handleFinalScoreShown();
}

$(handleQuizApp);
