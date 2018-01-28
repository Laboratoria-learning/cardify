
$(document).ready(function() {
  $.fn.pluss = function() {
    this.each(function() {
      $(this).on('mouseover', function() {
        // var images = $('img');
        /* for (var i = 0;i < images.length;i++) {*/
        $('.container').append(
          '<figure>' +
         '<img src=' + $(this).attr('src') + ' width="200px"> </img>' +
         '<figcaption>' + $(this).attr('alt') + '</figcaption>' +
         '</figure>'
        );
      });
        
      $(this).on('mouseover', function() {
        // var images = $('img');
        /* for (var i = 0;i < images.length;i++) {*/
        var newImg = 'assets/img/splash.png';
        $(this).hide();
        // $(this).attr('src', newImg);
      });
    });
  };  
});