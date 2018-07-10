'use strict';

var begin = function begin() {
  $('.container-img').cardify();
  $('.container-img > figure').addClass('col-xs-12 col-sm-6 col-lg-3');
};

$(document).ready(begin);