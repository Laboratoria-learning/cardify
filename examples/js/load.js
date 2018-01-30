$(document).ready(function() {
  let btnStartvertical = $('#startvertical');
  btnStartvertical.one('click', function() {
    $.fn.pluss = function(options) {
      options = $.extend({}, $.fn.pluss.defaultOptions, options);
      this.each(function(index) {
        $('.container').append(
          '<figure>' +
             '<figcaption>' + $(this).attr('alt') + '</figcaption>' +
          '</figure>'
        );
        $('figure')[index].prepend($(this)[0]);
        var element = $('figure');
        var container = $('.container');
        container.addClass(options.direction);
        element.addClass(options.align);
      });
    };  
    $.fn.pluss.defaultOptions = {
      align: 'vertical',
      direction: ''
    };
    $('.container img').pluss(
    );
  
    // Parametros del plugin.
  });
  let btnstartHorizontal = $('#startHorizontal');
  btnstartHorizontal.one('click', function() {
    $.fn.pluss = function(options) {
      options = $.extend({}, $.fn.pluss.defaultOptions, options);
      this.each(function(index) {
        $('.containerHorizontal').append(
          '<figure>' + "'" +  $(this)[0] + "'" +
           '<figcaption>' + $(this).attr('alt') + '</figcaption>' +
           
        '</figure>'
        );
        var element = $('figure');
        var container = $('.containerHorizontal');
        container.addClass(options.direction);
        element.addClass(options.align);
      });
    };  
    $.fn.pluss.defaultOptions = {
      align: 'horizontal',
      direction: 'tb'
    };

    // Parametros del plugin.
    $('.containerHorizontal img').pluss();
  });
});
