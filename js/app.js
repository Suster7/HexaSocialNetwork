let session = new Session();
session = session.getSession();

if (session !== "") {
  window.location.href = "hexa.html";
}

document.querySelector("#sign_up").addEventListener("click", () => {
  document.querySelector(".custom-modal").style.display = "block";
});
document.querySelector("#closeModal").addEventListener("click", () => {
  document.querySelector(".custom-modal").style.display = "none";
});

let config = {
  username: {
    required: true,
    minlength: 5,
    maxlength: 50,
  },

  register_email: {
    required: true,
    email: true,
    minlength: 5,
    maxlength: 50,
  },

  register_password: {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: "confirm_password",
  },

  confirm_password: {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: "register_password",
  },
};

let validator = new Validator(config, "#registrationForm");

document.querySelector("#registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (validator.validationPassed()) {
    let user = new User();
    user.username = document.querySelector("#username").value;
    user.email = document.querySelector("#email").value;
    user.password = document.querySelector("#password").value;
    user.create();
  } else alert("Polja nisu dobro popunjena");
});

document.querySelector("#loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector("#login_email").value;
  let password = document.querySelector("#login_password").value;

  let user = new User();
  user.email = email;
  user.password = password;
  user.login();
});
