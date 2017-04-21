var apiKey = require('./../.env').apiKey;
console.log(apiKey);

function Patient(firstName, lastName, insurance, illness) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.insurance = insurance;
  this.illness = illness;
  this.doctors = [];
}

function Doctor(first, last, picture, bio) {
  this.firstName = first;
  this.lastName = last;
  this.picture = picture;
  this.bio = bio;
}

function addDoctors() {
  this.doctors = potentialDocs;
}

var potentialDocs = [];




Patient.prototype.getDoctors = function(newPatient, print) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + this.illness + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      for(var i = 0; i < result.data.length; i++) {
        var doctor = new Doctor(result.data[i].profile.first_name, result.data[i].profile.last_name, result.data[i].profile.image_url, result.data[i].profile.bio);
        potentialDocs.push(doctor);
        print(doctor.firstName, doctor.lastName, doctor.picture, doctor.bio);
      }
      newPatient.doctors = potentialDocs;
      console.log(newPatient, "inside");
    })
   .fail(function(error){
      console.log("fail");
    });
    //.this is current patient object
};

exports.Doctor = Doctor;
exports.Patient = Patient;
