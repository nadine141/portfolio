const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});



// //black scroll

// $(document).ready(function () {
//   $(window).scroll(function() {
//     if($(this).scrollTop() > 800)  {
//       $('.sidepanel').style.backgroundColor = "lightblue";
//     }
//   });
// });
