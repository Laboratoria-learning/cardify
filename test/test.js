const chai = require('chai'),
  checkAlt = ('../js/index.js'),
  expect = require('chai').expect;


describe('Verificar si atributo alt contiene texto', function() {
  it('Atributo alt debería contener texto', function() {
    expect($('img-item').attr('alt')).to.be.a('string');
  });
});
 
