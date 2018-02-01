const chai = require('chai'),
  checkAlt = ('../js/index.js'),
  assert = chai.assert;


describe('Verificar si atributo alt contiene texto', function() {
  it('Atributo alt debería contener texto', function() {
    expect($('img-item').attr('alt')).to.be.a('string');
  });
});
 
//expect('foobar').to.include('foo');