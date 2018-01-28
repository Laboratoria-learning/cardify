
$(document).ready(function() {
  // .fn te (plugin) permite ejecutar tu codigo desde otra extension js
  $.fn.pluss = function() {
    this.each(function() {
      $(this).on('mouseover', function() {
        var images = $('img');
        /* for (var i = 0;i < images.length;i++) {*/
        $('.container').append(
          '<figure>' +
     '<img src=' + images.src + ' width="200px"> </img>' +
     '<figcaption>' + images.alt + '</figcaption>' +
     '</figure>'
        );
        // $(images).remove();
        // }
        //  $(this).hide(); 
      });
    });
    // codigo de prueba
  /*  this.each(function() {
      $(this).on('click', function() {
        alert('genial');
      });
    });*/
  };  
});