var $ = require("jquery");

$(document).ready(function() {
    //Llamando plug-in
    $('.cardify').cardify();
});
//plug-in de cardify

(function($) {
    $.fn.cardify = function() {
        function envolver() {
            var cardi = $('.cardify').children('img');
            $(cardi).each(function() {
                $(this).wrap('<figure></figure>');
                $(this).after('<figcaption>' + $(this).attr('alt') + '</figcaption>');
                $(this).css({
                    'width': '100%',
                    'height': 'auto',
                    'display': 'block',
                    'margin-bottom': '1px',
                    'margin-right': '10px',
                    'border-radius': '5px'
                });
            });
        };
        envolver();

        function estilos() {
            var figure = $('.cardify').children('figure');
            $(figure).each(function() {
                $(this).css({
                    'position': 'relative',
                    'display': 'inline-block',
                    'width': '300px',
                    'height': 'auto'
                });
            });
            var figcaption = $(figure).children('figcaption');
            $(figcaption).each(function() {
                $(this).css({
                    'background-color': 'rgba(0,0,0,0.5)',
                    'color': 'white',
                    'width': '100%',
                    'height': '100%',
                    'font-size': '50px',
                    'display': 'flex',
                    'justify-content': 'center',
                    'align-items': 'center',
                    'position': 'absolute',
                    'top': '0',
                    'opacity': '0',
                    'border-radius': '5px'
                });
                $(this).hover(function() {
                    $(this).css('opacity', '1');
                }, function() {
                    $(this).css('opacity', '0');
                });
            });
        };
        estilos();
    };
})($);

//testing

var cardifyimg = {};
cardifyimg.extension = function(img) {
    var imagen = $('.cardify').children('img');
    $(imagen).each(function() {
        var archivo = $(this).attr('src');
        var extensiones = archivo.substring(archivo.lastIndexOf("."));
        if (extensiones != ".jpg" & extensiones != ".png" & extensiones != ".gif") {
            /*alert("El archivo de tipo " + extensiones + " no es válido");*/
        } else {
            /*alert("El archivo de tipo " + extensiones + " es válido");*/
        }
    });
};
cardifyimg.extension();

module.exports = cardifyimg;