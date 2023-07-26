const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

const counter = document.querySelectorAll('.scales__item_counter'),
  lines = document.querySelectorAll('.scales__item_line span');

  counter.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

// $('form').validate();

// define(["jquery", "jquery.validate"], function ($) {
//   $("form").validate();
