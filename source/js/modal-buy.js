import {
  SHOW_MODAL_CLASS,
  MODALS
} from './close-modal.js'

const MODAL_ELEMENT_BUY = document.querySelector('.modal-buy');
const BUY_BUTTONS = [...document.querySelectorAll('.button-buy')];

BUY_BUTTONS.map((button) => button.addEventListener('click', () => {
  MODALS.map((modal) => modal.classList.remove(SHOW_MODAL_CLASS));
  MODAL_ELEMENT_BUY.classList.add(SHOW_MODAL_CLASS);
}))

export {
  BUY_BUTTONS,
  MODAL_ELEMENT_BUY
}
