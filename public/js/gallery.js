'use strict';

window.addEventListener('load', function() {
  var config = 'blur(5px)';
  $('.container').cardify(config);
  var backHome = $('.back-home-js');

  backHome.on('click', function() {
    window.location.href = '../index.html';
  });
});