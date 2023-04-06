const button = document.querySelector('.top-btn-search');
const search = document.querySelector('.top-form');
const close = document.querySelector('.top-form__btn');

button.addEventListener('click', function(){
  search.classList.add('top-form--active');
});

close.addEventListener('click', function(){
  search.classList.remove('top-form--active');
});


var open = document.querySelectorAll('.btn-enter');
var modalForm = document.querySelector('.form-enter');
var closeForm = document.querySelector('.enter-close');
var overlay = document.querySelector('.overlay');

open.forEach((el) => {
  el.addEventListener('click', function(){
    modalForm.classList.add('active');
    overlay.classList.add('overlay--show');
  });
});

closeForm.addEventListener('click', function(){
  modalForm.classList.remove('active');
  overlay.classList.remove('overlay--show');
});

overlay.addEventListener('click', function(){
  modalForm.classList.remove('active');
  overlay.classList.remove('overlay--show');
});

// play

const playerButtons = document.querySelectorAll('.btns');

function clickHandler () {
    const buttons1 = Array.from(this.children);
    buttons1.forEach(button => button.classList.toggle('hidden'))
}

playerButtons.forEach((playerButton) => {
  playerButton.addEventListener('click', clickHandler);
});

// ещё подкасты

const btnLink = document.querySelector('.btn-center__link');
const podcastLength = document.querySelectorAll('.podcast').length;
const array = Array.from(document.querySelector('.podcasts__list').children);

const getDefaultShownItems = () => {
  const width = window.screen.width;

  return width > 572 ? 8 : 4;
}

let items = getDefaultShownItems();

const showMoreItems = () => {
  const visItems = array.slice(0, items);
  visItems.forEach(el => el.classList.add('is-visible'));
}

showMoreItems();

btnLink.addEventListener('click', () => {
  items += 2;
  showMoreItems();
 if (items === podcastLength) {
  btnLink.style.display = 'none';
 }
});

// dropdown

if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
	});

	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});

//  АККОРДЕОН

document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(el => {
    const control = el.querySelector('.accordion__control');
    const content = el.querySelector('.accordion__content');

    control.addEventListener('click', (e) => {
			const self = el;

			self.classList.toggle('open');

			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});

// ТАБЫ

let accContentBtn = document.querySelectorAll('.acc-content__btn');
let gsCards = document.querySelectorAll('.gs-cards');

accContentBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    accContentBtn.forEach(function(btn){btn.classList.remove('acc-content__btn--active')});
    e.currentTarget.classList.add('acc-content__btn--active');

    gsCards.forEach(function(element){element.classList.remove('gs-cards--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('gs-cards--active');
  });
});


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
      document.querySelector("header").classList.toggle("open")
  })
})


let openBtn = document.querySelector('.header__esc');
let menuPlays = document.querySelector('.header__plays');

openBtn.addEventListener('click', function(){
    openBtn.classList.toggle('header__esc--active');
    menuPlays.classList.toggle('header__plays--active');
})







