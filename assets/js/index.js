

$(document).ready(function() {
   
    //Al pasar sobre .gepic animamos la imágen dando un tamaño menor y mostramos el div .negro
    $('.gepic').mouseenter(function(e) {
       const alt = $ ('img').attr('alt')
       console.log(alt)

        $(this).children('a').children('img').animate({ height: '240', left: '0', top: '0', width: '310'}, 150);
        $(this).children('a').children('div').fadeIn(150);
    $(this).children('a').children('.negro').css({ "padding-top": "80px" , "opacity" : 1 });
     $ ('#texto').html(alt)
    }).mouseleave(function(e) {
        $(this).children('a').children('img').animate({ height: '280', left: '-20', top: '-20', width: '350'}, 150);
        $(this).children('a').children('div').fadeOut(150);
    $(this).children('a').children('.negro').css({ "padding-top": "150px" , "opacity" : 0 });
   
    }); 












