var burger = document.querySelector('.header__burger');
var column = document.querySelectorAll('.footer__block01');

burger.addEventListener('click', ()=> {
   burger.classList.toggle('active');
   document.querySelector('.header__list').classList.toggle('active');
   document.querySelector('body').classList.toggle('active');
   column.forEach(item => {
      item.classList.remove('active');
   });
});

// next


$(function(){
   $('a[href^="#"]').click(function(){
   var target = $(this).attr('href');
   $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
   return false;
   });
   });

