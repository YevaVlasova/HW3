// Функція 1
const getMaxDigit = (number) => {
    let maxDigit = 0;
    const numberString = number.toString();
  
    for (let i = 0; i < numberString.length; i++) {
        const digit = parseInt(numberString[i]);
        if (digit > maxDigit) {
            maxDigit = digit;
        }
    }
  
    return maxDigit;
};
  
const number = prompt("Введіть будь-яке число:");
const result = getMaxDigit(number);
console.log(`Найбільша цифра в числі ${number}: ${result}`);

// Функція 2
const calculatePower = () => {
    const base = prompt("Введіть число:");
    const exponent = prompt("Введіть число (показник степеня):");
  
    let result = 1;
  
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
  
    return result;
};

const power = calculatePower();
console.log(`Результат числа піднесеного до степеня: ${power}`);

// Функція 3
const formatName = (name) => {
    const firstLetter = name.charAt(0).toUpperCase();
    const restOfName = name.slice(1).toLowerCase();
  
    return firstLetter + restOfName;
};
  
const name = prompt("Введіть ім'я:");
const formattedName = formatName(name);
console.log(`Форматоване ім'я: ${formattedName}`);

// Функція 4
const calculateNetSalary = (salary) => {
    const taxRate = 0.195; // 19.5%
    const netSalary = salary * (1 - taxRate);
    return netSalary;
};

const grossSalary = prompt("Введіть вартість заработної плати:");
const netSalary = calculateNetSalary(grossSalary);
console.log(`Сума заробітньої плати після оплати податку: ${netSalary}`);

// Функція 5
const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const minValue = prompt("Введіть мінімальне значення:");
const maxValue = prompt("Введіть максимальне значення:");
const randomNum = getRandomNumber(minValue, maxValue);
console.log(`Випадкове число в діапазоні від ${minValue} до ${maxValue}: ${randomNum}`);

// Функція 6
const countLetter = (letter, word) => {
    const lowercaseLetter = letter.toLowerCase();
    const lowercaseWord = word.toLowerCase();
  
    let count = 0;
    for (let i = 0; i < lowercaseWord.length; i++) {
        if (lowercaseWord[i] === lowercaseLetter) {
            count++;
        }
    }
  
    return count;
};

const letter = prompt("Введіть букву:");
const word = prompt("Введіть слово:");
const letterCount = countLetter(letter, word);
console.log(`Кількість повторень букви "${letter}" в слові "${word}": ${letterCount}`);

// Функція 7
const convertCurrency = (amount) => {
    const dollarSymbol = "$";
    const uahSymbol = "UAH";
  
    if (amount.includes(dollarSymbol)) {
        const value = parseFloat(amount);
        if (!isNaN(value)) {
            const uahAmount = value * 36;
            return `${uahAmount.toFixed(2)} грн.`;
        }
    } else if (amount.includes(uahSymbol.toUpperCase())) {
        const value = parseFloat(amount);
        if (!isNaN(value)) {
            const dollarAmount = value / 36;
            return `${dollarAmount.toFixed(2)}$`;
        }
    }
  
    return "Помилка: Невідома валюта або некоректний формат суми";
};

const input = prompt("Введіть суму в доларах або гривнях:");
const convertedAmount = convertCurrency(input);
console.log(`Конвертована сума: ${convertedAmount}`);

// Функція 9
const getRandomPassword = (length = 8) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomDigit = Math.floor(Math.random() * 10);
        password += randomDigit;
    }
    return password;
};

const userInput = prompt("Введіть довжину пароля (за замовчуванням 8):");
const passwordLength = parseInt(userInput);
const randomPassword = getRandomPassword(passwordLength);
console.log(`Згенерований випадковий пароль довжиною ${passwordLength} цифр: ${randomPassword}`);

// Функція 10
const deleteLetters = (letter, sentence) => {
    const regex = new RegExp(letter, "gi");
    const modifiedSentence = sentence.replace(regex, "");
    return modifiedSentence;
};

const inputSentence = prompt("Введіть речення:");
const letterToDelete = prompt("Введіть букву, яку потрібно видалити:");

const modifiedSentence = deleteLetters(letterToDelete, inputSentence);
console.log(`Введено ${inputSentence}, видалено літеру ${letterToDelete}, отримано в результаті таку кракозябру: ${modifiedSentence}`);