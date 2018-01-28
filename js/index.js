var images = $('.container img');
for (var i = 0;i < images.length;i++) {
  $('.container').append(
    '<figure>' +
    '<img src='+images[i].src +' width="200px"> </img>'+
    '<figcaption>'+images[i].alt +'</figcaption>' +
    '</figure>'
  );
  $(images[i]).remove();
}