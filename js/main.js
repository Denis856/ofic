var nav_link = document.querySelectorAll('.nav_link');
var link = document.querySelectorAll('.link');
var nav2 = document.querySelector('.nav');

nav_link.forEach(element=> {
   element.addEventListener('mouseover', function(){
      nav2.classList.toggle('red');
   });
});

nav_link.forEach(element=> {
   element.addEventListener('mouseout', function(){
      nav2.classList.toggle('red');
   });
});

// Переключение страниц начало

var page0 = document.getElementById('page0');
var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');
var back0 = document.getElementById('back0');
var page1_left = document.getElementById('page1_left');
var page1_right = document.getElementById('page1_right');
var page1_left_content = document.getElementById('page1_left_content');
var page1_right_content = document.getElementById('page1_right_content');
var page2_content = document.getElementById('page2_content');
var page3_left = document.getElementById('page3_left');
var page3_right = document.getElementById('page3_right');
var footer = document.getElementById('footer');

function show() {
   page0.classList.add('show1');
   page1.classList.add('show');
   page1.classList.add('height');
   back0.classList.add('show');
   page1_left.classList.add('up');
   page1_right.classList.add('up');
   page1_left_content.classList.add('up');
   page1_right_content.classList.add('up');
   footer.classList.add('show5');
}

function show1() {
   page0.classList.add('show1');
   page2.classList.add('show');
   page2.classList.add('height1');
   page2_content.classList.add('up1');
   footer.classList.add('show5');
}

function back2() {
   page0.classList.remove('show1');
   page2.classList.remove('show');
   page1.classList.remove('height1');
   page2_content.classList.remove('up1');
   footer.classList.remove('show5');
}

function back1() {
   page0.classList.remove('show1');
   back0.classList.remove('show');
   page1.classList.remove('show');
   page1.classList.remove('height');
   page1_left.classList.remove('up');
   page1_right.classList.remove('up');
   page1_left_content.classList.remove('up');
   page1_right_content.classList.remove('up');
   footer.classList.remove('show5');
}

function show2() {
   page0.classList.add('show1');
   page2.classList.add('show1');
   page3.classList.add('show');
   page3.classList.add('height1');
   page3_left.classList.add('up2');
   page3_right.classList.add('up2');
   footer.classList.add('show5');
}

function back3() {
   page0.classList.remove('show1');
   page2.classList.remove('show1');
   page3.classList.remove('show');
   page3.classList.remove('height1');
   page3_left.classList.remove('up2');
   page3_right.classList.remove('up2');
   footer.classList.remove('show5');
}

// Переключение чтраниц конец

// Изменение фона картинок на второй странице начало

var img22 = document.getElementById('img22');
var img23 = document.getElementById('img23');
var img24 = document.getElementById('img24');
var img25 = document.getElementById('img25');
var img26 = document.getElementById('img26');
var img27 = document.getElementById('img27');
var page2_item_big = document.getElementById('page2_item_big');
var page2_item_big1 = document.getElementById('page2_item_big1');
var page2_item_big2 = document.getElementById('page2_item_big2');

function change_bg() {
   if(img23.classList.contains('img4')) {
      img23.classList.toggle('img4');
      img23.classList.toggle('img23');
      page2_item_big.classList.toggle('img23');
      page2_item_big.classList.toggle('img4');
   }
   img22.classList.toggle('img4');
   page2_item_big.classList.toggle('img4');
   page2_item_big.classList.toggle('img22');
}

function change_bg1() {
   if(img22.classList.contains('img4')) {
      img22.classList.toggle('img4');
      img22.classList.add('img22');
      page2_item_big.classList.toggle('img4');
      page2_item_big.classList.toggle('img22');
   }
   img23.classList.toggle('img23');
   img23.classList.toggle('img4');
   page2_item_big.classList.toggle('img4');
   page2_item_big.classList.toggle('img23');
}



function change_bg2() {
   if(img25.classList.contains('img4')) {
      img25.classList.toggle('img4');
      img25.classList.toggle('img23');
      page2_item_big1.classList.toggle('img23');
      page2_item_big1.classList.toggle('img4');
   }
   img24.classList.toggle('img4');
   page2_item_big1.classList.toggle('img4');
   page2_item_big1.classList.toggle('img22');
}

function change_bg3() {
   if(img24.classList.contains('img4')) {
      img24.classList.toggle('img4');
      img24.classList.add('img22');
      page2_item_big1.classList.toggle('img4');
      page2_item_big1.classList.toggle('img22');
   }
   img25.classList.toggle('img23');
   img25.classList.toggle('img4');
   page2_item_big1.classList.toggle('img4');
   page2_item_big1.classList.toggle('img23');
}


function change_bg4() {
   if(img27.classList.contains('img4')) {
      img27.classList.toggle('img4');
      img27.classList.toggle('img23');
      page2_item_big2.classList.toggle('img23');
      page2_item_big2.classList.toggle('img4');
   }
   img26.classList.toggle('img4');
   page2_item_big2.classList.toggle('img4');
   page2_item_big2.classList.toggle('img22');
}

function change_bg5() {
   if(img26.classList.contains('img4')) {
      img26.classList.toggle('img4');
      img26.classList.add('img22');
      page2_item_big2.classList.toggle('img4');
      page2_item_big2.classList.toggle('img22');
   }
   img27.classList.toggle('img23');
   img27.classList.toggle('img4');
   page2_item_big2.classList.toggle('img4');
   page2_item_big2.classList.toggle('img23');
}


// Изменение фона картинок на второй странице конец



// Появление сообжения на третьей странице начало


var btn3 = document.querySelectorAll('.item3_btn');

btn3.forEach(elem=> {
   elem.addEventListener('click', function(){
      hello.classList.toggle('top');
   });
});

// Появление сообжения на третьей странице конец

$(document).ready(function(){
   $('.wrapper').addClass('active');
});
