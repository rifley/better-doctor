var Doctor = require('./../js/betterDoctor.js').Doctor;


$(function(){
  var newDoctor = new Doctor();
  newDoctor.getDoctors("fever");

});
