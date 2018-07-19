const chai = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html lang = "en"><head><title>Document</title>"></head>' + 
                     '<body><div class="container"><div class="pic">' +
                     '<a href="#" title=""><div class="cover">' + 
                     '<span id="text"><em>corgi</em></span></div>' +
                     '<img class="img-img" src="img.jpg" alt="descripcion"/>' +
                     '</a></div></div></body></html>');

const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

const $ = require('jquery');
const imaginator = require('../assets/js/index.js');

describe('Imagenes dentro de un container', function() {
  imaginator('content');

  it('Deberian existir  imagenes dentro del container', function() {
    $('.content').children('img').length >= 1;
  });

  it(' El atributo alt no debería estar vacio ', () => {
    $('img').attr('alt') !== '';
  });

  it(' El atributo src no debería estar vacio ', () => {
    $('img').attr('src') !== '';
  });
});