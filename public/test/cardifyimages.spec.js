

describe('cardifyimages()', () => {
  it('debería existir atributo alt en la imagen"', () => {
    assert.equal(searchForAlt('<img src="assets/images/img4.jpg" alt="hola Mundo">'), true);
  });
  
  it('debería existir imagenes dentro del div container', () => {
    assert.equal(
      searchForImages('<div><img src="assets/images/img4.jpg" alt="hola Mundo"></div>'),
      true);
  });
});