var scores, roundScore, activePlayer, gameState;

scores = [0, 0];
activePlayer = 0;
roundScore = 0;

init();
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gameState) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    if (dice !== 1) {
      roundScore += dice;

      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayerTurn();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gameState) {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      document.getElementById("name-" + activePlayer).textContent = "Winner!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.toggle("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.toggle("active");
      document.querySelector(".dice").style.display = "none";
      gameState = false;
    } else {
      nextPlayerTurn();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  gameState = true;
  document.querySelector(".dice").style.display = "none";
  for (var i = 0; i < scores.length; i++) {
    document.getElementById("score-" + i).textContent = 0;
    document.getElementById("current-" + i).textContent = 0;

    document.getElementById("name-" + i).textContent = "Player " + (i + 1);
    document
      .querySelector(".player-" + i + "-panel")
      .classList.remove("winner");
    document
      .querySelector(".player-" + i + "-panel")
      .classList.remove("active");
  }

  activePlayer = 0;
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");
}
function nextPlayerTurn() {
  roundScore = 0;
  document.querySelector("#current-" + activePlayer).textContent = roundScore;
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");
}
