$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('../page/inc.html header', head);
$('footer').load('../page/inc.html footer');

function head() {
  let pos = { y: 0, y2: 0, state: 0 };
  const elHeader = document.querySelector('header');
  const elSp = document.querySelector('.topbox > span');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset == 0) {
      elHeader.classList.add('sc');
    } else {
      elHeader.classList.remove('sc');
    }

    pos.y = window.pageYOffset;
    pos.state = pos.y > pos.y2 ? true : false; // if문 한줄로 요약
    pos.y2 = pos.y;

    console.log(pos.y);

    if (pos.y < 10) {
      elHeader.classList.remove('active');
      elHeader.classList.add('show');
      elSp.classList.remove('active');
      elSp.classList.add('show');

      console.log('active');
    } else {
      elHeader.classList.add('active');
      elHeader.classList.remove('show');
    }
  });
}
