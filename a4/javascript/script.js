function isValid() {
  if (firstName() && lastName() && email() && phoneNumber() && username() && password() && address() && city() && state() && country() && zipCode()) {
    return true;
  } else {
    document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
    event.preventDefault();
    return false;
  }
}

FirstName.addEventListener('blur', firstName, false);

function firstName() {
  //1) Create variable
  var validFirstname = false;

  //2) read value from HTML
  var firstname = document.getElementById("FirstName").value;
  var errorMessages = "";

  //3) Do validation
  if (firstname === "null" || firstname === "" || firstname.length > 20) {
    errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
    console.log("First name invalid — length")
  } else if (firstname.match("^[a-zA-Z ,.'-]+$") === null) {
    errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
    console.log("First name invalid — bad characters")
  } else {
    validFirstname = true;
    console.log("First name valid")
  };

  //4) Send error message to HTML
  document.getElementById("fname").innerHTML = errorMessages;

  //5) return status of each field
  return (validFirstname);
}

LastName.addEventListener('blur', lastName, false);

function lastName() {
  var validLastname = false;
  var lastname = document.getElementById("LastName").value;
  var errorMessages = "";

  if (lastname === "" || lastname.length > 50) {
    errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
    console.log("lname invalid — length")
  } else if (lastname.match("^[a-zA-Z ,.'-]+$") === null) {
    errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
    console.log("lname invaild - character type")
  } else {
    validLastname = true;
    console.log("lname valid")
  }

  document.getElementById("lname").innerHTML = errorMessages;
  return validLastname;
}

Email.addEventListener('blur', email, false);

function email() {
  var validEmail = false;
  var emailValue = document.getElementById("Email").value;
  var errorMessages = "";

  if (emailValue === "") {
    errorMessages += "<p>Email is required</p>";
    console.log("email invalid")
  } else {
    var atpos = emailValue.indexOf("@");
    var dotpos = emailValue.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailValue.length) {
      errorMessages += "<p>Invalid email address. Please recheck.</p>";
      console.log("email invalid — wrong format")
    } else {
      validEmail = true;
      console.log("email valid")
    }
  }

  document.getElementById("email").innerHTML = errorMessages;
  return validEmail;
}

PhoneNumber.addEventListener('blur', phoneNumber, false);

function phoneNumber() {
  var validPhoneNumber = false;
  var phoneNumberValue = document.getElementById("PhoneNumber").value;
  var errorMessages = "";

  if (phoneNumberValue === "") {
    errorMessages += "<p>Phone number is required</p>";
    console.log("Number invalid")
  } else if (!/^\d+$/.test(phoneNumberValue)) {
    errorMessages += "<p>Only Numbers</p>";
    console.log("Number invalid - Wrong Characters")
  } else if (phoneNumberValue.length > 15) {
    errorMessages += "<p>Phone number cannot be greater than 15 characters</p>";
    console.log("Number invalid - Too many characters")
  } else {
    validPhoneNumber = true;
    console.log("Number valid")
  }

  document.getElementById("phone").innerHTML = errorMessages;
  return validPhoneNumber;
}

Username.addEventListener('blur', username, false);

function username() {
  var validUsername = false;
  var usernameValue = document.getElementById("Username").value;
  var errorMessages = "";


  if (usernameValue === "") {
    errorMessages += "<p>Username is required</p>";
    console.log("Username invalid")
  } else if (usernameValue.length < 3 || usernameValue.length > 12) {
    errorMessages += "<p>Username must be between 3 and 12 characters in length</p>";
    console.log("Username invalid - length")
  } else if (!usernameValue.match("^[a-zA-Z0-9_-]+$")) {
    errorMessages += "<p>Invalid character in username (accepts only letters, numbers, -, and _ )</p>";
    console.log("Username invalid - Wrong Characters")
  } else {
    validUsername = true;
    console.log("Username valid")
  }

  document.getElementById("username").innerHTML = errorMessages;
  return validUsername;
}

Password.addEventListener('blur', password, false);

function password() {
  var validPassword = false;
  var passwordValue = document.getElementById("Password").value;
  var errorMessages = "";

  if (passwordValue === "") {
    errorMessages += "<p>Password is required</p>";
    console.log("password invalid")
  } else if (passwordValue.length > 7) {
    errorMessages += "<p>Password cannot be greater than 7 characters</p>";
    console.log("password invalid - length")
  } else {
    validPassword = true;
    console.log("password valid")
  }

  document.getElementById("password").innerHTML = errorMessages;
  return validPassword;
}

Address.addEventListener('blur', address, false);

function address() {
  var validAddress = false;
  var addressValue = document.getElementById("Address").value;
  var errorMessages = "";

  if (addressValue === "") {
    errorMessages += "<p>Address is required</p>";
    console.log("address invalid")
  } else {
    validAddress = true;
    console.log("address valid")
  }

  document.getElementById("address").innerHTML = errorMessages;
  return validAddress;
}

City.addEventListener('blur', city, false);

function city() {
  var validCity = false;
  var cityValue = document.getElementById("City").value;
  var errorMessages = "";
  if (cityValue === "") {
    errorMessages += "<p>City is required</p>";
    console.log("city invalid")
  } else {
    validCity = true;
    console.log("city valid")
  }
  document.getElementById("city").innerHTML = errorMessages;
  return validCity;
}

State.addEventListener('blur', state, false);

function state() {
  var validState = false;
  var stateValue = document.getElementById("State").value;
  var errorMessages = "";
  if (stateValue === "") {
    errorMessages += "<p>State is required</p>";
    console.log("state invalid")
  } else {
    validState = true;
    console.log("state valid")
  }
  document.getElementById("state").innerHTML = errorMessages;
  return validState;
}

Country.addEventListener('blur', country, false);

function country() {
  var validCountry = false;
  var countryValue = document.getElementById("Country").value;
  var errorMessages = "";
  if (countryValue === "") {
    errorMessages += "<p>Country is required</p>";
    console.log("country invalid")
  } else {
    validCountry = true;
    console.log("country valid")
  }
  document.getElementById("country").innerHTML = errorMessages;
  return validCountry;
}

document.getElementById("Country").addEventListener('change', function() {
  zipCode();
});

function zipCode() {
  var validZip = false;
  var zipValue = document.getElementById("ZipCode").value;
  var countryValue = document.getElementById("Country").value;
  var errorMessages = "";
  if (countryValue === "USA") {
    if (zipValue === "") {
      errorMessages += "<p>Zip Code is required</p>";
      console.log("Zipcode invalid")
    } else if (!zipValue.match(/^\d{5}(?:[-\s]\d{4})?$/)) {
      errorMessages += "<p>Numbers only and must not exceed 5 characters</p>";
      console.log("Zipcode invalid - Length")
    } else {
      validZip = true;
      console.log("password valid")
    }
  } else {
    validZip = true;
    console.log("password valid")
  }

  document.getElementById("zipcode").innerHTML = errorMessages;
  return validZip;
}
