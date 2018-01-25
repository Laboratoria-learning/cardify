
const chai = require('chai');
const $ = require('jquery');
const cardifyimg = require("../src/cardify");

describe('comprobar extension', function() {

  it('debería devolver true para archivos con extensión .jpg, .jpeg o .png', () => {
    chai.assert.equal(cardifyimg.extension('.jpg'), true);
  });

  it('debería devolver false para archivos con extensión diferente a .jpg, .jpeg o .png', () => {
    chai.assert.equal(cardifyimg.extension('.doc'), false);
  });

});