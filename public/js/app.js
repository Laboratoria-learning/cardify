$(document).ready(() => {
  let btnStart = $('#start');

  btnStart.one('click', () => {
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