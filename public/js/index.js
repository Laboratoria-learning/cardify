'use strict';

(function($) {
  $.fn.extend({
    cardify: function cardify(config) {
      (function() {
        // Agrega etiquetas figure y figcapture:
        $('img').wrap('<figure></figure>');
        $('img').after('<figcaption></figcaption>');

        // Agrega evento hover a las imágenes
        $('figure').hover(function() {
          var alt = event.target.alt;
          $(event.target).parent().addClass('figureStyle');
          $(event.target).css('filter', config);
          $(event.target).next().text(alt).addClass('figcaptionStyle').removeClass('displayNone').toggleClass('displayBlock');
        }, function() {
          $(event.target).css('filter', 'none');
          $(event.target).next().removeClass('displayBlock').toggleClass('displayNone');
        });
      })();
    }
  });
})(jQuery);