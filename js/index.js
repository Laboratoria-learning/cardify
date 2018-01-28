
$(document).ready(function() {
  // .fn te (plugin) permite ejecutar tu codigo desde otra extension js
  $.fn.pluss = function() {
    this.each(function(index) {
      $('.container').append(
        '<figure>' +
            '<figcaption>' + $(this).attr('alt') + '</figcaption>' +
            '</figure>'
      );
      $('figure')[index].prepend($(this)[0]);

      $(this).on('mouseover', function() {
        // var images = $('img');
        /* for (var i = 0;i < images.length;i++) {*/
        $('.container').append(
          '<figure class="cont-img">' +
         '<img src=' + $(this).attr('src') + ' width="200px"> </img>' +
         '<figcaption>' + $(this).attr('alt') + '</figcaption>' +
         '</figure>'
        );
      });
        
      $(this).on('mouseover', function() {
        // var images = $('img');
        /* for (var i = 0;i < images.length;i++) {*/
        // var newImg = 'assets/img/libros.jpg';
        $(this).hide();
        // $(this).attr('src', newImg);
      });
      
    });
 
  };  
});
