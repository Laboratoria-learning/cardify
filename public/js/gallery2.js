'use strict';

window.addEventListener('load', function () {
  var config = 'contrast(30%)';
  $('.container').cardify(config);

  var backHome = $('.back-home-js');
  backHome.on('click', function () {
    window.location.href = '../index.html';
  });
});