function isValid(event) {
  var isFormValid = true;
  if (fullName() && email() && comment()) {
    isFormValid = false;
  } else {
    document.getElementById("submiterror").innerHTML = "<p><strong>Blank Fields Above</strong></p>";
    event.preventDefault();
    return false;
  }
    return isFormValid;
}

FullName.addEventListener('blur', fullName, false);

function fullName() {
  var validFullname = false;
  var fullname = document.getElementById("name").value;
  var errorMessages = "";

  if (fullname === "" {
    errorMessages += "<p>Full Name Required</p>";
    console.log("fullname invalid - empty")
  } else if (fullname.match("^[a-zA-Z ,.'-]+$") === null) {
    errorMessages += "<p>Invalid character in name (accepts only A-Z, a-z, and ,.'-)</p>";
    console.log("fullname invaild - character type")
  } else {
    validFullname = true;
    console.log("fullname valid")
  }

  document.getElementById("fullname").innerHTML = errorMessages;
  return validFullname;
}

Email.addEventListener('blur', email, false);

function email() {
  var validEmail = false;
  var emailValue = document.getElementById("email").value;
  var errorMessages = "";

  if (emailValue === "") {
    errorMessages += "<p>Email required</p>";
    console.log("email invalid - empty")
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
    document.getElementById("emailWarning").innerHTML = errorMessages;
    return validEmail;
  }

  function comment() {
    var validComment = false;
    var commentValue = document.getElementById("comment").value;
    var errorMessages = "";
    
    if (commentValue === "") {
        errorMessages += "<p>Comment required</p>";
        console.log("comment invalid - empty");
    } else {
        validComment = true;
        console.log("comment valid");
    }
    document.getElementById("commentWarning").innerHTML = errorMessages;
    return validComment;
}
