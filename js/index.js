(function($) {
  // Declaración del plugin.
  $.fn.pluss = function(options) {
    // Obtenemos los parámetros.
    options = $.extend({}, $.fn.pluss.defaultOptions, options);
     this.each(function(index) {
      $('.container').append(
        '<figure>' +
        
            '<figcaption>' + $(this).attr('alt') + '</figcaption>' +
            '</figure>'
      );
      $('figure')[index].prepend($(this)[0]);
      var element = $('figure');
      var container=$('.container');
            container.addClass(options.direction);
      element.addClass(options.align);
        
      $(this).on('mouseover', function() {

        $(this).hide();
        $('figcaption:eq('+(index)+')').addClass('figcaptionhover');
      });
    });

  };  
     // Parametros del plugin.

     $.fn.pluss.defaultOptions = {
      align: 'vertical',
      direction: ''
    }
})(jQuery);