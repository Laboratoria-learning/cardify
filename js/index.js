(($) => {
  // Declaración del plugin.
  
  $.fn.pluss = function(options) {
    // Obtenemos los parámetros.
    options = $.extend({}, $.fn.pluss.defaultOptions, options);
    $(this).find('img').each((index, value) => {

      $(value).wrap('<figure></figure>');
      let figure = $(value).parent();
      figure.append('<figcaption>' + $(value).attr('alt') + '</figcaption>');
      // Estableciendo clases (horizontal o vertical---por defecto vertical)
      $(value).addClass('cont-img');

      $(this).addClass(options.direction);
      figure.addClass(options.align);
      //  Efecto Hover
      $(value).mouseover(() => {
        $(value).addClass('imgdisplay');
        $('figcaption:eq(' + (index) + ')').addClass('figcaptionhover');
      });
      $('figcaption').mouseout(() => {
        $(value).removeClass('imgdisplay');
        $('figcaption:eq(' + (index) + ')').removeClass('figcaptionhover');
      });
    });
  };
  // Parametros del plugin.
  $.fn.pluss.defaultOptions = {
    align: 'vertical',
    direction: ''
  };
})(jQuery);
