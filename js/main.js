'use strict';

(function () {

  // Переключение мобильного меню

  var mainNav = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  // var noscroll = document.querySelectorAll('js-scroll');
  var navLink = document.querySelectorAll('.main-nav__link');

  mainNav.classList.remove('main-nav--nojs');

  var addScroll = function () {
    document.querySelectorAll('.js-scroll').forEach(function (item) {
      item.classList.add('noscroll');
    });
  };

  var removeScroll = function () {
    document.querySelectorAll('.js-scroll').forEach(function (item) {
      item.classList.remove('noscroll');
    });
  };

  navToggle.addEventListener('click', function () {
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
      addScroll();


    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
      removeScroll();
    }
  });

  // Отключение скролла при открытом мобильном меню

  var onNavLinkClick = function () {
    removeScroll();
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');

  };

  [].forEach.call(navLink, function (item) {
    item.addEventListener('click', onNavLinkClick);
  });


  // Добавление маски для ввода телефона

  var phoneInput = document.querySelector('#user-phone');

  window.addEventListener('DOMContentLoaded', function () {
    var setCursorPosition = function (pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);

      } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };

    var mask = function (evt) {
      var matrix = '+7(___)___-__-__';
      var i = 0;
      var def = matrix.replace(/\D/g, '');
      var val = phoneInput.value.replace(/\D/g, '');
      if (def.length >= val.length) {
        val = def;
      }

      phoneInput.value = matrix.replace(/./g, function (a) {
        if (/[_\d]/.test(a) && i < val.length) {
          return val.charAt(i++);
        }

        return i >= val.length ? '' : a;
      });

      if (evt.type === 'blur') {
        if (phoneInput.value.length === 2) {
          phoneInput.value = '';

        } else {
          setCursorPosition(phoneInput.value.length, phoneInput);
        }
      }
    };

    phoneInput.addEventListener('input', mask, false);
    phoneInput.addEventListener('focus', mask, false);
    phoneInput.addEventListener('blur', mask, false);
  });
})();
