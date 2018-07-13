(function($) {
  $.fn.cardify = function() {
    /* FUNCIÓN PARA ASIGNAR FIGURE A IMG COMO PADRE Y AGREGAR FIGCAPTION */
    let container = $('.container-img');
    container.find('img').each(function() {
      /* debugger;*/
      let elem = $(this);
      let text = $(this).attr('alt');
      console.log(text);
      elem.wrap('<figure></figure>').parent();
      elem.parent().append('<figcaption></figcaption>');
      elem.next().text(text);

      // CLASES  EN FIGCAPTION
      elem.next().css({
        'opacity': '0',
        'text-align': 'center',
        'position': 'absolute',
        'margin-top': '-14%',
        'margin-left': '10%',
        'font-size': '20px',
      });

      // CONDICION PARA EVENTO CON EL MOUSE

      if (EventTarget == elem || elem.parent() || elem.next) {
        /* FUNCIÓN PARA ESCONDER IMAGEN Y MOSTRAR FIGCAPTION AL PASAR MOUSE*/
        elem.mouseover(() => {
          elem.parent().addClass('img-bckgrnd-color');
          elem.css('opacity', '0');
          elem.next().css({
            'opacity': '1'
          });
        });

        /* FUNCIÓN PARA MOSTRAR IMAGEN Y ESCONDER FIGCAPTION AL PASAR MOUSE*/
        elem.mouseleave(() => {
          elem.css('opacity', '1');
          elem.next().css('opacity', '0');
        });
      }
    });
    return this;
  };
})(jQuery);
