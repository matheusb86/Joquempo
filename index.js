var $stoneButton1 = document.querySelector('.button-stone-player-1')
var $paperButton1 = document.querySelector('.button-paper-player-1')
var $scissorsButton1 = document.querySelector('.button-scissors-player-1')

var $stoneButton2 = document.querySelector('.button-stone-player-2')
var $paperButton2 = document.querySelector('.button-paper-player-2')
var $scissorsButton2 = document.querySelector('.button-scissors-player-2')

const $fieldPlayer1 = document.querySelector('.field-player-1')
const $fieldPlayer2 = document.querySelector('.field-player-2')

const $winnerTitle = document.querySelector('.winner-title')

let movePlayer1 = ''
let movePlayer2 = ''
let gameResult = null

function verifyWinner() {
    if (movePlayer1 == 'stone' && movePlayer2 == 'paper'){
        gameResult = 2
    } else if ( movePlayer1 == 'stone' && movePlayer2 == 'scissors'){
        gameResult = 1
    } else if (movePlayer1 == 'paper' && movePlayer2 == 'stone'){
        gameResult = 1
    } else if ( movePlayer1 == 'paper' && movePlayer2 == 'scissors'){
        gameResult = 2
    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'stone'){
        gameResult = 2
    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'paper'){
        gameResult = 1
    } else if (movePlayer1 == movePlayer2){
        gameResult = 0
    }
}

function printGameResult(){
    if (gameResult == 0 ){
        $winnerTitle.innerHTML = 'Empatou!'
    } else if (gameResult == 1 ) {
        $winnerTitle.innerHTML = 'Jogador 1 ganhou!'
    } else if (gameResult == 2 ) {
        $winnerTitle.innerHTML = 'Jogador 2 ganhou!'
    }
}


$stoneButton1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img class="move-image" src="img/stone.png">'
    movePlayer1 = 'stone'
    verifyWinner()
    printGameResult()
})

$paperButton1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img class="move-image" src="img/paper.png">'
    movePlayer1 = 'paper'
    verifyWinner()
    printGameResult()
})

$scissorsButton1.addEventListener('click', function (){
    $fieldPlayer1.innerHTML = '<img class="move-image" src="img/scissors.png">'
    movePlayer1 = 'scissors'
    verifyWinner()
    printGameResult()
})

$stoneButton2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = '<img class="move-image" src="img/stone.png">'
    movePlayer2 = 'stone'
    verifyWinner()
    printGameResult()
})

$paperButton2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = '<img class="move-image" src="img/paper.png">'
    movePlayer2 = 'paper'
    verifyWinner()
    printGameResult()
})

$scissorsButton2.addEventListener('click', function (){
    $fieldPlayer2.innerHTML = '<img class="move-image" src="img/scissors.png">'
    movePlayer2 = 'scissors'
    verifyWinner()
    printGameResult()
})