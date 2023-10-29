firstName = document.querySelector('.fn');
lastName = document.querySelector('.ln');
mobile = document.querySelector('.mb');
email = document.querySelector('.em');
gender = document.getElementsByName('gender');
dob = document.querySelector('.date');
address = document.querySelector('.txt');
city = document.querySelector('.city');
pin = document.querySelector('.pin');
state = document.querySelector('.state');
degree = document.querySelector('.deg');
checkElement = document.querySelectorAll('.mycheck');
pass = document.querySelector('.pwd');




firstName_exp = /^[a-zA-z]{3,6}$/;
lastName_exp =  /^[a-zA-z]{3,6}$/;
mobile_exp = /^[0-9]{10}$/;
email_exp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
city_exp = /^[a-zA-z]+$/;
pin_exp = /^[0-9]+$/;
state_exp = /^[a-zA-z]+$/;

function validate(){
if(firstName.value==""){
    alert("please enter your first name");
    firstName.focus();
    return false;
}
if(!firstName_exp.test(firstName.value)){
    alert("please enter alphabets min 3 & max 6 only");
    return false;
}
if(lastName.value==""){
    alert("please enter your last name");
    lastName.focus();
    return false;
}
if(!lastName_exp.test(lastName.value)){
    alert("please enter alphabets min 3 & max 6 only");
    return false;
}
if(email.value==""){
    alert("please enter your email address");
    email.focus();
    return false;
}
if(!email_exp.test(email.value)){
    alert("please enter proper mail address");
    return false;
}
if(mobile.value==""){
    alert("please enter your mobile no.");
    mobile.focus();
    return false;
}
if(!mobile_exp.test(mobile.value)){
    alert("please enter number max 10 digits only");
    return false;
}
// Check if any radio button is selected
var isChecked = false;
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      isChecked = true;
      break;
    }
  }

  
  if (!isChecked) {
    alert("Please select the gender");
    return false;
  }

  if(dob.value==""){
    alert("please enter the dob");
    dob.focus();
    return false;
  }
  if(address.value==""){
    alert("please enter the address");
    address.focus();
    return false;
  }
  if(city.value==""){
    alert("please enter your city");
    city.focus();
    return false;
  }
  if(!city_exp.test(city.value)){
    alert ("only alphabets");
    return false;
  }
  if(pin.value==""){
    alert("please enter area pin");
    pin.focus();
    return false;
  }
  if(!pin_exp.test(pin.value)){
    alert("Only numbers");
    return false;
  }
  if(state.value==""){
    alert("please enter your state");
    state.focus();
    return false;
  }
  if(!state_exp.test(state.value)){
    alert ("only alphabets");
    return false;
  }
if(degree.value=="Select Qualification:"){
    alert("please enter qualifications");
    degree.focus();
    return false;
  }
  
  var isChecked = false;
    for (var i = 0; i < checkElement.length; i++) {
      if (checkElement[i].checked) {
        isChecked = true;
        break;
      }
    }
    if (!isChecked) {
      alert("Please select the checkbox");
      return false;
    }
  
  if(pass.value==""){
    alert("please enter the password");
    pass.focus();
    return false;
  }
}

    