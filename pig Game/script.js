'use strict';
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
let scores=[0,0];
let counterScore=0;
let playing=true;
let activePlayer=0;
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');
// roll dice function
btnRoll.addEventListener('click' , function(){
    if(playing)
    {
    const dice =Math.trunc(Math.random()*6)+1;
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `./images/dice-${dice}.png`;
    if(dice !==1)
    {
        counterScore +=dice;
        document.getElementById(`current--${activePlayer}`).textContent=counterScore;
       
    }
    else
    {
        document.getElementById(`current--${activePlayer}`).textContent=0;
        counterScore=0;
        activePlayer=activePlayer===0?1:0;
        player0El.classList.toggle('player-active');
        player1El.classList.toggle('player-active');
    }
}
});
btnHold.addEventListener('click' , function(){
    if(playing)
    {
        scores[activePlayer] +=counterScore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        if(scores[activePlayer]>=20)
        {
            playing=false
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.add('player-active');
        }
        else
        {
             document.getElementById(`current--${activePlayer}`).textContent=0;
             counterScore=0;
             activePlayer=activePlayer===0?1:0;
             player0El.classList.toggle('player-active');
             player1El.classList.toggle('player-active');
        }
    }
});
btnNew.addEventListener('click' , function(){
    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player-active');
    player1El.classList.add('player-active');


});