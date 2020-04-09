//ハンバーガーメニュー
$(function () {
   $('#nav-toggle').on('click', function () {
      $('body').toggleClass('open');
   });
});

//モーダル
const close = document.querySelectorAll('.close');
const open = document.querySelectorAll('.open');
const modal = document.querySelectorAll('.modal');

for (let i = 0; i < 2; i++) {
   open[i].addEventListener('click', () => {
      modal[i].classList.remove('hidden');
   });
}
for (let i = 0; i < 2; i++) {
   close[i].addEventListener('click', () => {
      modal[i].classList.add('hidden');
   });
}

//モーダル時、スクロール禁止
$(function () {
   var scrollPosition;
   $('.open').on('click', function () {
      scrollPosition = $(window).scrollTop();
      $('body').addClass('fixed').css({
         top: -scrollPosition
      });
   });
   $('.close').on('click', function () {
      $('body').removeClass('fixed').css({
         top: 0
      });
      window.scrollTo(0, scrollPosition);
   });
});

//横向き
$(window).on('load orientationchange resize', function () {
   if (Math.abs(window.orientation) === 90) {
      // 横向きになったときの処理
      $('.fullpage').css('display', 'none');
      $('.wrapper').css({
         'display': 'flex',
         'opacity':'0.8'
   });
   } else {
      // 縦向きになったときの処理
      $('.fullpage').css('display', 'block');
      $('.wrapper').css('display', 'none');
   }
});