'use strict';

window.addEventListener('load', function() {
  var config = 'grayscale(50%)';
  $('.container').cardify(config);

  var start1 = $('.start-1-js');
  var start2 = $('.start-2-js');

  start1.on('click', function() {
    window.location.href = 'views/gallery.html';
  });

  start2.on('click', function() {
    window.location.href = 'views/gallery2.html';
  });
});