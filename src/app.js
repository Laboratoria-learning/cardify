window.addEventListener('load', () => {
  // let bodyPS = document.querySelector('.container');
  // bodyPS.addEventListener('click',
  /* FUNCIÓN PARA SUBIR IMÁGENES DINÁMICAMENTE */
  // createImage = (filesName) => {
  //   let imagesContainer = document.querySelector('.container');
  //   let img = document.createElement('img');
  //   img.setAttribute('src', 'assets/images/' + filesName + '.jpg');
  //   img.setAttribute('alt', filesName);
  //   img.classList.add('img-fluid rounded m-1') ;
  //   imagesContainer.appendChild(img);
  // };

  /* FUNCIÓN PARA EJECUTAR PLUG-IN AL DARLE CLIC AL BOTÓN */
  let btnTest = document.getElementById('btn-test');
  btnTest.addEventListener('click', () => {
    $('img').cardify();
    btnTest.disabled = true;
    btnTest.classList.add('disabled-btn');
  });
// Llave de cierre de función general
});
