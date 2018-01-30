

<<<<<<< HEAD
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
const checkAlt = function() {
    const alt = $('.img-item').attr('alt');
    if (alt === '') {
      $('#error').text('Debe ingresar Atributo alt');
    } else {
      $('#error').text('Atributo Alt ok');
    }
  };

  $("img-item").change(function () {
  var archivo = $('img-item').attr('src')
  extensionesPermitidas = new Array(".jpg, .png, .pneg, .gif");
  miError = "";
  if (!archivo) { }
  else {
    extension = (archivo.substring(archivo.lastIndexOf("."))).toLowerCase();
    permitida = false;
    for (var i = 0; i < extensionesPermitidas.length; i++) {
      if (extensionesPermitidas[i] == extension) {
        permitida = true;
        break;
      }
    }
    if (!permitida) {
      alert("Comprueba la extensión de los archivos a subir"). 
    };
  };

});

}); 
module.exports = checkAlt;

/* const cover = function () {
  image.wrap('<figure id="fig"></figure>');
  image.css('opacity', '0.5');
  $('#fig').append('<figcaption id="caption">' + $('.img-item').attr('alt') + '</figcaption>');
};

const unCover = function () {
  image.unwrap();
  image.css('opacity', '0.5');
  $('#caption').empty();
};

const

  let image = $('.img-item');
$('.container').on('mouseover', '.img-item', cover);
$('.container').on('mouseout', '.img-item', unCover); */


/* 
  };*/


/* var imagesCollection = document.getElementsByTagName('img');
  for (var i = 0, l = imagesCollection.length; i < l; i++) {
    (function(currentImage) {
      imagesCollection[i].addEventListener('mouseover', function(e) {
        e.preventDefault();
        console.log('Image number: ', currentImage);
      }, 'false');
    })(i);
    
    });
  };
});
   */

    
=======
$(document).ready(function() {
   
    //Al pasar sobre .gepic animamos la imágen dando un tamaño menor y mostramos el div .negro
    $('.gepic').mouseenter(function(e) {
       const alt = $ ('img').attr('alt')
       console.log(alt)

        $(this).children('a').children('img').animate({ height: '240', left: '0', top: '0', width: '310'}, 150);
        $(this).children('a').children('div').fadeIn(150);
    $(this).children('a').children('.negro').css({ "padding-top": "80px" , "opacity" : 1 });
     $ ('#texto').html(alt)
    }).mouseleave(function(e) {
        $(this).children('a').children('img').animate({ height: '280', left: '-20', top: '-20', width: '350'}, 150);
        $(this).children('a').children('div').fadeOut(150);
    $(this).children('a').children('.negro').css({ "padding-top": "150px" , "opacity" : 0 });
   
    }); 












>>>>>>> b71a90fe711f998b08035ac9ec5c839329b903ab
