const nflQuestionsAndAnswers = [
    { Athlete:'Derwin James', Details:'This NFL player plays for the Los Angeles Chargers. He came out of FSU as a safety and is regarded as one of the best defensive players in the league.'},
    { Athlete:'Tom Brady' ,Details:'This NFL player has 7 rings and most recently got his last one with the Tampa Bay Buccaneers.'  },
    { Athlete:'Patrick Mahomes' , Details:'This NFL player plays for the Kansas City Chiefs and is one of the best quarterbacks in the nfl.'},
    { Athlete:'Saquon Barkley', Details:'This NFL player is a running back out of penn state who plays for the New York Giants.' },
    { Athlete:'Joey Bosa', Details:'This NFL player came out of ohio state who plays as a defensive end and has a brother who plays the same position for the San Francisco 49ers.'},
    { Athlete:'Josh Allen', Details:'This NFL player came out Wyoming and currently plays for the Buffalo Bills as a quarterback.'},
    { Athlete:'Davante Adams', Details:'This NFL player came out of Fresno State and is regarded as one of the best receivers in the NFL.'},
    { Athlete:'Micah Parsons', Details:'This NFL player came out of Penn State. He now plays for the Dallas Cowboys as a defensive end.'},
    { Athlete:'Jalen Ramsey', Details:'This NFL player came out of FSU and was recently traded to the Miami Dolphins. He plays as a defensive back.'},
    { Athlete:'TJ Watt', Details:'This NFL player came out of Wisconsin as a defensive end. currently plays for the pittsburgh steelers.'},
    { Athlete:'Von Miller', Details:'This NFL player came out of Texas A&M who currently is a defensive end for the Buffalo Bills and has also won a superbowl MVP.'},
    { Athlete:'Aaron Donald', Details:'This NFL player came out of Pitt as a defensive tackle. He has won one superbowl.'},
    { Athlete:'Lamar Jackson', Details:'This NFL player came out of Louisville. He plays quarterback for the Baltimore Ravens'},
    { Athlete:'Derrick Henry', Details:'This NFL player came out of Alabama. He plays running back for the Tennessee Titans.'}
  ];


let randomIndex
let guessedAnswer = []


const message = document.querySelector('h2')
const guessInput = document.querySelector('.answer')


function startGame() {
  let randomDetails = document.getElementById('detail-msg')
  randomIndex = Math.floor(Math.random() * nflQuestionsAndAnswers.length)
  let displayMessage = nflQuestionsAndAnswers[randomIndex]
  randomDetails.innerHTML = displayMessage.Details
  
  let beginGame = document.getElementById('mainButton') 
  beginGame.textContent = 'Play Again'
  let msgElement = document.getElementById('message')
  msgElement.innerHTML = ''

} 

function checkGuess () {
    let userGuess = document.getElementById('answer').value.toLowerCase()

    let correctAnswer = nflQuestionsAndAnswers[randomIndex].Athlete.toLowerCase();

    document.getElementById('answer').value = ''

    if(userGuess === correctAnswer){
      let message = document.getElementById('message')
  message.innerHTML = 'Correct!'
      guessedAnswer.push(randomIndex)
      nflQuestionsAndAnswers.splice(randomIndex, 1)
      if(nflQuestionsAndAnswers.length === 0) {
        congrats()
      }
   
    } else if (userGuess != correctAnswer){

      incorrect()
    }
    
   
}

function congrats () {
  if(nflQuestionsAndAnswers.length === 0) {
      let winnerMessage = document.getElementById('winning-message')
      winnerMessage.innerHTML = 'Congrats! you have guessed everything!'

      let restartButton = document.getElementById('mainButton')
      restartButton.textContent = 'Play Game Again'
      restartButton.addEventListener('click', function(){
        restartGame()
      }, {
        once: true
      })
   } 
}


function incorrect () {
  let losingMessage = document.getElementById('losing-message')
  losingMessage.innerHTML = 'Incorrect! Press Restart Game to play again'
  let restartButton = document.getElementById('mainButton') 
  restartButton.textContent = 'Restart Game'
  restartButton.addEventListener('click', function(){
    restartGame()
  }, {
    once: true
  })
}


function restartGame () {
  let restartButton = document.getElementById('mainButton') 
  restartButton.textContent = 'Restart Game'
  let incorrectMessage = document.getElementById('losing-message')
  incorrectMessage.innerHTML = ''
  let congratsMessage = document.getElementById('winning-message')
  congratsMessage.innerHTML = ''

  
 
  nflQuestionsAndAnswers.length = 0

  nflQuestionsAndAnswers.push(
    { Athlete:'Derwin James', Details:'This NFL player plays for the Los Angeles Chargers. He came out of FSU as a safety and is regarded as one of the best defensive players in the league.'},
    { Athlete:'Tom Brady' ,Details:'This NFL player has 7 rings and most recently got his last one with the Tampa Bay Buccaneers.'  },
    { Athlete:'Patrick Mahomes' , Details:'This NFL player plays for the Kansas City Chiefs and is one of the best quarterbacks in the nfl.'},
    { Athlete:'Saquon Barkley', Details:'This NFL player is a running back out of penn state who plays for the New York Giants.' },
    { Athlete:'Joey Bosa', Details:'This NFL player came out of ohio state who plays as a defensive end and has a brother who plays the same position for the San Francisco 49ers.'},
    { Athlete:'Josh Allen', Details:'This NFL player came out Wyoming and currently plays for the Buffalo Bills as a quarterback.'},
    { Athlete:'Davante Adams', Details:'This NFL player came out of Fresno State and is regarded as one of the best receivers in the NFL.'},
    { Athlete:'Micah Parsons', Details:'This NFL player came out of Penn State. He now plays for the Dallas Cowboys as a defensive end.'},
    { Athlete:'Jalen Ramsey', Details:'This NFL player came out of FSU and was recently traded to the Miami Dolphins. He plays as a defensive back.'},
    { Athlete:'TJ Watt', Details:'This NFL player came out of Wisconsin as a defensive end. currently plays for the pittsburgh steelers.'},
    { Athlete:'Von Miller', Details:'This NFL player came out of Texas A&M who currently is a defensive end for the Buffalo Bills and has also won a superbowl MVP.'},
    { Athlete:'Aaron Donald', Details:'This NFL player came out of Pitt as a defensive tackle. He has won one superbowl.'},
    { Athlete:'Lamar Jackson', Details:'This NFL player came out of Louisville. He plays quarterback for the Baltimore Ravens'},
    { Athlete:'Derrick Henry', Details:'This NFL player came out of Alabama. He plays running back for the Tennessee Titans.'}
  )

    guessedAnswer.length = 0
  startGame()
}
