








/*----- constants -----*/
const nflQuestionsAndAnswers = [
    { Athlete:'Derwin James', Details:'This NFL player plays for the Los Angeles Chargers. He came out of FSU as a safety and is regarded as one of the best defensive players in the league.'},
    { Athlete:'Tom Brady' ,Details:'This NFL player has 7 rings and most recently got his last one with the Tampa Bay Buccaneers.'  },
    { Athlete:'Patrick Mahomes' , Details:'This NFL player plays for the Kansas City Chiefs and is one of the best quarterbacks in the nfl.'},
    { Athlete:'Saquon Barkley', Details:'This NFL player is a running back out of penn state who plays for the New York Giants.' },
    { Athlete:'Joey Bosa', Details:'This NFL player came out of ohio state who plays as a defensive end and has a brother who plays the same position for the San Francisco 49ers.'},
    { Athlete:'Justin Jefferson', Details:'This NFL player came out of LSU as a wide receiver. Currently plays for the Minnesota Vikings.'}
  ];
// const nbaQuestionsAndAnswers = [
//     { Athlete:'Lebron James', Message:'This NBA player was born in Akron Ohio and has 4 NBA rings. One of those he won with the Cleveland Cavaliers which is his home state.'},
//     { Athlete:'Kawhi Leonard' ,Message:'This NBA player came out of San Diego State and most recently won his last NBA championship with the Toronto Raptors.'  },
//     { Athlete:'Damien Lillard' , Message:'This NBA player played in Weber State and plays point guard for the Portland Trail Blazers.'},
//     { Athlete:'Stephen Curry', Message:'This NBA player is a point guard who is known for his great 3 point shooting. Like Lebron he was also born in Akron Ohio' },
//     { Athlete:'Luka Doncic', Message:'This NBA player is European and plays for the Dallas Mavericks'},
//     { Athlete:'Kevin Durant' , Message:'This NBA player came out of texas and was drafted by the Seattle Supersonics which later turned into the OKC Thunder.'}
//   ];
// const mlbQuestionsAndAnswers = [
//     { Athlete:'Shohei Ohtani', Message:'This MLB player is from Japan. He both pitches and bats and is arguably the best player in the MLB'},
//     { Athlete:'Anthony Rendon' ,Message: 'This player bamboozled the angels out of 30 million dollars a year in their most recent dumb contract' },
//     { Athlete:'Mike Trout' , Message:'This MLB player plays center field. He is from new jersey and is a big eagles fan. He also is regarded as one of the best players in the MLB.'},
//     { Athlete:'Mookie Betts', Message:'This MLB player was traded from the Red Sox to the dodgers. He also won a world series with the red sox.' },
//     { Athlete:'Bryce Harper', Message:'This MLB player is a right fielder for the Phillies. He has 2 MVPs.'},
//     { Athlete:'Jacob Degrom', Message:'This MLB player is a pitcher who pitches for the Texas Rangers. He is currently out of the season because needed tommy john surgery.'}
//   ];


/*----- state variables -----*/
let guessAthlete, userInput
let randomIndex






/*----- cached elements  -----*/

const message = document.querySelector('h2')
const guessInput = document.querySelector('.answer')






/*----- event listeners -----*/










/*----- functions -----*/
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

// After the start game function is initiated the user will get their chance to input their guess.

function checkGuess () {
    let userGuess = document.getElementById('answer').value.toLowerCase()
    // let inputElement = userGuess.value.toLowerCase()
    //  randomIndex = Math.floor(Math.random() * nflQuestionsAndAnswers.length)
    let correctAnswer = nflQuestionsAndAnswers[randomIndex].Athlete.toLowerCase();

    document.getElementById('answer').value = ''

    if(userGuess === correctAnswer){
      congrats()
    } else {
     incorrect() 
    }
    
}

function congrats () {
  let message = document.getElementById('message')
  message.innerHTML = 'Congrats! you guessed right !'
}


function incorrect () {
  let message = document.getElementById('message')
  message.innerHTML = 'Incorrect! you guessed wrong !'
}
