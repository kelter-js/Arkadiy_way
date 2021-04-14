import {
  BUY_BUTTONS,
  MODAL_ELEMENT_BUY
} from './modal-buy.js';

const CLOSE_BUTTONS = [...document.querySelectorAll('.modal__close-modal')];
const SHOW_MODAL_CLASS = 'show-modal';
const MODALS = [...document.querySelectorAll('.modal')];

CLOSE_BUTTONS.map(button => button.addEventListener('click', function () {
  this.parentElement.classList.remove(SHOW_MODAL_CLASS);
}))

const onKeyCloaseModal = (evt) => {
  if(evt.code == 'Escape') {
    const modal = document.querySelector('.show-modal');
    if (!modal) return;
    modal.classList.remove('show-modal');
  }
}

document.addEventListener('keydown', onKeyCloaseModal)

const onClickOutOfModal = (evt) => {
  const target = evt.target;
  const currentElemModal = MODALS.includes(target) || MODALS.map((modal) => modal.contains(target)).includes(true);
  const isntModalButton = BUY_BUTTONS.includes(target);
  if (currentElemModal || isntModalButton) return;
  const modalIsActive = MODALS.map((modal) => modal.classList.contains(SHOW_MODAL_CLASS)).includes(true);
  if(!currentElemModal && modalIsActive && !isntModalButton) {
    MODALS.map((modal) => modal.classList.remove(SHOW_MODAL_CLASS));
  };
}

document.addEventListener('click', onClickOutOfModal);

export {
  SHOW_MODAL_CLASS,
  MODALS
}
