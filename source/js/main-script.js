const NAVIGATION_ELEMENT = document.querySelector('.main-nav');
const TOGGLE_NAVIGATION_BUTTON = document.querySelector('.main-nav__toggle');

const CLOSE_BUTTONS = [...document.querySelectorAll(".modal__close-modal")];
const SHOW_MODAL_CLASS = "show-modal";
const SHOW_MODAL_CLASS_MOD = "show-modal--buy";

CLOSE_BUTTONS.map(button => button.addEventListener('click', function () {
  this.parentElement.classList.contains(SHOW_MODAL_CLASS) ? this.parentElement.classList.remove(SHOW_MODAL_CLASS) : this.parentElement.classList.remove(SHOW_MODAL_CLASS_MOD)
}))

NAVIGATION_ELEMENT.classList.remove('main-nav--nojs');
const onClickToggleNavigation = () => {
  if (NAVIGATION_ELEMENT.classList.contains('main-nav--closed')) {
    NAVIGATION_ELEMENT.classList.remove('main-nav--closed');
    NAVIGATION_ELEMENT.classList.add('main-nav--opened');
    } else {
      NAVIGATION_ELEMENT.classList.add('main-nav--closed');
      NAVIGATION_ELEMENT.classList.remove('main-nav--opened');
  }
}

TOGGLE_NAVIGATION_BUTTON.addEventListener('click', onClickToggleNavigation);
