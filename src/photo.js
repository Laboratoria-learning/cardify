'use strict';
(function($) {
  let button = $('#btn-image');
  let imageUrl = $('#image-url');
  let imageAlt = $('#alt-image');

  imageUrl.on('input', function() {
    console.log(imageUrl.val());
    if (imageUrl.val().length < 1 || imageAlt.val().length < 1) {
      button.attr('disabled', 'disabled');
    } else {
      if ($('#image-url').val().match(/^https/)) {
        button.removeAttr('disabled');
        button.css({'background': 'rgb(75, 200, 238)'});
      }
    }
  });

  imageAlt.on('input', function() {
    console.log(imageUrl.val());
    if (imageUrl.val().length < 1 || imageAlt.val().length < 1) {
      button.attr('disabled', 'disabled');
    } else {
      if ($('#image-url').val().match(/^https/)) {
        button.removeAttr('disabled');
        button.css({'background': 'rgb(75, 200, 238)'});
      }
    }
  });

  button.on('click', function() {
    if ($('#image-url').val().match(/^https/)) {
      let imageUrlValue = imageUrl.val();
      let imageAltValue = imageAlt.val();
      let figure = $('<figure class="container-img col-xs-12 col-sm-6 col-lg-3"></figure>');
      let figcaption = $('<figcaption>' + imageAltValue + '</figcaption>');
      console.log(imageUrl.val());
      console.log(imageAltValue);
      let image = $('<img class="img-responsive images" src="' + imageUrlValue + '" alt="' + imageAltValue + '">');
      figure.append(image);
      figure.append(figcaption);
      let containerImage = $('.container-images');
      containerImage.append(figure);

      figure.hover(function() {
        $(image).css({ 'visibility': 'hidden' });
        $(image).animate(4000);
        figcaption.css({ 'transform': 'translateY(-300%)', 'text-align': 'center', 'background-color': 'black', 'color': 'white', 'border-radius': '10px' });
      }, function() {
        $(image).css({ 'visibility': 'visible' });
        $(image).animate(4000);
        figcaption.css({ 'transform': 'translateY(0%)', 'background-color': 'transparent', 'color': 'black' });
      });
    }
    imageUrl.val('');
    imageAlt.val('');
    button.css({'background': 'rgb(105, 104, 104)'});

  });
})(jQuery);
