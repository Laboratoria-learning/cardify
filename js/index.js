var images = $('.container img');
for (var i = 0;i < images.length;i++) {
  console.log(images[i]);
  console.log(images[i].alt);
  $('.container').append(
    '<figure>' +
    '<figcaption>' + images[i].alt + '<figcaption>' +
    '</figure>'
  );
  $('figure')[i].prepend(images[i]);

};