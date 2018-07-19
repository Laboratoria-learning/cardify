const $ = require('jquery');

$(document).ready(function() {
  // Llamando plugin
  $('.content').imaginator();
});

(function($) {
  $.fn.imaginator = function() {
    $('.content img').mouseover(function() {
      let imagenFigure = $(this).attr('alt');
      $(this).each(function() {
        $(this).wrap('<figure></figure>');
        $('figure').css({
          'display': 'inline-block',
          'border': '3px solid #eee',
          'width': '250px',
          'margin': '30px',
          'z-index': '10',
        }); 
      
        $('content').css({
          'float': 'left',
          'width': '30%',
        });

        $(this).css({
          'filter': 'brightness(0.4)',
        });
      
        $('figure').append('<figcaption>' + imagenFigure + '</figcaption>');
        $('figcaption').css({
          'text-align': 'center',
          'font-size': '30px',
          'padding': '5px 10px',
          'border-radius': '2px',
          'display': 'inline-block',
          'background': '#000',
          'color': '#fff',
          'width': '91%', });
      });
    });

    $('.content img').mouseout(function() {
      $('figcaption').unwrap();
      $('img').css({
        'filter': 'brightness(1)',
      });
      $('figcaption').remove();
    });
  };
})($);


// Tests

const checkAlt = function() {
  var alt = $('.img-item').attr('alt');
  if (alt === '') {
    // alert('Debe agregar atributo alt');
  } else {
    // alert('Atributo alt ok');
  }
};

module.exports = checkAlt;