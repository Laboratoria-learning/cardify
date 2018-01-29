$(document).ready(() => {
  let containerA = $('.container');

  let pluginImage = (containerX) => {
    let searchImage = containerX.find('img');

    searchImage.css({'width': '335px', 'height': '200px', 'border': '4px solid white', 'border-radius': '10px'});
    console.log(searchImage);

    for (let i = 0; i < searchImage.length; i++) {
      console.log(searchImage[i]);
      let figure = $('<figure style="color:transparent" class="col-lg-4">')
      figure.append(searchImage[i]);
      let altImage = $(searchImage[i]).attr('alt');
      let figcaption = $('<figcaption style="width: 346px">' + altImage + '</figcaption>');
      figure.append(figcaption);

      containerX.append(figure);

      figure.on('mouseover', () => {
        $(searchImage[i]).attr('hidden', 'hidden');
        $(figure).css({'color': 'black', 'width': 'auto', 'height': '250px', 'text-align': 'center', 'text-transform': 'capitalize', 'font-weight': 'bold'});
        figure.addClass('col-lg-4');
        figcaption.css({'margin-top': '100px', 'font-size': '30px'});

      });

      figure.on('mouseout', () => {
        $(searchImage[i]).removeAttr('hidden');
        $(figure).css({'color': 'white'});
        figcaption.css({'margin-top': '0', 'font-size': '20px'});
      });
    }
  }
  pluginImage(containerA);
});
