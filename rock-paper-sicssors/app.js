
var firstPlayer = document.querySelector('.first-opponent');
var secondPlayer = document.querySelector('.second-opponent');
var firstBtn = document.querySelector('.roll-1');
var secondBtn = document.querySelector('.roll-2');
var firstScore = document.querySelector('.score-1');
var secondScore = document.querySelector('.score-2');
var clearBtn = document.querySelector('.clear');
var finalResult = document.querySelector('span.result');
var valOfFirst = document.querySelector('.random-1');
var valOfSecond = document.querySelector('.random-2');
let threshold = 100;
let score1 = 0
let score2 = 0
let firstVal = '';
let secondVal = '';



const arrayOfValues = ['rock', 'papper', 'scissors'];

function getRandom() {
    let randomNum = Math.floor(Math.random() * 3);

    let randomVal = arrayOfValues[randomNum]
    return randomVal
}

function first() {

    let first = getRandom()
    turn(first, 'firstPlayer')
}
function second() {

    let second = getRandom()
    turn(second, 'secondPlayer')

}

function turn(val, str) {


    if (str === 'firstPlayer') {

        firstBtn.removeEventListener('click', first)
        valOfFirst.setAttribute("src", `./img/${val}.png`) 
        firstVal = val

    } else if (str === 'secondPlayer') {
        secondBtn.removeEventListener('click', second)
        valOfSecond.setAttribute("src", `./img/${val}.png`) 
        secondVal = val
    }

    if (firstVal !== '' && secondVal !== '') {
        setTimeout(function () {
            cases(firstVal, secondVal)
        },
            1500);

    }




}

function setAgain() {

    valOfFirst.setAttribute("src", ``) 
    valOfSecond.setAttribute("src", ``) 
    firstVal = ''
    secondVal = ''
    firstBtn.addEventListener("click", first)
    secondBtn.addEventListener("click", second)
    firstScore.innerHTML = score1
    secondScore.innerHTML = score2

    if (checkIfThreshold(score1)) {
        finalResult.innerHTML = "Game ended Player One win"
        clear()
        playAgain()
    }
    if (checkIfThreshold(score2)) {
        finalResult.innerHTML = "Game ended Player two win"
        clear()
        playAgain()
    }

}

function checkIfThreshold(score) {
    return score >= threshold
}


function WriteTheScore(final) {

    if (final === 'win-1') {
        score1++
        finalResult.innerHTML = 'Point for the player1'

    } else if (final === 'win-2') {
        score2++
        finalResult.innerHTML = 'Point for the player2'
    } else if (final === 'draw') {
        finalResult.innerHTML = 'draw'
    }


setAgain()

}

function cases(randomFirst, randomSecond) {

    switch (`${randomFirst}_${randomSecond}`) {
        case 'rock_rock':
            WriteTheScore('draw')
            break;
        case 'papper_papper':
            WriteTheScore('draw')
            break;
        case 'scissors_scissors':
            WriteTheScore('draw')
            break;
        case 'scissors_papper':
            WriteTheScore('win-1')
            break;
        case 'rock_scissors':
            WriteTheScore('win-1')
            break;
        case 'papper_rock':
            WriteTheScore('win-1')
            break;
        case 'papper_scissors':
            WriteTheScore('win-2')
            break;
        case 'scissors_rock':
            WriteTheScore('win-2')
            break;
        case 'rock_papper':
            WriteTheScore('win-2')
            break;
        default:
            WriteTheScore('draw')
    }
}

function clear() {
    score1 = 0
    score2 = 0
    valOfSecond.setAttribute("src", ``) 
    valOfSecond.setAttribute("src", ``) 
    firstScore.innerHTML = 0
    secondScore.innerHTML = 0
    valOfFirst = ''
    valOfSecond = ''
    firstScore = ''
    secondScore = ''


}


function playAgain() {
    var r = confirm("Play Again?");
    if (r == true) {
        location.reload()
    } else {
        console.log('no')
    }
}

firstBtn.addEventListener("click", first)

secondBtn.addEventListener("click", second)
clearBtn.addEventListener("click", clear)


    // if(firstClicked && !secondClicked){ 
    //     removeTheEvent(firstBtn)
    // }
    // if(!firstClicked && secondClicked){ 
    //     removeTheEvent(secondBtn)
    // }
    // function removeTheEvent(btn) {
    //     btn.removeEventListener('click')
    //  }

