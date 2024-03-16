$(document).ready(function() {
    $('#signupForm').submit(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get form values
      var firstName = $('#firstName').val();
      var lastName = $('#lastName').val();
      var email = $('#email').val();
      var number = $('#number').val();
  
      // Display entered data on another page
      var userData = {
        "First Name": firstName,
        "Last Name": lastName,
        "Email": email,
        "Number": number
      };
  
      // Save data to local storage (you might want to use a backend for real applications)
      localStorage.setItem('userData', JSON.stringify(userData));
  
      // Redirect to another page
      window.location.href = "signup.html";
    });
  });
  