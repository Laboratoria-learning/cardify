$(document).ready(() => {
  let $images = $('img');
  $images.each(function() {
    $(this).one('mouseover', () => {
      $(this).cardify();  
    });
  });
});