const balance = document.querySelector('#balance'),
    blueInput = document.querySelector('#betBlue'),
    redInput = document.querySelector('#betRed'),
    greenInput = document.querySelector('#betGreen'),
    yellowInput = document.querySelector('#betYellow'),
    purpleInput = document.querySelector('#betPurple'),
    pinkInput = document.querySelector('#betPink'),

    rollBtn = document.querySelector('#rollBtn');
    
var money = 500;
let newBalance = '';
balance.textContent = money;
let total = '';


// events
rollBtn.addEventListener('click', function(e) {
    let color1 = generateColor(Math.floor(Math.random() * 6 + 1)),
        color2 = generateColor(Math.floor(Math.random() * 6 + 1)),
        color3 = generateColor(Math.floor(Math.random() * 6 + 1));

    document.querySelector('.color1').style.backgroundColor = color1;
    document.querySelector('.color2').style.backgroundColor = color2;
    document.querySelector('.color3').style.backgroundColor = color3;
    
    const inputs = document.querySelectorAll('.bet');
    inputs.forEach(element => {
    thisBet = Number(element.value);
    
    })
    
    console.log(thisBet);
    e.preventDefault();
});

redInput.addEventListener('click', getRedValue);
blueInput.addEventListener('click', getBlueValue);
greenInput.addEventListener('click', getGreenValue);
yellowInput.addEventListener('click', getYellowValue);
purpleInput.addEventListener('click', getPurpleValue);
pinkInput.addEventListener('click', getPinkValue);

function generateColor(color) {
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




function getRedValue() {
    redInput.addEventListener('keyup', function() {
        redBet = parseInt(redInput.value);
        newBalance = money - redBet;

        if (redInput.value.length > 0) {
            balance.textContent = newBalance;
        }
        else {
            
        }
    })
}

function getBlueValue() {
    blueInput.addEventListener('keyup', function() {
        blueBet = parseInt(blueInput.value);
        newBalance = money - blueBet;

        if (blueInput.value.length > 0) {
            balance.textContent = newBalance;
        }
        else {
            
        }
    })
}

function getGreenValue() {
    greenInput.addEventListener('keyup', function() {
        greenBet = parseInt(greenInput.value);
        newBalance = money - greenBet;

        if (greenInput.value.length > 0) {
            balance.textContent = newBalance;
        }
        else {
            balance.textContent = money;
        }
    })
}

function getYellowValue() {
    yellowInput.addEventListener('keyup', function() {
        yellowBet = parseInt(yellowInput.value);
        newBalance = money - yellowBet;

        if (yellowInput.value.length > 0) {
            balance.textContent = newBalance;
        }
        else {
            balance.textContent = money;
        }
    })
}
function getPurpleValue() {
    purpleInput.addEventListener('keyup', function() {
        purpleBet = parseInt(purpleInput.value);
        newBalance = money - purpleBet;

        if (Number(purpleInput.value.length) > 0) {
            balance.textContent = newBalance;
        }
        else {
            balance.textContent = money;
        }
    })
}
function getPinkValue() {
    pinkInput.addEventListener('keyup', function() {
        pinkBet = parseInt(pinkInput.value);
        newBalance = money - pinkBet;

        if (Number(pinkInput.value.length) > 0) {
            balance.textContent = newBalance;
        }
        else {
            balance.textContent = money;
        }
    })
}
