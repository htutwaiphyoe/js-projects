/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, state;


init();
//roll dice
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(state){
        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');

        //2. Display results
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3. update the round score if the roll number was not 1

        if(dice !== 1){
            //Add score
            roundScores += dice;
            document.getElementById('current-' + activePlayer).innerHTML = roundScores;
        }
        else{
            //next player
            nextPlayer();

        }
    }

});

//hold dice
document.querySelector('.btn-hold').addEventListener('click',function(){

    if(state){
        //add to global score
        scores[activePlayer] += roundScores;
        //update UI
        document.getElementById('score-' + activePlayer).innerHTML = scores[activePlayer];

        //check player win
        if(scores[activePlayer] >= 100){
            document.getElementById('name-' + activePlayer).innerHTML = "Winner!";
            document.querySelector('.dice').style.display = 'none'; 
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            
            roundScores = 0;
            document.getElementById('current-' + activePlayer).innerHTML = roundScores;
            state = false;
        
        }
        else{
            nextPlayer(); 
        }
    }

   

});

//new game
document.querySelector('.btn-new').addEventListener('click',init);

//change next player
function nextPlayer(){
   
    roundScores = 0;
    document.getElementById('current-' + activePlayer).innerHTML = roundScores;
    document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
    // document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
     document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
     document.querySelector('.dice').style.display = 'none';
}


//initialize
function init(){
    scores = [0,0];
    roundScores = 0;
    state = true;
    activePlayer = 0;

    // document.querySelector('#current-' + activePlayer).textContent = dice;
    // document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+ dice +'</em>';
    // var x = document.querySelector('#score-0').innerHTML;

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').innerHTML = "Player 1";
    document.getElementById('name-1').innerHTML = "Player 2";
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';


}