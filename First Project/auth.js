auths.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
  } else {
    console.log('user logged out');
  }
})

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auths.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});
const logout = document.querySelector("#logout");
logout.addEventListener("click", function(e){
  e.preventDefault();
  auths.signOut().then(function(){
    console.log("User Logged out")
  });
});
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", function(e){
  e.preventDefault();
  const email = loginForm['login-email'].value
  const password = loginForm['login-password'].value
  // login
  auths.signInWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });


});
