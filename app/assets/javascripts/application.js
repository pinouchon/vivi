// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$('#myModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  modal.find('.modal-title').text(button.data('title'));
  modal.find('.modal-title2').text(button.data('title2'));
  modal.find('.modal-text').html(button.data('html'));
  modal.find('.modal-image').attr('src', button.data('image'));
});

var step = 0;
var x = -120;
var dx = 4;
var turnProb = -2;
function animateBee() {
  x += dx;
  step++;
  turnProb += 0.1;
  if (
    (Math.random() < turnProb) ||
    (x > 1100)) {
    $('#bee').css('transform', 'scale(0.2) scaleX(-1)');
    dx = -4;
    turnProb = -2;
  }
  if (
    (Math.random() < turnProb) ||
    (x < -120)
    ) {
    $('#bee').css('transform', 'scale(0.2) scaleX(1)');
    dx = 4;
    turnProb = -2;
  }

  var top = Math.floor(-57 + 15 * Math.sin(step / 8));
  $('#bee').css('left', x + 'px');
  $('#bee').css('top', top + 'px');
  setTimeout(animateBee, 30);
}

$(document).ready(function () {
  animateBee();
});