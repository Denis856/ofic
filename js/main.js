var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__menu');

// function menu_show() {
//    burger.classList.toggle('active');
//    menu.classList.toggle('active');
// }

// burger.onclick = menu_show;

burger.addEventListener('click', ()=>{
   burger.classList.toggle('active');
   menu.classList.toggle('active');
});

var filterItem = document.querySelectorAll('.page4__choices');
var choice = document.querySelectorAll('.choive1');
var choice0 = document.querySelector('.choive0');
var filterImage = document.querySelectorAll('.page4__item');

window.onload = () => { 
   filterItem.forEach(iten3 => {
      iten3.onclick = (selectedItem) => {
         if(selectedItem.target.classList.contains('page4__choice')) {
            let filterName = selectedItem.target.getAttribute('data-name'); 
            filterImage.forEach((image) => {
               let filterImages = image.getAttribute('data-name');
               if((filterImages == filterName) || filterName == 'all') {
                  image.classList.remove('hide');
                  image.classList.add('show');
               } else {
                  image.classList.add('hide');
                  image.classList.remove('show');
               }
            });
         }
      };
   });
};

choice.forEach(item =>{ 
   item.addEventListener('click', (e) =>{
      choice.forEach(el=>{ el.classList.remove('active'); });
   item.classList.add('active');
});
});

function ret() {
   choice.forEach(ter => {
      ter.classList.remove('active');
   });
}

choice0.onclick = ret;


$(function(){
   $('a[href^="#"]').click(function(){
   var target = $(this).attr('href');
   $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
   return false;
   });
   });