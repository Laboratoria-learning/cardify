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
        
      $( this ).mouseover(function() {
        $('.container img').eq(index).addClass('imgdisplay');
        $('figcaption:eq('+(index)+')').addClass('figcaptionhover');
        
      });
      $('figcaption:eq('+(index)+')' ).mouseout(function() {
        $('.container img').eq(index).removeClass('imgdisplay');
        $('figcaption:eq('+(index)+')').removeClass('figcaptionhover');
              });

    });
  };  
     // Parametros del plugin.

     $.fn.pluss.defaultOptions = {
      align: 'vertical',
      direction: ''
    }
})(jQuery);