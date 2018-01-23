const app = require('../assets/js/app');
const assert = require('chai').assert;

describe('isVowel()', () => {
  it('debería devolver true para letra a', () => {
  	assert.equal(app.isVowel('a'), true);
  });
  it('debería devolver false para letra b', () => {
  	assert.equal(app.isVowel('b'), false);
  });
  it('debería lanzar excepción con dos chars', () => {
  	assert.equal(app.isVowel('ab'), false);
  });
});