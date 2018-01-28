
$(document).ready(function() {
  $.fn.pluss = function() {
    this.each(function() {
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
  
    $('.cont-img img').each(function() {
      $('.cont-img img').on('mauseover', function() {
        alert('hola');
        /* var newImg = 'assets/img/libros.jpg';
        $('.cont-img img').attr('src', newImg);*/
      });
    });
  };   
});


