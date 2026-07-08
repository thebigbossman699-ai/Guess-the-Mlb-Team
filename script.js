let teams = [];
let remainingTeams = [];

let currentTeam = null;
let score = 0;
let streak = 0;
let gamesPlayed = 0;


// HTML ELEMENTS

const cards = document.querySelectorAll(".player-card");
const teamBox = document.querySelector(".team-box");
const guessInput = document.querySelector("#guess");
const submitBtn = document.querySelector("#submit");
const nextBtn = document.querySelector("#next");
const skipBtn = document.querySelector("#skip");

const scoreText = document.querySelector("#score");
const streakText = document.querySelector("#streak");


// LOAD DATA

async function loadTeams(){

    try{

        const response = await fetch("teams.json");

        teams = await response.json();

        remainingTeams = [...teams];

        startGame();

    }

    catch(error){

        console.error(error);

        alert("Failed to load teams.json");

    }

}



// START GAME

function startGame(){

    if(remainingTeams.length === 0){

        gameOver();

        return;

    }


    const randomIndex = Math.floor(
        Math.random() * remainingTeams.length
    );


    currentTeam = remainingTeams[randomIndex];


    remainingTeams.splice(randomIndex,1);


    displayPlayers();

    teamBox.textContent = "?";

    guessInput.value = "";

}



// DISPLAY JERSEY NUMBERS

function displayPlayers(){

    cards.forEach(card=>{

        const position = card.dataset.position;

        const player = currentTeam.players.find(
            p => p.position === position
        );


        if(player){

            card.querySelector(".number").textContent =
                player.number;

            card.querySelector(".position").textContent =
                position;


            card.dataset.player =
                player.name;


        }

    });

}



// CHECK GUESS

function checkGuess(){

    let guess = guessInput.value
        .trim()
        .toLowerCase();


    let answer = currentTeam.name
        .toLowerCase();


    if(guess === answer){

        correctGuess();

    }

    else{

        alert("Wrong team!");

        streak = 0;

        updateScore();

    }

}



// CORRECT ANSWER

function correctGuess(){

    score++;

    streak++;

    gamesPlayed++;


    revealPlayers();

    teamBox.textContent =
        currentTeam.name;


    updateScore();

}



// REVEAL PLAYERS

function revealPlayers(){

    cards.forEach(card=>{


        card.querySelector(".number").textContent =
            card.dataset.player || "?";


        card.classList.add("reveal");


    });

}



// SKIP

function skipGame(){

    streak = 0;

    gamesPlayed++;

    revealPlayers();

    teamBox.textContent =
        currentTeam.name;


    updateScore();

}



// UPDATE SCORE

function updateScore(){

    scoreText.textContent =
        "Score: " + score;


    streakText.textContent =
        "Streak: " + streak;

}



// GAME OVER

function gameOver(){

    document.querySelector(".game-container")
    .innerHTML = `

        <h1>GAME OVER</h1>

        <h2>
        Final Score: ${score}
        </h2>

        <h2>
        Best Streak: ${streak}
        </h2>

        <button onclick="location.reload()">
        Play Again
        </button>

    `;

}



// NEXT BUTTON

nextBtn.addEventListener(
    "click",
    startGame
);


submitBtn.addEventListener(
    "click",
    checkGuess
);


skipBtn.addEventListener(
    "click",
    skipGame
);



// ENTER KEY

guessInput.addEventListener(
    "keydown",
    function(event){

        if(event.key === "Enter"){

            checkGuess();

        }

    }
);



loadTeams();
