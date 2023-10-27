// next


var animates = document.querySelectorAll('.anim_item');

if(animates.length > 0) {
   window.addEventListener('scroll', animScroll);
   function animScroll() {
      for(let index = 0; index < animates.length; index++) {
         const anim = animates[index];
         const animHeight = anim.offsetHeight;
         const animOffset = offset(anim).top;
         const animStart = 4;

         let aniItemPoint = window.innerHeight - animHeight / animStart;

         if(animHeight > window.innerHeight) {
            aniItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if((pageYOffset > animOffset - aniItemPoint) && pageYOffset < (animOffset + animHeight)) {
            anim.classList.add('active');
         } else {
            // if(!anim.classList.contains('anim_no_h')) {
            //    anim.classList.remove('active');
            // }
         }
      }
      function offset(el) {
         const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft};
      }
   }
   setTimeout(() => {
      animScroll();
   }, 300);
}