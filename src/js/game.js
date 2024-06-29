import { WORDS, KEYBOARD_LETTERS } from "./consts"


const gameDiv = document.getElementById('game')

const logoH1 = document.getElementById('logo')

let triesLeft;
let winCount;

const createPlaceholdersHTML = () => {
    const word = sessionStorage.getItem('word')

    //1 массив отдельная буква слова
    const wordArray = Array.from(word);
    const placeholdersHTML = wordArray.reduce(
        (acc, curr, i) => acc + `<h1 id="letter_${i}" class="letter"> _ </h1>`,
        '',);
    return `<div id="placeholders" class="placeholders-wrapper" >${placeholdersHTML}</div>`

    //2 массив из числа черточек
    // const placeholdersArray = Array.from('_'.repeat(word.length));
    // const placeholdersHTML = placeholdersArray.reduce((acc, curr, i) => acc + `<h1 id="letter_${curr}" class="letter"> _ </h1>`, '')

}

const createKeyboard = () => {


    // создали элемент - div, присвоилиему class и id
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard')
    keyboard.id = 'keyboard'

    const keyboardHTML = KEYBOARD_LETTERS.reduce((acc, curr) => {
        return (
            acc +
            `<button class="button-primary keyboard-button" id="${curr}">${curr}</button>`
        )
    }, '')
    // пустая строка , что бы для первой итерации не попала буква, нужна буква обернутая в кнопку
    // keyboard-button для стилизации одной кнопки
    keyboard.innerHTML = keyboardHTML;
    return keyboard;
}

const createHangmanImg = () => {
    const image = document.createElement('img')
    //Добавление src 1 способ
    image.src = 'images/hg-0.png'

    image.alt = 'hangman image'
    image.classList.add('hangman-img')
    image.id = 'hangman-img'

    return image;
}

const checkLetter = (letter) => {
    const word = sessionStorage.getItem('word')
    const inputLetter = letter.toLowerCase()
    // если буквы нет
    if (!word.includes(inputLetter)) {
        const triesCounter = document.getElementById('tries-left')
        triesLeft -= 1
        triesCounter.innerText = triesLeft;

        const hangmanImg = document.getElementById('hangman-img')
        hangmanImg.src = `images/hg-${10 - triesLeft}.png`;

        if (triesLeft === 0) {
            stopGame('lose')
        }

    } else {
        // если буква есть
        const wordArray = Array.from(word);
        wordArray.forEach((curretLetter, i) => {
            if (curretLetter === inputLetter) {
                winCount += 1;
                if (winCount === word.length) {
                    stopGame('win');
                    return;
                }
                document.getElementById(`letter_${i}`).innerText = inputLetter.toUpperCase()
            }

        })
    }

}

const stopGame = (status) => {

    document.getElementById('placeholders').remove()
    document.getElementById('tries').remove()
    document.getElementById('keyboard').remove()
    document.getElementById('quit').remove()

    const word = sessionStorage.getItem('word')


    if (status === 'win') {
        //сценарий выйгрыш
        document.getElementById('hangman-img').src = 'images/hg-win.png'
        document.getElementById('game').innerHTML += '<h2 class="result-header win">You won :) </h2>'
    } else if (status === 'lose') {
        //сценарий проигрыш
        document.getElementById('game').innerHTML += '<h2 class="result-header lose">You lost :( </h2>';
    } else if (status === 'quit') {
        console.log(status)
        logoH1.classList.remove('logo-sm')
        document.getElementById('hangman-img').remove();

    }

    document.getElementById(
        'game',
    ).innerHTML += `<p>The word was: <span class="result-word"> ${word} </span> </p><button id="play-again"
    class="button-primary px-5 py-2 mt-5"> Play again </button>`;
    document.getElementById('play-again').onclick = startGame;
};


export const startGame = () => {
    triesLeft = 10;
    winCount = 0;

    logoH1.classList.add('logo-sm');
    const randomIndex = Math.floor(Math.random() * WORDS.length)
    const wordToGuess = WORDS[randomIndex]
    sessionStorage.setItem('word', wordToGuess)
    // добавление плейсхолдера
    gameDiv.innerHTML = createPlaceholdersHTML()
    // добовляем счетчик попыток
    gameDiv.innerHTML += '<p id="tries" class="mt-4 mb-4">TRIES LEFT: <span id="tries-left" class="font-medium text-red-600" > 10 </span></p>'

    const keyboardDiv = createKeyboard()

    //     добавить дочерний элемент, добавит то что мы передадим внутри перед закрывающим тегом
    // добавляем слушатель на клик, добавляем на весь элемнет клавиатура
    // window.addEventListener('click', () => { console.log('Hello'); })
    keyboardDiv.addEventListener('click', (event) => {
        // console.log(event.target.id);
        // console.log(event.target.tagName);
        if (event.target.tagName.toLowerCase() === 'button') {
            event.target.disabled = true;
            checkLetter(event.target.id)

        }
    })

    const hangmanImg = createHangmanImg();
    gameDiv.prepend(hangmanImg)
    // добавление клавиатуры
    gameDiv.appendChild(keyboardDiv)


    gameDiv.insertAdjacentHTML(
        'beforeend',
        '<button id="quit" class="button-secondary px-2 py-1 mt-4"> Quit </button>')
    document.getElementById('quit').onclick = () => {
        const isSure = confirm('Are you sure you want to quit and lose progress?')
        if (isSure) {
            stopGame('quit');
        }

    }
}





// обьеяснение reduce
// const numbers = [1, 2, 3, 4, 5]
// const result = numbers.reduce((acc, curr) => {
//     return (acc + curr * 2)
// })
// console.log(result);
// в качестве acc попадает первый элемет массива
// curr начинается со второго элемента а 0 установленный покажет что первый curr будет начинаться с 1цы
