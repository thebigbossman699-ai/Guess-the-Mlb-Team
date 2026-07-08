let currentTeam;
let score = 0;
let attempts = 0;
let correct = 0;
let progress = 0;
let timer;
let timeLeft = 60;

const positions = [
    "CF",
    "LF",
    "RF",
    "SS",
    "2B",
    "3B",
    "1B",
    "P",
    "C",
    "DH"
];

function randomTeam() {
    currentTeam = teams[Math.floor(Math.random() * teams.length)];
}

function clearField() {

    positions.forEach(pos => {

        document.getElementById(pos).textContent = "?";

    });

    document.getElementById("teamBox").textContent = "?";
    document.getElementById("playerList").innerHTML = "";
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value = "";

}

function loadTeam() {

    clearInterval(timer);

    timeLeft = 60;

    document.getElementById("timer").textContent = timeLeft;

    randomTeam();

    clearField();

    currentTeam.players.forEach(player => {

        const spot = document.getElementById(player.position);

        if (spot) {

            spot.textContent = player.number;

        }

    });

    startTimer();

}

function startTimer() {

    timer = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timer);

            revealTeam();

            document.getElementById("message").textContent =
                "Time's Up!";

        }

    }, 1000);

}

function checkGuess() {

    attempts++;

    let guess = document
        .getElementById("guessInput")
        .value
        .trim()
        .toLowerCase();

    if (guess === currentTeam.team.toLowerCase()) {

        score++;
        correct++;
        progress++;

        document.getElementById("score").textContent = score;
        document.getElementById("progress").textContent =
            progress + " / " + teams.length;

        updateAccuracy();

        revealTeam();

        document.getElementById("message").textContent =
            "✅ Correct!";

        clearInterval(timer);

    } else {

        updateAccuracy();

        document.getElementById("message").textContent =
            "❌ Incorrect";

    }

}

function updateAccuracy() {

    let accuracy = Math.round((correct / attempts) * 100);

    if (attempts === 0) accuracy = 0;

    document.getElementById("accuracy").textContent =
        accuracy + "%";

}

function revealTeam() {

    document.getElementById("teamBox").textContent =
        currentTeam.team;

    let html = "";

    currentTeam.players.forEach(player => {

        html +=
            "<div>" +
            player.position +
            " - #" +
            player.number +
            " " +
            player.name +
            "</div>";

    });

    document.getElementById("playerList").innerHTML = html;

}

function hint() {

    let words = currentTeam.team.split(" ");

    let hint = "";

    words.forEach(word => {

        hint += word[0] + "_ ";

    });

    document.getElementById("message").textContent =
        "Hint: " + hint;

}

document
.getElementById("guessBtn")
.addEventListener("click", checkGuess);

document
.getElementById("nextBtn")
.addEventListener("click", loadTeam);

document
.getElementById("revealBtn")
.addEventListener("click", function () {

    revealTeam();

    clearInterval(timer);

});

document
.getElementById("hintBtn")
.addEventListener("click", hint);

document
.getElementById("guessInput")
.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        checkGuess();

    }

});

loadTeam();
