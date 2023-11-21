var scores, roundScore, activePlayer, gameState, prevDice, winningPoints;

init();
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gameState) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    // var dice = 6;
    // console.log(dice, prevDice);

    var dice1DOM = document.querySelector("#dice-1");
    var dice2DOM = document.querySelector("#dice-2");

    dice1DOM.style.display = "block";
    dice1DOM.src = "dice-" + dice1 + ".png";
    dice2DOM.style.display = "block";
    dice2DOM.src = "dice-" + dice2 + ".png";
    // if (dice === 6 && prevDice === 6) {
    //   scores[activePlayer] = 0;
    //   document.getElementById("score-" + activePlayer).textContent = 0;
    //   nextPlayerTurn();
    //   prevDice = 0;
    //   return;
    // }
    if (dice1 !== 1 && dice2 !== 1) {
      roundScore += dice1 + dice2;

      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayerTurn();
    }

    // prevDice = dice;
    // console.log(dice, prevDice);
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gameState) {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= parseInt(winningPoints)) {
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
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  if (winningPoints) {
    winningPoints = document.getElementById("winning-point").value;
  } else {
    winningPoints = 100;
  }
  console.log(winningPoints);

  document.querySelector("#dice-1").style.display = "none";
  document.querySelector("#dice-2").style.display = "none";
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
