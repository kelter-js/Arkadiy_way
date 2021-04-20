const TOUR_LINK_ELEMENTS = [
  document.querySelector('.visit-places__tours-item--greece'),
  document.querySelector('.visit-places__tours-item--albania'),
  document.querySelector('.visit-places__tours-item--macedonia'),
  document.querySelector('.visit-places__tours-item--montenegro'),
  document.querySelector('.visit-places__tours-item--croatia')
];

const CARDS_PARENT_SECTION = document.querySelector('.tour-countries');

const COUNTRY_TABS = [
  CARDS_PARENT_SECTION.querySelector('.tour-countries__country-card--greece'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__country-card--albania'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__country-card--macedonia'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__country-card--montenegro'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__country-card--croatia')
];
const NAVIGATION_TAB_ELEMENTS = [
  CARDS_PARENT_SECTION.querySelector('.tour-countries__item--greece'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__item--albania'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__item--macedonia'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__item--montenegro'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__item--croatia')
];

const ENABLE_CARD_CLASS = "tour-countries__country-card--enabled";
const ENABLE_NAVIGATION_ITEM_CLASS = 'tour-countries__item--selected';

const enableElement = (index, className, elements) => {
  CARDS_PARENT_SECTION.querySelector(`.${className}`).classList.remove(className);
  elements[index].classList.add(className);
}

document.addEventListener('click', (evt) => {
  const target = evt.target;
  if (!TOUR_LINK_ELEMENTS.map((link) => link.contains(target)).includes(true)) return;
  const index = TOUR_LINK_ELEMENTS.map((link) => link.contains(target)).indexOf(true);
  console.log(index)
  enableElement(index, ENABLE_CARD_CLASS, COUNTRY_TABS);
  enableElement(index, ENABLE_NAVIGATION_ITEM_CLASS, NAVIGATION_TAB_ELEMENTS);
})

NAVIGATION_TAB_ELEMENTS.map((element) => element.addEventListener('click', function () {
  const index = NAVIGATION_TAB_ELEMENTS.indexOf(this);
  enableElement(index, ENABLE_CARD_CLASS, COUNTRY_TABS);
  enableElement(index, ENABLE_NAVIGATION_ITEM_CLASS, NAVIGATION_TAB_ELEMENTS);
}))
