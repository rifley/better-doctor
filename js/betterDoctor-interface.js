var Doctor = require('./../js/betterDoctor.js').Doctor;
var Patient = require('./../js/betterDoctor.js').Patient;

var Patients = [];

function print(firstName, lastName, picture, bio) {
  $("#output").append(
    "<div class='doctor'>" +
    "<img src='"+picture+"' alt='test' class='img-circle'><br>" +
    "<h6>" + lastName + ', ' + firstName +"</h6><br>" +"<p>"+ bio+"</p>" + "</div>");
}


$(function(){


  $("#patient-form").submit(function(event){
    event.preventDefault();
    var patientFirst = $("#patientFirstName").val();
    var patientLast = $("#patientLastName").val();
    var patientInsurance = $("#patientInsurance").val();
    var patientIllness = $("#patientIllness").val();

    var newPatient = new Patient(patientFirst, patientLast, patientInsurance, patientIllness);
    newPatient.getDoctors(newPatient, print);

    console.log(newPatient);
    Patients.push(newPatient);
  });


});
