var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.menu__list');

burger.addEventListener('click', function(){
   burger.classList.toggle('active');
   menu.classList.toggle('active');
});

// var body1 = document.querySelector('.body1'),
// nextBtn = body1.querySelector('.nextBtn'),
// backBtn = body1.querySelector('.backBtn'),
// page10 = body1.querySelector('.page10'),
// page20 = body1.querySelector('.page20');


var body1 = document.querySelector('.body1');
var nextBtn = document.querySelectorAll('.nextBtn');
var backBtn = document.querySelectorAll('.backBtn');
var page10 = document.querySelector('.page10');
var page20 = document.querySelector('.page20');


nextBtn.forEach(elem => {
   elem.addEventListener('click', ()=> {
      page10.classList.add('secActive');
      page20.classList.add('secActive');
   });
});

backBtn.forEach(elem => {
   elem.addEventListener('click', ()=> {
      page10.classList.remove('secActive');
      page20.classList.remove('secActive');
   });
});

// backBtn.addEventListener.forEach(click, ()=> {
//    page10.classList.remove('secActive0');
//    page20.classList.remove('secActive');
// });