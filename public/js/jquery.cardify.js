(($) => {
  // Declaración del plugin.

  $.fn.pluss = function (options) {
    // Obtenemos los parámetros.
    options = $.extend({}, $.fn.pluss.defaultOptions, options);
    $(this).find('img').each((index, value) => {

      $(value).wrap('<figure></figure>');
      let figure = $(value).parent();
      figure.append('<figcaption class="hidden">' + $(value).attr('alt') + '</figcaption>');

      // Estableciendo clases (horizontal o vertical---por defecto vertical)
      $(value).addClass('cont-img');

      $(this).addClass(options.direction);
      figure.addClass(options.align);
      //  Efecto Hover
      $(value).mouseover(() => {
        $(value).addClass('hidden');
               $( value).next().removeClass('hidden');
               $( value).next().addClass('cardify-figcaption');
      });
      $('figcaption').mouseout(() => {
        $(value).removeClass('hidden');
               $( value).next().addClass('hidden');
        $(this).removeClass('figcaptionhover');
      });
    });
  };
  // Parametros del plugin.
  $.fn.pluss.defaultOptions = {
    align: 'vertical',
    direction: ''
  };
})(jQuery);