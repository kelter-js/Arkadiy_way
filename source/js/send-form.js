import {SHOW_MODAL_CLASS} from './close-modal.js'

const CONTACT_FORM_ELEMENT = document.querySelector('.consulting__form');
const BUY_FORM_ELEMENT = document.querySelector('.modal-buy__form');
const SUBMIT_MODAL_ELEMENT = document.querySelector('.modal-success');

const onSubmit = (evt) => {
  evt.preventDefault();
  SUBMIT_MODAL_ELEMENT.classList.add(SHOW_MODAL_CLASS);
}

CONTACT_FORM_ELEMENT.addEventListener('submit', onSubmit);
BUY_FORM_ELEMENT.addEventListener('submit', onSubmit);
