
function numberGuess() {
    const answer = document.getElementById("guessHeader");
    let x = Math.floor(Math.random() * 10);
    let running = true;

    while (running) {
        let guessInput = prompt("Enter a number")//document.getElementById("guess").value;
        if (guessInput == x) {
            answer.textContent = "You got the answer! It was: " + x;
            running = false;
        }
    }
            
}

function passwordSet() {
    let password = prompt("Enter a password"); //initial prompt
    let running = true;
    do {

        let checkPassword = prompt("Confirm Password");

        if (password == checkPassword) {
            running = false;
        }
        else {
            password = prompt("Password mismatch, please start over with a new Password");
        }
    }
    while (running)

    document.getElementById("confirmPrompt").textContent = "Password set succesful!";
}


