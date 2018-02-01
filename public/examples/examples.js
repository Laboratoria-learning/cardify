$(document).ready(function() {
  let btnStartvertical = $('#startvertical');
  btnStartvertical.one('click', function() {
    $('.container-cardify').pluss();
  });
  let btnstartHorizontal = $('#startHorizontal');
  btnstartHorizontal.one('click', function() {
    $('.container-horizontal').pluss({ 
      align: 'horizontal',
      direction: 'tb'
    });
  });
  
});