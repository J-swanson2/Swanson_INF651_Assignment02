const answer = document.getElementById("guessHeader");
let x = Math.floor(Math.random() * 10);
function numberGuess() {
    
    let guessInput = document.getElementById("guess").value;
    if (guessInput == x) {        
        answer.textContent = "You got the answer!";
    }
    else {
        answer.textContent = "Incorrect Guess! Try again";
    }
            
}
