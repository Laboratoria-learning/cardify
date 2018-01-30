'use strict';

(function ($) {
  $.fn.cardify = function () {

    var containerA = $('.container');

    function pluginImage(containerX) {

      var searchImage = containerX.find('img');

      for(var i = 0 ; i < searchImage.length; i++) {
        //console.log(searchImage[i]);
        searchImage.css({ 'width': '335px', 'height': '200px', 'border-radius': '10px' });

        var figure = $('<figure style="color:transparent" class="col-lg-4"></figure>');
        figure.append(searchImage[i]);
        $(figure).css({ 'width': 'auto', 'height': '250px', 'text-align': 'center', 'text-transform': 'capitalize', 'font-weight': 'bold' });
        
        var altImage = $(searchImage[i]).attr('alt');
        var figcaption = $('<figcaption>' + altImage + '</figcaption>');
        figure.append(figcaption);

        containerX.append(figure);
        figure.hover(function () {
          $(searchImage[i]).css({ 'visibility': 'hidden' });
          $(searchImage[i]).animate(4000);
          $(figure).css({ 'color': 'black', 'text-shadow': '0px 0px black' });
          figure.addClass('col-lg-4');
          figcaption.css({ 'font-size': '30px', 'transform': 'translateY(-300%)' });
        },
        function () {
          $(searchImage[i]).css({ 'visibility': 'visible' });
          $(searchImage[i]).animate(4000);
          $(figure).css({ 'color': 'white', 'text-shadow': '2px 2px black' });
          figcaption.css({ 'transform': 'translateY(0%)', 'font-size': '20px' });
        });
      };
    };
    pluginImage(containerA);
  };
})(jQuery);
