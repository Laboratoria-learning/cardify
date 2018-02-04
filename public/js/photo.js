'use strict';

//Mostrar imagen antes de publicar
$('input[type=file]').change(function() {
   var file = (this.files[0].name).toString();
   var reader = new FileReader();

   $('#inputPhoto').text(' ');

   reader.onload = function (e) {
   $('.form-group img').attr('src', e.target.result);
   }
   reader.readAsDataURL(this.files[0]);
 });

//Publicando foto

var public = function() {
  //debugger
  var imagen = $("#img-guardar");
  var figure = $('<figure class="col-lg-4"></figure>');
  var img = $('<img class="img-respionsive images">');
  var alt = $('#texto').val();
  var figcaption = $('<figcaption></figcaption>');
  $('#texto').val(' ');
  $('#texto').focus();

  img.attr('src', imagen[0].src);
  img.attr('alt', alt);
  figcaption.text(alt);
  figure.append(img);
  figure.append(figcaption);
  $('.container-img:last-child').append(figure);
  begin();
};
$('#btn-photo').click(public);
