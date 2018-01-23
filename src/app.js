$(document).ready(function() {
  getAllImgAndChange();
});
function getAllImgAndChange() {
  $('.container').children('img').map(function() {
    $(this).wrap('<figure></figure>');
    $(this).css({
      'height': 'auto'
    });
  });
  $('.container').children('figure').map(function() {
    $(this).append('<figcaption><h3 class="text-caption">' + $(this).children('img').attr('alt') + '</h3></figcaption>');
    var width = $(this).children('img').width();
    $(this).css({
      'position': 'relative',
      'width': width
    });
  });
  $('figcaption').css({
    'position': 'absolute',
    'top': '0',
    'bottom': '0',
    'left': '0',
    'right': '0',
    'height': '100%',
    'width': '100%',
    'opacity': '0',
    'transition': '.8s ease',
    'background-color': 'rgba(255,255,255, 0.6)'
  });
  $('.text-caption').css({
    'color': 'black',
    'font-size': '2em',
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%, -50%)',
    '-ms-transform': 'translate(-50%, -50%)',
    'text-align': 'center'
  });
  $('figure figcaption').hover(function() {
    $(this).css({
      'opacity': '1',
      'border' : '2px solid black'
    });
  },
  function() {
    $(this).css({
      'opacity': '0',
      'border' : 'none'
    });
  }
  );
};