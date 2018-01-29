$(document).ready(() => {
  let containerA = $('.container');

  let pluginImage = (containerX) => {
    let searchImage = containerX.find('img');
    searchImage.css({'width': '335px', 'height': '200px', 'border': '4px solid white', 'border-radius': '10px'});
    console.log(searchImage);


    for (let i = 0; i < searchImage.length; i++) {
      console.log(searchImage[i]);
      searchImage.css({'width': '335px', 'height': '200px',     'border-radius': '10px'});

      let figure = $('<figure style="color:transparent;" class="col-lg-4"></figure>');
      $(figure).css({ 'width': 'auto', 'height': '250px', 'text-align': 'center', 'text-transform': 'capitalize', 'font-weight': 'bold'});
      figure.append(searchImage[i]);
      let altImage = $(searchImage[i]).attr('alt');
      figure.append('<figcaption class="figcaption-image" style="font-size: 30px">' + altImage + '</figcaption>');

      containerX.append(figure);
      figure.hover(() => {
        $(searchImage[i]).css({'visibility': 'hidden'});
        $(searchImage[i]).animate(4000);
        $(figure).css({'color': 'black'});
      }, () => {
        $(searchImage[i]).css({'visibility': 'visible'});
        $(searchImage[i]).animate(4000);
        $(figure).css({'color': 'transparent'});
      });
    }
  };
  pluginImage(containerA);
});

PluginJQ
