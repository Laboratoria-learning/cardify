$(document).ready(() => {
  let containerA = $('.container');
  
  let pluginImage = (containerX) => {
    let searchImage = containerX.find('img');
    console.log(searchImage);
    console.log("jasja")

    for (let i = 0; i < searchImage.length; i++) {
      console.log(searchImage[i]);
      let figure = $('<figure style="color:transparent;"></figure>');
   
      figure.append(searchImage[i]);
      let altImage = $(searchImage[i]).attr('alt');
      figure.append('<figcaption class="figcaption-image" style="font-size: 30px">' + altImage + '</figcaption>');
     
      containerX.append(figure);
      figure.hover(() => {
        $(searchImage[i]).css({'visibility': 'hidden'});
        $(searchImage[i]).animate(4000);
        $(figure).css({'color': 'black'}, {'width': '150px'}, {'text-align': 'center'});
      }, () => {
        $(searchImage[i]).css({'visibility': 'visible'});
        $(searchImage[i]).animate(4000);
        $(figure).css({'color': 'transparent'}, {'width': '150px'}, {'text-align': 'center'});
      });
    } 
  };
  pluginImage(containerA);
});

