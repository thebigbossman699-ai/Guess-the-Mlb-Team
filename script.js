const answer = "Houston Astros";

function checkGuess() {
    const input = document.getElementById("teamInput").value.trim().toLowerCase();
    const result = document.getElementById("result");

    if (input === answer.toLowerCase()) {
        result.textContent = "✅ Correct! It's the Houston Astros!";
        result.style.color = "#00ff66";
    } else {
        result.textContent = "❌ Wrong team. Try again!";
        result.style.color = "#ff4444";
    }
}
