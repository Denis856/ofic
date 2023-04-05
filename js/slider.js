
const productContainers = [...document.querySelectorAll('.works__items')];
const nxtBtn = [...document.querySelectorAll('.left')];
const preBtn = [...document.querySelectorAll('.right')];
var item20 = document.querySelectorAll('.works__item')[0];

productContainers.forEach((item, i) => {
   let containerWidth = item20.clientWidth + 30;


    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});