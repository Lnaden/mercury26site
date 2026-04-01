(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  // Count Down JS
  var Year = $('#simple-timer').attr('data-year');
  var Month = $('#simple-timer').attr('data-month');
  var Day = $('#simple-timer').attr('data-day');
  var Hour = $('#simple-timer').attr('data-hour');
  $('#simple-timer').syotimer({
    year: Year,
    month: Month,
    day: Day,
    hour: Hour,
    minute: 0
  });

})(jQuery);

// Lightbox
(function () {
  const overlay = document.getElementById('lightboxOverlay');
  const lightboxImg = document.getElementById('lightboxImg');

  document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', function () {
      lightboxImg.src = this.src;
      lightboxImg.alt = this.alt;
      overlay.classList.add('active');
    });
  });

  // Click overlay background to close, but not the image itself
  overlay.addEventListener('click', function (e) {
    if (e.target !== lightboxImg) {
      overlay.classList.remove('active');
    }
  });

  // Also close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') overlay.classList.remove('active');
  });
})();
