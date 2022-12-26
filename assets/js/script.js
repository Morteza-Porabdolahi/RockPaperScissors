const hands = $.querySelectorAll('.main__container .hand');
const playerPickedHandElem = $.querySelector('.game__container .hand:first-child');
const mainContainer = $.querySelector('.main__container');
const restartBtn = $.querySelector('.restart-btn');
const resultElem = $.querySelector('.result');
const resultContaienr = $.getElementById('result-container');
const playerScore = $.querySelector('.score__number');

let playerPick;
let computerPick;

hands.forEach(hand => hand.addEventListener('click', startGame));
restartBtn.addEventListener('click', restartGame);

function startGame(e) {
    const clickedHand = e.target.closest('.hand');
    const handId = clickedHand.dataset.id;
    const handImage = clickedHand.firstElementChild.cloneNode(true);

    playerPick = handId;
    mainContainer.classList.remove('active');

    playerPickedHandElem.append(handImage);
    playerPickedHandElem.className = `hand ${playerPick}-hand`;
    playerPickedHandElem.style.backgroundColor = '#fff';

    pickARandomHand();
}

function pickARandomHand() {
    const computerPickedHandElem =
        $.querySelector('.game__container .hand-container:last-child > .hand');
    const pickedHandElementImage = computerPickedHandElem.firstElementChild;

    const hands = ['scissors', 'rock', 'paper'];
    const randomNumber = Math.floor(Math.random() * hands.length);
    const randomHand = hands[randomNumber];

    computerPick = randomHand;

    resetImagesAndTexts(computerPickedHandElem);

    setTimeout(() => {
        computerPickedHandElem.className = `hand ${computerPick}-hand`;
        computerPickedHandElem.style.backgroundColor = '#fff';

        pickedHandElementImage.src = `./assets/images/icon-${randomHand}.svg`;
        pickedHandElementImage.className = `${randomHand}-img`;
        pickedHandElementImage.alt = `${randomHand} Image`;

        chooseTheWinner();
    }, 1500);
}

function resetImagesAndTexts(computerPickedHandElem) {
    const computerPickedHandElemImage = computerPickedHandElem.firstElementChild;

    computerPickedHandElem.className = `hand`;
    computerPickedHandElem.style.backgroundColor = '';
    computerPickedHandElemImage.src = '';
    computerPickedHandElemImage.alt = '';

    resultContaienr.classList.remove('active');
}

function chooseTheWinner() {
    resultContaienr.classList.add('active');

    if (playerPick === computerPick) {
        resultElem.innerHTML = 'TIE !';
    } else {
        switch (true) {
            case (playerPick === 'paper' && computerPick === 'rock'): {
                winTheGame();
                break;
            }
            case (playerPick === 'rock' && computerPick === 'scissors'): {
                winTheGame();
                break;
            }
            case (playerPick === 'scissors' && computerPick === 'paper'): {
                winTheGame();
                break;
            }
            default: {
                looseTheGame();
                break;
            }

        }
    }

}

function looseTheGame() {
    resultElem.innerHTML = 'YOU <span style="color : #e00404;">LOOSE !</span>';
    playerScore.textContent--;
}

function winTheGame() {
    resultElem.innerHTML = 'YOU <span style="color : #00c203;">WIN !</span>';
    playerScore.textContent++;
}

function restartGame() {
    playerPickedHandElem.innerHTML = '';
    mainContainer.classList.add('active');
}