(function($) {
  // hola mundo recibe el nombre de la persona y le dice hola
  
  $.fn.extend({
    holaMundo: function(nombre) {
      return this.each(function() {
        $(this).click(function() {
          console.log('hola ' + nombre);
          alert('hola ' + nombre);
        });
      });
    }
  });
})(jQuery);

