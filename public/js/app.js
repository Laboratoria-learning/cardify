$(document).ready(() => {
  var btnRestart=$('#reiniciar');
  let btnStart = $('#start');
btnRestart.hide();
  btnStart.one('click', () => {
    $('#start').hide();
    $('#reiniciar').show();
    $('.container-cardify1').pluss({ 
    });
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