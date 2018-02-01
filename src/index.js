// Código del plugin Cardify

// Función anónima autoejecutable

(function(obj) {
  // Heredando las caracterìsticas de jQuery al plugin creado
  obj.fn.extend({
    // Nombre del plugin
    cardify: function() {
      const init = () => {
        $(this).addClass('opacity');
        alert($(this).attr('alt'));
      };
      return $(this).each(init);
    }
  });
})(jQuery);