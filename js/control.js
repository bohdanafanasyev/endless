//-------------------------------
// Controlling toBeContinued
//-------------------------------
$('.backButton').click(function() {
  toBeContinued.hideToRight();
  Login.show();
  setTimeout(function() {
    toBeContinued.clear();
    Login.clear();
  }, 450)

});


//-------------------------------
// Controlling REGISTER
//-------------------------------


$('.register').click(function() {



  // Register from to be continued
  if($('.endless-toBeContinued').hasClass('show-toBeContinued')) {
    Header.hide();
    toBeContinued.hide();
    Register.show();
    setTimeout(function() {
      toBeContinued.clear();
    }, 450);
  }

  // Register from login form
  else if(!$('.endless-logIn').hasClass('hide-loginForm')) {
    Login.hide();
    Header.hide();
    Register.show();
  }

  // Register from Reset Password
  else if($('.resetKeyword').hasClass('increasedSpacing')) {
    Header.hide();
    ResetPassword.hideToRight();
    Register.show();
    setTimeout(function() {
      ResetPassword.clear();
    }, 450)
  }

  // Register from Anonymus
  else if($('.resetKeyword').hasClass('increasedSpacing')) {
    Header.hide();
    ResetPassword.hideToRight();
    Register.show();
    setTimeout(function() {
      ResetPassword.clear();
    }, 450)
  }
});

$('.registerButton').click(function() {
  Register.hide();
  toBeContinued.show();
  Header.showFromRight();
  setTimeout(function () {
    Register.clear();
    Header.clear();
  }, 450)
})


//-------------------------------
// Controlling LOGIN CONFIRMATION
//-------------------------------
$('.loginButton').click(function() {
  Login.hide();
  toBeContinued.show();
});


//-------------------------------
// Controlling REMAIN ANOMYMUS
//-------------------------------

$('.remainAnonymus').click(function() {

  // Anonymus from Reset Password
  if ($('.resetKeyword').hasClass('increasedSpacing')) {
    ResetPassword.hideToRight();
    toBeContinued.show();
    setTimeout(function() {
      ResetPassword.clear();
    }, 450);
  }

  // Anonymus from Login Page
  else if(!$('.endless-logIn').hasClass('hide-loginForm')) {
    Login.hide();
    toBeContinued.show();
  }

  // Anonymus from Register
  else if($('.endless-newUser').hasClass('show-newUser')) {
    Register.hide();
    toBeContinued.show();
    Header.showFromRight();
    setTimeout(function () {
      Register.clear();
      Header.clear();
    }, 450)
  }

});


//-------------------------------
// Controlling RESET PASSWORD
//-------------------------------

$('.resetPassword').click(function() {
  ResetPassword.hideToRight();
  toBeContinued.show();
  setTimeout(function() {
    ResetPassword.clear();
  }, 450);
});

$('.resetKeyword').click(function() {

  // ResetPassword from to be continued
  if($('.endless-toBeContinued').hasClass('show-toBeContinued')) {
    toBeContinued.hide();
    ResetPassword.show();
    setTimeout(function() {
      toBeContinued.clear();
    }, 450);
  }

  // ResetPassword from Register
  else if($('.endless-newUser').hasClass('show-newUser')) {
    Register.hideToRight();
    Header.showFromRight();
    ResetPassword.show();
    setTimeout(function() {
      Register.clear();
      Header.clear();
    }, 450);

  }

  // // ResetPassword from login form
  else if(!$('.endless-logIn').hasClass('hide-loginForm')) {
    Login.hide();
    ResetPassword.show();
  } else if($('.endless-logIn').hasClass('hide-loginForm')) {
    Login.show();
    ResetPassword.hide();
    setTimeout(function () {
      Login.clear();
      ResetPassword.clear();
    }, 450)
  }


});
