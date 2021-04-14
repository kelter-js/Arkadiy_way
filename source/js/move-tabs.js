const TAB_NAVIGATION_ELEMENT = document.querySelector('.tour-countries__choose-list');
let startCoordinateX;
const UNIT = 'px';
const ELEMENT_SIZES = 172;
TAB_NAVIGATION_ELEMENT.style.marginLeft = 0 + UNIT;
const NAVIGATION_WRAPPER = document.querySelector('.tour-countries__list-wrapper');
const MOBILE_BREAKPOINT = -634;
const TABLET_BREAKPOINT = -171;
const MOBILE_WIDTH_CONTAINER = 265;
const TABLET_WIDTH_CONTAINER = 727;

TAB_NAVIGATION_ELEMENT.addEventListener('touchstart', (evt) => {
  startCoordinateX = evt.touches[0].clientX;
})
TAB_NAVIGATION_ELEMENT.addEventListener('touchmove', (evt) => {
  if (!startCoordinateX) return;
  const currentCoordinates = evt.touches[0].clientX;
  const difference = currentCoordinates - startCoordinateX;
  let newCoordinates = parseInt(TAB_NAVIGATION_ELEMENT.style.marginLeft, 10);

  if (difference < 0) {
    newCoordinates -= ELEMENT_SIZES;
    if(NAVIGATION_WRAPPER.offsetWidth === MOBILE_WIDTH_CONTAINER) {
      if(newCoordinates < MOBILE_BREAKPOINT) {
        TAB_NAVIGATION_ELEMENT.style.marginLeft = MOBILE_BREAKPOINT + UNIT;
        return;
      }
    }
    if(NAVIGATION_WRAPPER.offsetWidth === TABLET_WIDTH_CONTAINER) {
      if(newCoordinates < TABLET_BREAKPOINT) {
        TAB_NAVIGATION_ELEMENT.style.marginLeft = TABLET_BREAKPOINT + UNIT;
        return;
      }
    }
  } else {
    if (getComputedStyle(TAB_NAVIGATION_ELEMENT).marginLeft === '0px') return;
    newCoordinates += ELEMENT_SIZES;
    if(newCoordinates > 0) newCoordinates = 0;
  }
  TAB_NAVIGATION_ELEMENT.style.marginLeft = newCoordinates + UNIT;
  startCoordinateX = null;
})


