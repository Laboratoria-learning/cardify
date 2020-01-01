'use strict';

// Cardify
// Función autoejecutable
(function(obj) {
  $.fn.cardify = function() {
    $('.button-collapse').sideNav();
    var $listOfImages = $('img');
    var $containerImages = $('container');
    // Evento que se ejecuta cuando el mouse está encima de la imagen
    if ($containerImages) {
      $listOfImages.wrap('<figure></figure>');
      $('figure').hover(function() {
        var $textAlt = $(this).children().attr('alt');
        $(this).append('<figcaption>' + $textAlt + '</figcaption></figure>');
        $('figcaption').addClass('figcaption-position');
      }, function() {
        $('figcaption').remove();
      });
    } else {
      alert('No se encontró ningun contenedor');
    }
    // });
    return $(this);
  };
})(jQuery);