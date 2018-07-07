$(document).ready(() => {
  var btnRestart = $('#reiniciar');
  let btnStart = $('#start');
  var btnAdd = $('#add');

  var fichero = $('#fichero');

  btnRestart.hide();
  btnAdd.hide();

  btnStart.one('click', () => {
    btnStart.hide();
    btnRestart.show();
    btnAdd.show();

    $('.container-cardify1').pluss({
    });
  });
  // cargar imagen en div
  fichero.on('change', (ev) => {
    var file = ev.target.files[0];
    var fr = new FileReader();
    fr.onload = (ev2) => {
      $('.container-cardify1').append(
        '<figure class="horizontal">' +
        '<img src=' + ev2.target.result + ' alt="descripcion" class="cont-img">' +
        '<figcaption class="hidden">descripcion1</figcaption>' +
        '</figure>'
      );
    };
    fr.readAsDataURL(file);
  });

  let btnStartvertical = $('#startvertical');
  btnStartvertical.one('click', () => {
    $('.container-cardify').pluss({
      align: 'vertical',
      direction: ''
    });
  });

  let btnstartHorizontal = $('#startHorizontal');

  btnstartHorizontal.one('click', () => {
    $('.container-horizontal').pluss({
    });
  });
});