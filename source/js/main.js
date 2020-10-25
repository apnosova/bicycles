'use strict';

(function () {
  var mainNav = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  mainNav.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');

    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
    }
  });

  var phoneInput = document.querySelector('#user-phone');

  var mask = new window.vendor.IMask(phoneInput, {
    mask: '+{7}(000)000-00-00',
    lazy: true,
    placeholderChar: '_',
  });

  phoneInput.addEventListener('focus', function () {
    mask.updateOptions({lazy: false});
  }, true);

  phoneInput.addEventListener('blur', function () {
    mask.updateOptions({lazy: true});
  }, true);
})();
