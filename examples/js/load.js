$(document).ready(function() {

  let btnStart = $('#start');
  btnStart.one('click', function() {
    $.fn.pluss = function() {
      this.each(function(index) {
        $('.container').append(
          '<figure>' +
           '<figcaption>' + $(this).attr('alt') + '</figcaption>' +
        '</figure>'
        );
        $('figure')[index].prepend($(this)[0]);
      });
    };  
    $('.container img').pluss(
     { 'opacity':    0.2}
    );

  });

});
