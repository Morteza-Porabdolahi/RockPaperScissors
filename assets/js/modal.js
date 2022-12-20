const $ = document;
const rulesButton = $.getElementById('rules-btn');
const modalContainer = $.getElementById('rules-modal');
const modalCloseButton = $.querySelectorAll('.times');

rulesButton.addEventListener('click', openTheModal);
modalCloseButton.forEach(closeBtn => closeBtn.addEventListener('click', closeTheModal));

function openTheModal(){
    modalContainer.classList.remove('hidden');
}

function closeTheModal(){
    modalContainer.classList.add('hidden');
}
