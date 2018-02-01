'use strict';

(function($) {
  // Declaración del plugin.

  $.fn.pluss = function(options) {
    // Obtenemos los parámetros.
    options = $.extend({}, $.fn.pluss.defaultOptions, options);
    $(this).find('img').each(function(index) {
      var _this = this;

      $(this).wrap('<figure></figure>');
      $(this).parent().append('<figcaption>' + $(this).attr('alt') + '</figcaption>');
      // Estableciendo clases (horizontal o vertical---por defecto vertical)
      $(this).parent().parent().addClass(options.direction);
      $(this).parent().addClass(options.align);
      //  Hover
      $(this).mouseover(function() {
        $(_this).addClass('imgdisplay');
        $('figcaption:eq(' + index + ')').addClass('figcaptionhover');
      });
      $('figcaption:eq(' + index + ')').mouseout(function() {
        $('figcaption:eq(' + index + ')').prev().removeClass('imgdisplay');
        $('figcaption:eq(' + index + ')').removeClass('figcaptionhover');
      });
    });
  };
  // Parametros del plugin.
  $.fn.pluss.defaultOptions = {
    align: 'vertical',
    direction: ''
  };
})(jQuery);