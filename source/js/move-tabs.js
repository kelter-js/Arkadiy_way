import {debouncer} from './debouncer.js'

const TAB_NAVIGATION_ELEMENT = document.querySelector('.tour-countries__choose-list');
let startCoordinateX;

const UNIT = 'px';
const MOVE_DELAY = 500;

const NAVIGATION_WRAPPER = document.querySelector('.tour-countries__list-wrapper');
const MOBILE_WIDTH_CONTAINER = 265;

const MOBILE_MARGIN_SWAPS = [
  '0px',
  '-172px',
  '-361px',
  '-578px',
  '-632px'
];

TAB_NAVIGATION_ELEMENT.style.marginLeft = 0 + UNIT;

const onTouchStart = (evt) => {
  startCoordinateX = evt.touches[0].clientX;
}

const onTouchMove = (evt) => {
  if (!startCoordinateX) return;
  const currentCoordinates = evt.touches[0].clientX;
  const difference = currentCoordinates - startCoordinateX;

  if (difference < 0) {
    if(NAVIGATION_WRAPPER.offsetWidth === MOBILE_WIDTH_CONTAINER) {
      if(!(MOBILE_MARGIN_SWAPS.indexOf(TAB_NAVIGATION_ELEMENT.style.marginLeft) + 1 > 4)) {
        TAB_NAVIGATION_ELEMENT.style.marginLeft = MOBILE_MARGIN_SWAPS[MOBILE_MARGIN_SWAPS.indexOf(TAB_NAVIGATION_ELEMENT.style.marginLeft) + 1]
        return;
      }
      return;
    }
    TAB_NAVIGATION_ELEMENT.style.marginLeft = MOBILE_MARGIN_SWAPS[1];
  } else {
    if (getComputedStyle(TAB_NAVIGATION_ELEMENT).marginLeft === '0px') return;
    if(NAVIGATION_WRAPPER.offsetWidth === MOBILE_WIDTH_CONTAINER) {
      if(!(MOBILE_MARGIN_SWAPS.indexOf(TAB_NAVIGATION_ELEMENT.style.marginLeft) - 1 < 0)) {
        TAB_NAVIGATION_ELEMENT.style.marginLeft = MOBILE_MARGIN_SWAPS[MOBILE_MARGIN_SWAPS.indexOf(TAB_NAVIGATION_ELEMENT.style.marginLeft) - 1]
        return;
      }
      return;
    }
    TAB_NAVIGATION_ELEMENT.style.marginLeft = 0 + UNIT;
  }
  startCoordinateX = null;
}

const debouncedTouchMoveHandler = debouncer(onTouchMove, MOVE_DELAY);

TAB_NAVIGATION_ELEMENT.addEventListener('touchstart', onTouchStart);

TAB_NAVIGATION_ELEMENT.addEventListener('touchmove', debouncedTouchMoveHandler)


