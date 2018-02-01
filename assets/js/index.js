'use strict';

const $ = require('jquery');

$(document).ready(function()
  $(".content img").mouseover(function(){
       
    let imagenFifure = $(this).attr("alt");
    $(this).each(function(){
    $(this).wrap('<figure></figure>')
     $('figure').css({
          'display': 'inline-block',
           'border': '3px solid #eee',
           'width': '250px',
           'margin':'30px',

         })    
   
       
     $('figure').append('<figcaption>' + imagenFifure + '</figcaption>')
    $('figcaption').css({'display':'block',
                        'width':'90%',
                       


          

           
        });

 });

    })
   $(".content img").mouseout(function(){
    $('img').unwrap();
   $('figcaption').empty();
 }); 
});
  











  
