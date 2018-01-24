$(document).ready(()=>{
  $('#images').mouseover(() =>{
    if ($('#images').hasClass('img-selected')) {
      /* en el caso que exista ya una imagen seleccionada la eliminamos para que únicamente solo se tenga una imagen seleccionada*/
      $('#images').removeClass('img-selected');
      // añadimos la clase de la imagen seleccionada
      $('#images').addClass('img-selected');
    }
    const alt = $('#images').attr('alt');
    console.log(alt);
  }); 
});