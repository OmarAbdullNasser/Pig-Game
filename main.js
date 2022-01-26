'use strict';
let player_1 = document.querySelector('.player--0');
let player_2 = document.querySelector('.player--1');

let scor_1 = document.querySelector('#score-0');
let current_1 = document.querySelector('#current-0');

let scor_2 = document.querySelector('#score-1');
let current_2 = document.querySelector('#current-1');

let new_game = document.querySelector('.new-game');
let dice = document.querySelector('#dice');
let new_roll = document.querySelector('.new-roll');
let hold = document.querySelector('.hold');


let scors = [0, 0];
let currentscor = 0;
let activePlayer = 0;
let playing = true;

//switch player
const switch_player = function() {
    //switch player
    document.querySelector(`#current-${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentscor = 0;
    player_1.classList.toggle('player--active');
    player_2.classList.toggle('player--active')
}

// Starting the game

scor_1.textContent = 0;
scor_2.textContent = 0;
dice.classList.add('hidden');

//Restrating the game


new_game.addEventListener('click', function() {
    scor_1.textContent = 0;
    scor_2.textContent = 0;
    current_1.textContent = 0;
    current_2.textContent = 0;
    dice.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    player_1.classList.add('player--active');
    player_2.classList.remove('player--active');
    playing = true;
    console.log(scors);
    scors = [0, 0];
    currentscor = 0;
    activePlayer = 0;
});

//Rolling the dice
new_roll.addEventListener('click', function() {
    if (playing) {
        //1.Gengrate random naumber between 1 and 6
        let randamNumber = Math.trunc(Math.random() * 6) + 1;
        console.log(randamNumber);

        //2.display the dice
        dice.classList.remove('hidden');
        dice.src = `dice-${randamNumber}.png`


        //3. check if dice=1 then switch to scand player
        if (randamNumber !== 1) {
            currentscor += randamNumber;
            document.querySelector(`#current-${activePlayer}`).textContent = currentscor;


        } else {
            switch_player()

        }
    }
});

hold.addEventListener('click', function() {
    if (playing) {
        //1.add current scor to active player scor 
        scors[activePlayer] += currentscor;
        document.querySelector(`#score-${activePlayer}`).textContent = scors[activePlayer]
            //2.check if player scor >=100
            //Finish game

        if (scors[activePlayer] >= 20) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            playing = false;
            dice.classList.add('hidden');
        } else {
            //switch player
            switch_player()
        }
    }
});
