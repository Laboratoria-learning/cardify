
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html><body><div class="container"><img src="../assets/img/tres.jpg" alt="hola test"></></div></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
}; 

const $ = require('jquery');
var chai = require('chai');
var plugin = require('chai-jq');
// Inject plugin.
chai.use(plugin);

const cardify = require('../src/app');

describe('cardify', () => {
  $('.container').cardify();

  it('passes si figure no tiene atributo class', () => {
    chai.expect($('figure')).to.not.have.$data('class');
  });
   
  it('Passes cuando figcaption tiene position absolute', () => {
    chai.expect($('figcaption')).to.have.$css('position', 'absolute');
  });
  it('Passes cuando h3 tiene class text-caption', () => {
    chai.expect($('h3')).to.have.$class('text-caption');
  });
  it('passes cuando el atributo src no esta vacio ', () => {
    $('img').attr('src') !== '';
  });
  it('passes cuando el body tiene hijos', () => {
    dom.window.document.body.children.length >= 1;
    // quiero saber si existen elementos en el body
  });
  it('passes cuando existen imagenes dentro de container', () => {
    $('.container').children('img').length >= 1; 
  });

  it('passes cuando el atributo alt no esta vacio', () => {
    $('img').attr('alt') !== '';
  });

  it('passes cuando la imagen es png o jpg', () => {
    $('img').attr('src').substring(('img').lastIndexOf('.')) === '.jpg' && '.png'; 
  });
  it('passes si figure no tiene atributo class', () => {
    chai.expect($('figure')).to.not.have.$data('class');
  });
  it('passes si figure no tiene atributo class', () => {
    chai.expect($('.text-caption')).to.have.$css('position', 'absolute');
  });
  it('passes si imagen es del mismo ancho que figcaption', () => {
    $('img').width() === $('figcaption').width();
  });
  it('passes si imagen es del mismo ancho que figcaption', () => {
    $('img').width() === $('figure').width();
  });
  
});
afterEach(function(done) { //dynamic cat test !
  setTimeout(done, 200);
});

