var Doctor = require('./../js/betterDoctor.js').Doctor;
var Patient = require('./../js/betterDoctor.js').Patient;


$(function(){


  $("#patient-form").submit(function(event){
    event.preventDefault();
    var patientFirst = $("#patientFirstName").val();
    var patientLast = $("#patientLastName").val();
    var patientInsurance = $("#patientInsurance").val();
    var patientIllness = $("#patientIllness").val();

    var newPatient = new Patient(patientFirst, patientLast, patientInsurance, patientIllness);

    var newDoctor = new Doctor(newPatient);
    console.log(newPatient);
    console.log(newDoctor);

  });

  var ogDoctor = new Doctor();


  ogDoctor.getDoctors("fever");

});
