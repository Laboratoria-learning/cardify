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
        $('.container figure')[index].prepend($(this)[0]);
  
        var element = $('.container figure');
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
  });
  let btnstartHorizontal = $('#startHorizontal');
  btnstartHorizontal.one('click', function() {
    $.fn.pluss = function(options) {
      options = $.extend({}, $.fn.pluss.defaultOptions, options);
      this.each(function(index) {
        console.log($(this));
        console.log(options.direction);
        console.log(options.align);
  
        $('.containerHorizontal').append(
          '<figure>' +
             '<figcaption>' + $(this).attr('alt') + '</figcaption>' +
          '</figure>'
        );
        $('.containerHorizontal figure')[index].prepend($(this)[0]);
        var element = $('.containerHorizontal figure');
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