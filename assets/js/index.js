'use strict';

const $ = require('jquery');

$(document).ready(function() {
  // Al pasar sobre .gepic animamos la imágen dando un tamaño menor y mostramos el div .negro
  (function($) {
    $.fn.cardify = function() {
      $('.gepic').mouseenter(function(e) {
        const alt = $('img').attr('alt');
        $(this).children('a').children('img').wrap('<figure id="fig"></figure');
        $('#fig').append('<figcaption id="caption">' + alt + '</figcaption');
        $(this).children('a').children('img').animate({ height: '260',
          left: '0',
          top: '0',
          width: '310' }, 150);
        $(this).children('a').children('div').fadeIn(150);
        $(this).children('a').children('.negro').css({ 'padding-top': '80px',
          'opacity': 1 });
        $('#texto').text(alt);
      }).mouseleave(function(e) {
        $(this).children('a').children('img').animate({ height: '280',
          left: '-20',
          top: '-20',
          width: '350' }, 150);
        $(this).children('a').children('div').fadeOut(150);
        $(this).children('a').children('.negro').css({ 'padding-top': '150px',
          'opacity': 0 });
        $('#caption').remove();
      });
    };
  })(jQuery);
});
  
// Tests

   const checkAlt = function () {
   var alt = $('.img-item').attr('alt');
    if (alt === '') {
       alert('Debe agregar atributo alt')
      } else {
        alert("Atributo alt ok")
      }
    };

    const checkExtension = function () {
     const archivo = $('img-item').attr('src')
     extensionesPermitidas = new Array(".jpg, .png, .pneg, .gif");
     miError = "";
    if (!archivo) { }
     else {
         extension = (archivo.substring(archivo.lastIndexOf("."))).toLowerCase();
         permitida = false;
        for (let i = 0; i < extensionesPermitidas.length; i++) {
            if (extensionesPermitidas[i] == extension) {
                permitida = true;
                break;
                }
           }
         if (!permitida) {
             alert("Comprueba la extensión de los archivos a subir"). 
            };
        };
      };
  

  
module.exports = checkAlt;
