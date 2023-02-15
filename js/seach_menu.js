const button = document.querySelector('.top-btn-search');
const search = document.querySelector('.top-form');
const close = document.querySelector('.top-form__btn');

button.addEventListener('click', function(){
  search.classList.add('top-form--active');
});

close.addEventListener('click', function(){
  search.classList.remove('top-form--active');
});



