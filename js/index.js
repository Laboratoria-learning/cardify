
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

    //   Aplicando Hover
    //   $(this).on('mouseover', function() {
    //     $('.container').append(
    //       '<figure class="cont-img">' +
    //      '<img src=' + $(this).attr('src') + ' width="200px">' +
    //      '<figcaption>' + $(this).attr('alt') + '</figcaption>' +
    //      '</figure>'
    //     );
    //   });
        
    //   $(this).on('mouseover', function() {
    //     $(this).hide();
    //   });
    //   $('.desaparece').hover(function(){
    //     $(this).animate({opacity:0});
    // },function(){
    //     $(this).animate({opacity:1});
    // });
    });

  };  
     // Parametros del plugin.

     $.fn.pluss.defaultOptions = {
      align: 'vertical',
      direction: ''
    }
})(jQuery);
