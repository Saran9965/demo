      // normal validation

// function validateForm() {
//   let name = document.forms['form']["name"].value;
//   let age = document.forms['form']["age"].value;
//   let email = document.forms['form']["email"].value;
//   let contact = document.forms['form']["contact"].value;

//   let errorMessage = document.getElementById("error-message");
//   let error = document.getElementById("error");
//   let errors = document.getElementById("errors");
//   let errorss = document.getElementById("errorss");

//   let isValid = true;

//   if (name === "") {
//     errorMessage.innerHTML = "Name must be filled";
//     isValid = false;
//   } else {
//     errorMessage.innerHTML = "";
//   }

//   if (age === "" || isNaN(age) || age < 1 || age > 120) {
//     error.innerHTML = "Enter a valid age (between 1 and 120)";
//     isValid = false;
//   } else {
//     error.innerHTML = "";
//   }

//   let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (email === "" || !emailPattern.test(email)) {
//     errors.innerHTML = "Enter a valid email";
//     isValid = false;
//   } else {
//     errors.innerHTML = "";
//   }

//   let phonePattern = /^[0-9]{10}$/;
//   if (!phonePattern.test(contact)) {
//     errorss.innerHTML = "Enter a valid 10-digit contact number";
//     isValid = false;
//   } else {
//     errorss.innerHTML = "";
//   }

//   if (isValid) {
//     alert('Data validated successfully! 🎉');
//     form.reset();
    
//     //redirect the same page to use this
//     setTimeout(function () {
//       window.location.reload();
//     }, 500);

//     return false;
//   }
//   return isValid;
// }


      // using event listener

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById("number").value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;

    let errorMessage = document.getElementById("error-message");
    let error = document.getElementById("error");
    let errors = document.getElementById("errors");
    let errorss = document.getElementById("errorss");

    let isValid = true;

    if (name === "") {
      errorMessage.innerHTML = "Name must be filled";
      isValid = false;
    } else {
      errorMessage.innerHTML = "";
    }

    if (age === "" || isNaN(age) || age < 1 || age > 120) {
      error.innerHTML = "Enter a valid age (between 1 and 120)";
      isValid = false;
    } else {
      error.innerHTML = "";
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !emailPattern.test(email)) {
      errors.innerHTML = "Enter a valid email";
      isValid = false;
    } else {
      errors.innerHTML = "";
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(contact)) {
      errorss.innerHTML = "Enter a valid 10-digit contact number";
      isValid = false;
    } else {
      errorss.innerHTML = "";
    }

    if (isValid) {
      alert('Data validated successfully! 🎉');
      document.getElementById("form").reset();
    }
  });
});
