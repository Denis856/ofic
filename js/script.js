var burger = document.querySelector('.header__burger');

burger.addEventListener('click', ()=> {
   burger.classList.toggle('active');
   document.querySelector('.header__list').classList.toggle('active');
   document.querySelector('body').classList.toggle('active');
});

// next


$(function(){
   $('a[href^="#"]').click(function(){
   var target = $(this).attr('href');
   $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
   return false;
   });
   });