var burger = document.getElementsByClassName('header__burger')[0];
var list = document.getElementsByClassName('header__list')[0];
var body = document.querySelector('body');

burger.onclick = () => {
   burger.classList.toggle('active');
   list.classList.toggle('active');
   body.classList.toggle('active');
};

// smooth move

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}