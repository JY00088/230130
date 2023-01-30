const elOne = document.querySelector('.boxsvg'),
  elOnesvg = document.querySelector('.boxsvgup'),
  MAIN = document.querySelector('main');
let click = false; // 클릭 여부

let moving = false; // 움직이는 중인지 여부

elOne.addEventListener('click', function () {
  let ifToggle = elOne.classList.toggle('svgOn');
  if (ifToggle == false) {
  } else {
    elOnesvg.style = `width: 0%; display: none;`;
    MAIN.style = 'display:block';
    elOne.style = 'display:none';
  }
  // elOne.classList.toggle('on')
});

//첫번째 이미지 17개 자동전환

let imgArray = new Array();

imgArray[0] = './img/01.jpg';
imgArray[1] = './img/02.jpg';
imgArray[2] = './img/03.jpg';
imgArray[3] = './img/04.jpg';
imgArray[4] = './img/05.jpg';
imgArray[5] = './img/06.jpg';
imgArray[6] = './img/07.jpg';
imgArray[7] = './img/08.jpg';
imgArray[8] = './img/09.jpg';
imgArray[9] = './img/10.jpg';
imgArray[10] = './img/11.jpg';
imgArray[11] = './img/12.jpg';
imgArray[12] = './img/13.jpg';

function showImage() {
  var imgNum = Math.round(Math.random() * 12);
  var objImg = document.getElementById('introimg');
  objImg.src = imgArray[imgNum];
  setTimeout('showImage()', 1000);
}

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<div class="' +
        className +
        '"><span>' +
        bullet[index] +
        '</span></div>'
      );
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const elOne1 = document.querySelector('.List2'),
  elBut = document.querySelector('button .b');
let click2 = false; // 클릭 여부

let moving3 = false; // 움직이는 중인지 여부

elOne1.addEventListener('click', function () {
  let ifToggle = elOne1.classList.toggle('up');
  if (ifToggle == false) {
    elBut.style = `background-color: black; color: white;`;
  } else {
    elBut.style = `background-color: transparent;`;
  }
  // elOne.classList.toggle('on')
});
