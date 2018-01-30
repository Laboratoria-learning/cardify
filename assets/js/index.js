

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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

    
