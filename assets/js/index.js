$(document).ready(()=>{
  $('img').mouseover(() => {
    $('img').wrap('<figure id="fig"></figure>');
    $('img').css('opacity', '0.5');
    $('#fig').append('<figcaption id="caption">' + $('img').attr('alt') + '</figcaption>');
  });

  $('img').mouseout(() => {
    $('img').unwrap();
    $('img').css('opacity', '1');
    $('#caption').empty();
  });
});


