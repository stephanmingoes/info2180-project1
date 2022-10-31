window.onload = function () {
  document

    .getElementsByTagName("form")[0]
    .addEventListener("submit", function (e) {
      e.preventDefault();
      let email = document.getElementById("email");
      let emailAddress = email.value.trim();
      if (!isValidEmail(emailAddress)) {
        document.getElementsByClassName("message")[0].innerHTML =
          "Please enter a valid email address.";
      } else {
        document.getElementsByClassName("message")[0].innerHTML =
          "Thank you! Your email address " +
          emailAddress +
          " has been added to our mailing list!";
      }
    });
};
function isValidEmail(emailAddress) {
  return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(
    emailAddress
  );
}
