timeInit();
checkPhone();
burgerInit();
// burger 
function burgerInit() {
  const btn = document.querySelector('.burger__btn'),
    burgerClose = document.querySelector('.burger__close'),
    burgerWrap = document.querySelector('.header__burger-wrap');
  btn.addEventListener('click', function () {
    burgerWrap.classList.add('header__burger-wrap-active');
  })
  burgerClose.addEventListener('click', function () {
    burgerWrap.classList.remove('header__burger-wrap-active');
  })
}
// timer 
function timeInit() {
  let date = new Date();
  date.setMinutes(date.getMinutes() + 30);
  setInterval(counts, 1000)
  function counts() {
    let now = new Date();
    gap = date - now;
    if (gap >= 0) {
      let days = Math.floor(gap / 1000 / 60 / 60 / 24),
        hours = Math.floor(gap / 1000 / 60 / 60) % 24,
        minutes = Math.floor(gap / 1000 / 60) % 60,
        seconds = Math.floor(gap / 1000) % 60;
      let timeHours = document.querySelector('.order__value-h').innerText = hours,
        timeMinutes = document.querySelector('.order__value-m').innerText = minutes,
        timeSeconds = document.querySelector('.order__value-s').innerText = seconds;
    }
  }
}
// checkPhone 
function checkPhone() {
  document.getElementById('form__phone').onkeydown = function (e) {
    return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));  // IE > 9
  }
}
