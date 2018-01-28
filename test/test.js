 var chai = require('chai');
 //chai.use(require('chai-dom'));
const { should } = require('chai');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let dom = new JSDOM('<!doctype html><html><body><div class="container"><img src="1.jpg" alt="hola test"></img></div></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
    userAgent: 'node.js',
}; 
var $ = require('jquery');
describe('body children', function() {
it('passes cuando el body tiene hijos', function() {
   dom.window.document.body.children.length >= 1;
   // quiero saber si existen elementos en el body
  })
it('passes cuando existen imagenes dentro de container', function() {
  $('.container').children('img').length >= 1; 
})
it('passes cuando el atributo alt es igual a su texto', function() {
 $('img').attr('alt') === 'hola test';
  })
it('passes cuando el atributo src no esta vacio ', function() {
 $('img').attr('src') !== '';
  })
it('passes cuando el atributo alt no esta vacio', function() {
 $('img').attr('alt') !== '';
  })
it("passes cuando la class es igual a container", () => {
  $('img').class === 'container'
   })
it("passes cuando la imagen es png o jpg", () => {
  $('img').attr('src').substring(('img').lastIndexOf('.')) === ".jpg" && ".png" 
   })
})
