$(document).ready(() => {
  let containerA = $('.container');
  
  let pluginImage = (containerX) => {
    let searchImage = containerX.find('img');
    console.log(searchImage);

    for (let i = 0; i < searchImage.length; i++) {
      console.log(searchImage[i]);
      let figure = $('<figure style="color:transparent" >')
      figure.append(searchImage[i]);
      let altImage = $(searchImage[i]).attr('alt');
      figure.append('<figcaption style="">' + altImage + '</figcaption>' );
     
      containerX.append(figure);

      figure.on('mouseover', () => {
        $(searchImage[i]).attr('hidden', 'hidden');
        $(figure).css({'color': 'black', 'width': '400px', 'height': '200px', 'text-align': 'center', 'line-height': '200px', 'font-size': '50px'});
      });

      figure.on('mouseout', () => {
        $(searchImage[i]).removeAttr('hidden');
        $(figure).css({'color': 'white'});
      });
    }
  }
  pluginImage(containerA);
});