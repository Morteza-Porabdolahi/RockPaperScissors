const hands = $.querySelectorAll('.main__container .hand');
const mainContainer = document.querySelector('.main__container')

hands.forEach(hand => hand.addEventListener('click', startGame));

function startGame(e){
    const clickedHand = e.target.closest('.hand');
    const handId = clickedHand.dataset.id;
    const handImage = clickedHand.firstElementChild;
    const pickedHandElement = $.querySelector('.game__container .hand:first-child');

    mainContainer.classList.remove('active');

    pickedHandElement.append(handImage);
    pickedHandElement.classList.add(handId);
    pickedHandElement.style.backgroundColor = '#fff';

}