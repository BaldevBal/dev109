function isValid() {
  if (firstName() && lastName() && email() && username() && password() && address() && city() && state() && country() && zipCode()) {
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
  } else if (lastname.match("^[a-zA-Z ,.'-]+$") === null) {
    errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
  } else {
    validLastname = true;
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
    } else {
        var atpos = emailValue.indexOf("@");
        var dotpos = emailValue.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailValue.length) {
            errorMessages += "<p>Invalid email address. Please recheck.</p>";
        } else {
            validEmail = true;
        }
    }

    document.getElementById("email").innerHTML = errorMessages;
    return validEmail;
}

Number.addEventListener('blur', number, false);

function username() {
    var validUsername = false;
    var usernameValue = document.getElementById("Username").value;
    var errorMessages = "";

 
    if (usernameValue === "") {
        errorMessages += "<p>Username is required</p>";
    } else if (usernameValue.length < 3 || usernameValue.length > 12) {
        errorMessages += "<p>Username must be between 3 and 12 characters in length</p>";
    } else if (!usernameValue.match("^[a-zA-Z0-9_-]+$")) {
        errorMessages += "<p>Invalid character in username (accepts only letters, numbers, -, and _ )</p>";
    } else {
        validUsername = true; 
    }

    document.getElementById("username").innerHTML = errorMessages;
    return validUsername;
}

Username.addEventListener('blur', username, false);

function username() {
    var validUsername = false;
    var usernameValue = document.getElementById("Username").value;
    var errorMessages = "";

 
    if (usernameValue === "") {
        errorMessages += "<p>Username is required</p>";
    } else if (usernameValue.length < 3 || usernameValue.length > 12) {
        errorMessages += "<p>Username must be between 3 and 12 characters in length</p>";
    } else if (!usernameValue.match("^[a-zA-Z0-9_-]+$")) {
        errorMessages += "<p>Invalid character in username (accepts only letters, numbers, -, and _ )</p>";
    } else {
        validUsername = true; 
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
    } else if (passwordValue.length > 7) {
        errorMessages += "<p>Password cannot be greater than 7 characters</p>";
    } else {
        validPassword = true;
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
    } else {
        validAddress = true;
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
    } else {
        validCity = true;
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
    } else {
        validState = true;
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
    } else {
        validCountry = true;
    }
    document.getElementById("country").innerHTML = errorMessages;
    return validCountry;
}

document.getElementById("Country").addEventListener('change', function() {
  zipCode();  // Re-validate Zip Code when country changes
});

function zipCode() {
  var validZip = false;
  var zipValue = document.getElementById("ZipCode").value;
  var countryValue = document.getElementById("Country").value; // Get selected country
  var errorMessages = "";
  if (countryValue === "USA") {
    if (zipValue === "") {
      errorMessages += "<p>Zip Code is required</p>";
    } else if (!zipValue.match(/^\d{5}(?:[-\s]\d{4})?$/)) {
      errorMessages += "<p>Numbers only</p>";
    } else {
      validZip = true;
    }
  } else {
    validZip = true;
  }

  document.getElementById("zipcode").innerHTML = errorMessages;
  return validZip;
}
