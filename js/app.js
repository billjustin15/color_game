// Game Values
const balance = document.querySelector('#money'),
      color1 = document.querySelector('#color1'),
      color2 = document.querySelector('#color2'),
      color3 = document.querySelector('#color3'),
      betRed = document.querySelector('#bet-red'),
      betBlue = document.querySelector('#bet-blue'),
      betYellow = document.querySelector('#bet-yellow'),
      betGreen = document.querySelector('#bet-green'),
      betOrange = document.querySelector('#bet-orange'),
      betPink = document.querySelector('#bet-pink'),
      bRed = document.querySelector('#b-red'),
      bBlue = document.querySelector('#b-blue'),
      bYellow = document.querySelector('#b-yellow'),
      bGreen = document.querySelector('#b-green'),
      bOrange = document.querySelector('#b-orange'),
      bPink = document.querySelector('#b-pink'),
      totalBets = document.querySelector('#total-bet'),
      lockBtn = document.querySelector('#lock-bet'),
      won = document.querySelector('#winnings'),
      lost = document.querySelector('#losses'),
      rollBtn =  document.querySelector('#roll'),
      gameBtns = document.querySelector('#game-buttons');
      
// Initialize Money/Winnings/Losses
let money = 500, winnings = 0, losses = 0;
balance.textContent = money;

// Pick Color
function colorPick(num) {
  switch(num) {
    case 1: return 'red';
      break;
    case 2: return 'blue';
      break;
    case 3: return 'yellow';
      break;
    case 4: return 'green';
      break;
    case 5: return 'orange';
      break;
    case 6: return 'pink';
      break;
  }
}

// Calculate Winnings 
function calcWinnings() {
  // create winning colors array
  let colors = [color1, color2, color3];
  // create array of each input field
  let bets = [betRed, betBlue, betYellow, betGreen, betOrange, betPink];

  // Count Winning Colors and add to winnings
  colors.forEach(color => {
    if(color.style.backgroundColor === 'red') {
      winnings += Number(betRed.value);
    }

    if(color.style.backgroundColor === 'blue') {
      winnings += Number(betBlue.value);
    }

    if(color.style.backgroundColor === 'yellow') {
      winnings += Number(betYellow.value);
    }

    if(color.style.backgroundColor === 'green') {
      winnings += Number(betGreen.value);
    }

    if(color.style.backgroundColor === 'orange') {
      winnings += Number(betOrange.value);
    }

    if(color.style.backgroundColor === 'pink') {
      winnings += Number(betPink.value);
    }
  });
  
  // Check bets if matched with winning colors
  bets.forEach(bet => {
    // check if the player puts a bet on the color 
    if(Number(bet.value) === 0 )
    {
      // resets the border style
      bet.style.border = 'solid 2px none';
    } else {
      // check if matches any winning colors and sets border to green if match is found, else set border to red and add to losses
      if(Number(bet.value) !== 0 && String(color1.style.backgroundColor) === bet.previousElementSibling.id) {
        bet.style.border = 'solid 2px green';
        winnings
      } else if(Number(bet.value) !== 0 && String(color2.style.backgroundColor) === bet.previousElementSibling.id){
        bet.style.border = 'solid 2px green';
      } else if(Number(bet.value) !== 0 && String(color3.style.backgroundColor) === bet.previousElementSibling.id){
        bet.style.border = 'solid 2px green';
      } else {
        bet.style.border = 'solid 2px red';
        losses += Number(bet.value);
      }
    }
  });

  // display winnings and losses
  won.textContent = winnings;
  lost.textContent = losses;
  // calculate total money
  money = (money + winnings) - losses;

  if(checkIfLose(money))
  {
    rollBtn.disabled = true;
    lockBtn.disabled = true;
    alert('YOU LOSE!');

    // Play Again Button Template String
    let html = ` 
      <div class="col s12 center-align">
        <button id="play-again" class="btn btn-large black white-text waves-effect waves-light" onclick="resetGame()">Play Again</button>
      </div>
    `;
    
    // Replace Lock & Roll Buttons with Play Again
    gameBtns.innerHTML = html;

    playAgainBtn = document.querySelector('#play-again');

    return money;
  } else {
    // reset winnings and losses
    losses = 0;
    winnings= 0;
    return money;
  }
}

// Calculate Total Bet
function calcBets() {
  let b1 = Number(betRed.value),
      b2 = Number(betBlue.value),
      b3 = Number(betYellow.value),
      b4 = Number(betGreen.value),
      b5 = Number(betOrange.value),
      b6 = Number(betPink.value);

  // Calculate total bets
  let totalBet = Number(b1+b2+b3+b4+b5+b6);

  if(totalBet !== 0 && totalBet < money)
  {
    // Set bet on each color in UI
    bRed.textContent = b1;
    bBlue.textContent = b2;
    bYellow.textContent = b3;
    bGreen.textContent = b4;
    bOrange.textContent = b5;
    bPink.textContent = b6;
     // Set Total bet in UI
    totalBets.textContent = totalBet;
  }

  return totalBet;
}

// Update Total Money
function calcBalance(totalBet) {
  money -= totalBet;
  balance.textContent = money;
}

// Check if Won or Lost
function checkIfLose (bal) {
  if(bal === 0) {
    return true;
  } else {
    return false;
  }
}

// Adjust Bet
function adjustBet() {
  alert('Money is not enough. Please adjust your bet');
  //  Enable all bet input fields
  betRed.disabled = betBlue.disabled = betYellow.disabled = betGreen.disabled = 
  betOrange.disabled = betPink.disabled = false;
  //  Disable Roll Dice Button
  rollBtn.disabled = true;
  //  Change btn to 'Lock Bet
  lockBtn.textContent = 'Lock Bet';
}

// Animate Box
function animateBox(box){
  // Add class animate
  box.className = 'box animate';

  // Remove animate class
  setTimeout(function() {
    box.classList.remove('animate');
  }, 2000);
}

// Reset Game
function resetGame() {
  document.location.reload();
}

// Lock Bet Button Listener
lockBtn.addEventListener('click', () => {
  // Check if Player placed bet
  if(calcBets() === 0) {
    // Alert player to place bet
    alert('Please place your bet.');
  } else {
    // Check if Player locked his/her bet and money is enough
    if(calcBets() > money) {
      adjustBet();
    } else {
      // Toggle between Lock and Change Bet
      if(lockBtn.textContent === 'Lock Bet' && rollBtn.disabled === true) {
        //  Disable all bet input fields
        betRed.disabled = betBlue.disabled = betYellow.disabled = betGreen.disabled = 
        betOrange.disabled = betPink.disabled = true;
        //  Change btn to 'Change Bet
        lockBtn.textContent = 'Change Bet';
        //  Enable Roll Dice Button
        rollBtn.disabled = false;
        totalBets.textContent = calcBets();
      } else {
        //  Enable all bet input fields
        betRed.disabled = betBlue.disabled = betYellow.disabled = betGreen.disabled = 
        betOrange.disabled = betPink.disabled = false;
        //  Disable Roll Dice Button
        rollBtn.disabled = true;
        //  Change btn to 'Lock Bet
        lockBtn.textContent = 'Lock Bet';
      } 
    }    
  }
});

// Roll Button listener
rollBtn.addEventListener('click', e => {
  e.preventDefault();
  // Generate Random Colors
  let c1 = colorPick(Math.floor(Math.random() * 6 + 1)),
      c2 = colorPick(Math.floor(Math.random() * 6 + 1)),
      c3 = colorPick(Math.floor(Math.random() * 6 + 1));

  // Check if player has enough money to roll
  if(money >= calcBets()) {
    // Sets background Color of each box
    color1.style.backgroundColor = c1;
    color2.style.backgroundColor = c2;
    color3.style.backgroundColor = c3;

    // Update Money
    balance.textContent = calcWinnings();
  } else {
    adjustBet();
  }
});