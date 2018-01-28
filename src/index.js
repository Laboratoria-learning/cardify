$(document).ready(() => {
  alert("jajaj");
  let containerA = $('.container');
  
  let pluginImage = (containerX) => {
    let searchImage = containerX.find('img');
    console.log(searchImage);
    console.log("jasja")

    for (let i = 0; i < searchImage.length; i++) {
      console.log(searchImage[i]);
      let figure = $('<figure style="color:transparent; margin:40px 0"></figure>');
   
      figure.append(searchImage[i]);
      let altImage = $(searchImage[i]).attr('alt');
      figure.append('<figcaption class="figcaption-image" >' + altImage + '</figcaption>');
     
      containerX.append(figure);

      figure.hover( 
        () => {
       
          $(searchImage[i]).hide('slow'); 
         
          $(figure).css({'color': 'black', 'width': '150px','text-align': 'center' , 'font-size': '20px'});
        }, () => {
       
          $(searchImage[i]).show('slow'); 
         
          $(figure).css({'color': 'transparent', 'width': '150px','text-align': 'center' , 'font-size': '20px'});
        }
      );


    }
    
  }
  pluginImage(containerA);
});