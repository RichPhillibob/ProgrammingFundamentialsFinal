// This is a program where the user inputs a number between 1 and 100. The computer also rolls a random number. 
// The program checks to see which number is higher and assigns a 'point' to the winner.
// First to 3 points wins.
// Developed by Aidan Olson for Programming Fundamentals 

function HigherThanNumberGame() {

    // Declare global variables
    var usrNbr;
    var comNbr;
    var usrWins = 0;
    var comWins = 0;
    var gameOver = false;

    // Checks to see if number is valid
    function PickingNumber() {
        while (true) {
            usrNbr = prompt('Pick a number between 1 and 100 or type \'exit\' to quit');

            if (usrNbr === 'exit') {
                alert('Chickening out? Weak.');
                gameOver = true;
                return;
            }

            if (usrNbr < 1 || usrNbr > 100) {
                alert('That number is invalid. Please enter a number between 1 and 100');
            } else {
                break;
            }
        }
    }    
        
    // Higher or lower check takes place here
    function DoingCalculations() {
        while (gameOver === false) {
            PickingNumber();
            if (gameOver === true) {
                break;
            }

            comNbr = Math.round(Math.random() * 100);
            document.write('You entered: ' + usrNbr + '<br>The computer rolled: '+ comNbr + '<br>');

            if (usrNbr > comNbr) { 
               document.write('You won the round!<br><br>');
                usrWins++;
            } else if (usrNbr < comNbr) {
                document.write('You lost the round, sorry.<br><br>');
                comWins++;
            } else {
                document.write('A tie! You both had the same number!<br><br>');
            }

            if (usrWins === 3){
                document.write('Game over! You won three rounds!');
                gameOver = true;
                break;
            } if (comWins === 3) {
                document.write('Game over. Sorry, the computer won 3 rounds.');
                gameOver = true;
                break;
            }
        }

        // This line of code clears any existing text on program exit
        if (usrNbr === 'exit') { 
            document.body.innerHTML = 'Shame on you.'; // Argument found on https://stackoverflow.com/questions/1829370/clear-html-page-using-javascript
        }
    }

    DoingCalculations();
}

HigherThanNumberGame();