const hands = $.querySelectorAll('.main__container .hand');
const playerPickedHandElem = $.querySelector('.game__container .hand:first-child');
const mainContainer = $.querySelector('.main__container');
const restartBtn = $.querySelector('.restart-btn');
const resultElem = $.querySelector('.result');

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

    computerPickedHandElem.className = `hand ${computerPick}-hand`;
    computerPickedHandElem.style.backgroundColor = '#fff';

    pickedHandElementImage.src = `./assets/images/icon-${randomHand}.svg`;
    pickedHandElementImage.className = `${randomHand}-img`;
    pickedHandElementImage.alt = `${randomHand} Image`;

    chooseTheWinner();
}

function chooseTheWinner() {
    if (playerPick === computerPick) {
        resultElem.innerHTML = 'TIE !';
    } else if ((playerPick === 'paper' && computerPick === 'rock') || (playerPick === 'scissors' && computerPick === 'paper') || (playerPick === 'rock' && computerPick === 'scissors')) {
        resultElem.innerHTML = 'YOU <span style="color : #00c203;">WIN !</span>';
    } else if ((playerPick === 'paper' && computerPick === 'scissors') || (playerPick === 'rock' && computerPick === 'paper') || (playerPick === 'scissors' && computerPick === 'rock')) {
        resultElem.innerHTML = 'YOU <span style="color : #e00404;">LOOSE !</span>';
    }

}

function restartGame() {
    playerPickedHandElem.innerHTML = '';
    mainContainer.classList.add('active');
}