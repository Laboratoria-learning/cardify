(function($) {
  $.fn.cardify = function() {

    let containerA = $('.container-img');

    let pluginImage = (containerX) => {
      let searchImage = containerX.find('img');

      console.log(searchImage);

      for (let i = 0; i < searchImage.length; i++) {
        console.log(searchImage[i]);

        let figure = $('<figure></figure>');
        figure.append(searchImage[i]);
        let altImage = $(searchImage[i]).attr('alt');
        let figcaption = $('<figcaption>' + altImage + '</figcaption>');
        figure.append(figcaption);

        containerX.append(figure);
        figure.hover(() => {
          $(searchImage[i]).css({'visibility': 'hidden'});
          $(searchImage[i]).animate(4000);
          figcaption.css({ 'transform': 'translateY(-300%)', 'text-align': 'center', 'background-color':'black', 'color':'white', 'border-radius':'10px'});
        }, () => {
          $(searchImage[i]).css({'visibility': 'visible'});
          $(searchImage[i]).animate(4000);
          figcaption.css({ 'transform': 'translateY(0%)','background-color':'transparent', 'color':'black' });
        });
      }
    };
    pluginImage(containerA);
}
})(jQuery);
