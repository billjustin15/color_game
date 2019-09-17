const balance = getQuery('balance'),
    totalwins = getQuery('win'),
    totalloses = getQuery('lose'),
    error = getQuery('error'),
    rollBtn = document.querySelector('#rollBtn');
 
var money = 500;
let totalbet = 0
let wins = 0;
let loses = 0;
// puts each bet into an objet with the property of their color
let bets = {betred: 0, betblue: 0, betgreen: 0, betyellow: 0, betpurple: 0, betpink: 0}
// unchangeable colors
const allColors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple'];   
let temp = allColors;

// to display money, wins and loses
balance.textContent = money;
totalwins.textContent = wins;
totalloses.textContent = loses;


// events
rollBtn.addEventListener('click', function(e) {
    // generate random colors based on switch below
    let color1 = randomColor(Math.floor(Math.random() * 6 + 1)),
        color2 = randomColor(Math.floor(Math.random() * 6 + 1)),
        color3 = randomColor(Math.floor(Math.random() * 6 + 1));

    // changes the colors of color-blocks in html
    document.querySelector('.color1').style.backgroundColor = color1;
    document.querySelector('.color2').style.backgroundColor = color2;
    document.querySelector('.color3').style.backgroundColor = color3;
    
    // assigns colors into array to be used for foreach
    let generatedColors = [color1, color2, color3];
    

    // selects each color
    generatedColors.forEach(color => {
        // part for wins
        // appends generated color into "bet"
        let thisColor = (`bet${color}`)
        // selects the input with the id of color using function getQuery
        getValue = getQuery(thisColor)
        // adds bet amount to money
        money += Number(getValue.value)
        wins += Number(getValue.value)
        // updates balance on html
        balance.textContent = money;
        totalwins.textContent = wins
        // to remove color from temp array
        removeColor(color);
    })
    
    // selects each colors remaining on temp
    temp.forEach(color => {
        // part for loses
        let thisColor = (`bet${color}`)
        // selects the input with the id of color using function getQuery
        getValue = getQuery(thisColor)
        // adds bet amount to money
        money -= Number(getValue.value)
        loses -= Number(getValue.value)
        balance.textContent = money;
        totalloses.textContent = loses;
        console.log(`${color}  :  ${Number(getValue.value)}:  ${money}`)
    })
    
    e.preventDefault();
});

// selects all input fields
let sample = document.querySelectorAll('.bet');
    // does something for each input field returned
    sample.forEach(input => {
        // adds an event when input field is de-selected
        input.addEventListener('blur', _ => {
            // gets the id name of the input field to be used for assigning the value into their respective color name in the array
            color = input.id
            // gets the value of the input field
            value = Number(input.value)
            // switches into each input 
            switch(color) {
                // gets the color name and assigns the input value into the array
                case 'betred' :bets.betred = value
                // calls the function for subtracting bets from money
                getTotal()
                checkBetAndMoney(color)
                break;
                case 'betblue':bets.betblue = value
                getTotal()
                checkBetAndMoney(color)
                break;
                case 'betgreen':bets.betgreen = value
                getTotal()
                checkBetAndMoney(color)
                break;
                case 'betyellow':bets.betyellow = value
                getTotal()
                checkBetAndMoney(color)
                break;
                case 'betpurple': bets.betpurple = value
                getTotal()
                checkBetAndMoney(color)
                break;
                case 'betpink':bets.betpink = value
                getTotal()
                checkBetAndMoney(color)
                break;
            }
            
        })        
    })

// for getting the ids from html
// made into function to prevent repetition of document.getElemenyById
function getQuery(target) {
    return document.getElementById(target);
}
// assigns colors to each number that will be used to generate colors
function randomColor(color) {
    switch(color) {
        case 1: return 'red';
        break;
        case 2: return 'blue';
        break;
        case 3: return 'green';
        break;
        case 4: return 'yellow';
        break;
        case 5: return 'purple';
        break;
        case 6: return 'pink';
        break;
    }
}

// will be used to filter colors (remove winning colors)
function removeColor(color) {  
    temp = temp.filter(temp => {
        return temp != color;
    })
}

// real time output of money
// for subtracting the input value from money
function getTotal() {
    // everytime this function is called, y will be 0 and will count each color input value all over again
    let y = 0
    // for each x(index)/color in bets
    for (let x in bets) {
        // adds all amount to y
        y += bets[x]
    }
    
    // assigns value of y to totalbet for subtracting to money
    totalbet = y
    balance.textContent = money - totalbet
}


// disables the roll button if bet is greater than money
function checkBetAndMoney (color) {
    if (totalbet > money) {
        rollBtn.removeAttribute('disabled')
        error.textContent = 'Insufficient Balance. Please lower your bet to continue playing.'
    }
    else {
        rollBtn.setAttribute('disabled', '')
        error.textContent = '';
    }
}