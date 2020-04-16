//ハンバーガーメニュー
$(function () {
   $('#nav-toggle').on('click', function () {
      $('body').toggleClass('open');
      if ($('body').hasClass('open')) {
         fullpage_api.setAllowScrolling(false);
         fullpage_api.setKeyboardScrolling(false);
      } else {
         fullpage_api.setAllowScrolling(true);
         fullpage_api.setKeyboardScrolling(true);
      }
   });
});

//モーダル
const close = document.querySelectorAll('.close');
const popup = document.querySelectorAll('.popup');
const modal = document.querySelectorAll('.modal');

for (let i = 0; i < 2; i++) {
   popup[i].addEventListener('click', () => {
      modal[i].classList.remove('hidden');
   });
}
for (let i = 0; i < 2; i++) {
   close[i].addEventListener('click', () => {
      modal[i].classList.add('hidden');
   });
}

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
