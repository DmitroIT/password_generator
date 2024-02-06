let
    symbolsCheck = document.getElementById('symbols'),
    numbersCheck = document.getElementById('numbers'),
    lettersCheck = document.getElementById('letters'),
    lengthItem = document.getElementById('length'),
    passwordField = document.getElementById('output'),
    generateBtn = document.getElementById('generate'),
    boxGenerator = document.getElementById('box-generator'),

    // TODO
    copyBtn = document.getElementById('copy'),



    
    charSymbols = '(&^)!@#$%^&*/',
    charNumbers = '1234567890',
    charLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';


generateBtn.addEventListener('click', () => {
    let password = '';

    let letters = '';

    if (!numbersCheck.checked && !symbolsCheck.checked && !lettersCheck.checked) {
        passwordField.textContent = 'треба хоч щось вибрати';
        return;
    }

    if (numbersCheck.checked) {
        letters += charNumbers;
    }

    if (symbolsCheck.checked) {
        letters += charSymbols;
    }

    if (lettersCheck.checked) {
        letters += charLetters
    }




    for (let i = 0; i < lengthItem.value; i++) {
        password += letters[Math.floor(Math.random() * letters.length)];
    }

    passwordField.textContent = password;
})









