function validateForm() {
  var name = document.forms["myForm"]["fname"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  else {
      if(! /^[A-Za-z ]+$/.test(name)) {
          alert("Invalid Name");
          return false;
      }
  }

  var age = document.forms["myForm"]["age"].value;
  if(age == "") {
      alert("Age must be filled out");
  }
  else {
      if(isNaN(age) || age < 1 || age > 150) {
          alert("Invalid age");
          return false;
      }
  }

  var email = document.forms["myForm"]["email"].value;
  if(email == "") {
      alert("Email must be given");
      return false;
  }

  var phone = document.forms["myForm"]["phone"].value;
  if(phone == "") {
      alert("Phone number must be given");
  }
  else {
      if( phone.length != 10) {
          alert("Invalid Phone number");
      }
  }

  // var d = new date();
  // var year = d.getFullYear();
  // var day = d.getDay();
  // var month = d.getMonth();

  var dob = document.forms["myForm"]["dob"].value;
  if(dob == "") {
      alert("Dob must be entered");
      return false;
  }
  else {
      if(isNaN(dob)) {
          alert("Invalid Date of birth");
          return false;
      }
  }

  // var text;
  //
  // if (name!=="" && age !== "" && email !=="" && phone !=="" && dob !== "") {
  //     text = "Form submitted";
  // }
  // else {
  //     text = "Form not submitted";
  // }
  //
  // document.getElementById("p-text").innerHTML = text;

  // window.onload = function() {
  //     document.myform.action = get_action();
  // }
  //
  // function get_action() {
  //     return form_action;
  // }
}
