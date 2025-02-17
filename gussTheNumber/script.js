let randomNum = parseInt(Math.random() *100 +1); // parsInt give int val

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#gussField');
const guessSlot = document.querySelector('.guesses');
const reamining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultPass');

const p = document.createElement('p')

let prevGuess = [];
let numGuesses = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault(); // there prevent the event to go anywhere
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    });
}


function validateGuess(guess){
    //valide input
    if(isNaN(guess)){
        alert('plase enter the valide number');
    }else if(guess < 1){
        alert('plase enter the number greater then 1');
    }else if(guess > 100){
        alert('plase enter the number lessthen 100');
    }else{
        prevGuess.push(guess)
        if(numGuesses === 11){
            displayGuess(guess)
            displayMessagas(`game over Random number was ${randomNum}`);
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}


function checkGuess(guess){
    //check the input
    if(guess === randomNum){
        displayMessagas(`you guessed the right 🎉🎊`)
        endGame()
    }else if(guess < randomNum){
        displayMessagas(`number is less then random number`)
    }else if( guess > randomNum){
        displayMessagas(`number is greater then random number`)
    }else{
        displayMessagas(`this function used for check guess`)
    }
}

function displayGuess(guess){
    // it's cleanUp guess
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `
    numGuesses++
    reamining.innerHTML = `${11 - numGuesses}`  
}

function displayMessagas(message){
    // display the message interact with dom
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
 userInput.value ='';
 userInput.setAttribute('disabled','')
 p.classList.add('button')
 p.innerHTML =`<h2 id="newGame">start new game</h2>`;   
 startOver.appendChild(p)
 playGame = false
 newgame()
}

function newgame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click',function(){
        randomNum  = parseInt(Math.random() *100 +1);
        prevGuess = []
        numGuesses = 1
        displayMessagas ('');
        guessSlot.innerHTML =''
        reamining.innerHTML = `${11 - numGuesses}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}


