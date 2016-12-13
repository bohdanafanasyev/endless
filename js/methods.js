////////////////////////////////
// Methods for Login & Header //
////////////////////////////////


var Login = {
  show: function() {
    $('.endless-logIn').addClass('show-loginForm');
  },
  hide: function () {
    $('.endless-logIn').addClass('hide-loginForm');
  },
  clear: function() {
      $('.endless-logIn').removeClass('hide-loginForm');
      $('.endless-logIn').removeClass('show-loginForm');
  }

}

var Header = {
  show: function() {
    $('.endless-header').addClass('show-loginForm');
  },
  showFromRight: function() {
    $('.endless-header').addClass('show-HeaderFromRight');
  },
  hide: function() {
    $('.endless-header').addClass('hide-loginForm');
  },
  clear: function() {
    $('.endless-header').removeClass('show-loginForm');
    $('.endless-header').removeClass('hide-loginForm');
    $('.endless-header').removeClass('show-HeaderFromRight');
  }
}



//////////////////////////
// Methods for Register //
//////////////////////////

var Register = {
  show: function() {
    $('.endless-newUser').addClass('show-newUser');
  },
  hide: function() {
    $('.endless-newUser').addClass('hide-newUser');
    $('.endless-newUser').addClass('hide-newUser');
    $('.endless-newUser').addClass('hide-newUser');
  },
  hideToRight: function() {
    $('.endless-newUser').addClass('hide-newUsertoRight ');
    $('.endless-newUser').removeClass('show-newUser');
  },
  clear: function() {
    $('.endless-newUser').removeClass('show-newUser');
    $('.endless-newUser').removeClass('hide-newUsertoRight');
    $('.endless-newUser').removeClass('hide-newUser');
  }
}



////////////////////////////////
// Methods for Reset Password //
////////////////////////////////

var ResetPassword = {
  textMutate: function() {
    $(".resetKeyword").addClass('opacity-StepOne');
    setTimeout(function() {
      $(".resetKeyword").addClass('increasedSpacing').text('BACK TO LOGIN').addClass('opacity-StepTwo');
    }, 250);
    setTimeout(function() {
      $(".resetKeyword").removeClass('opacity-StepOne').removeClass('opacity-StepTwo');
    }, 500)
  },
  textOriginal: function() {
    $(".resetKeyword").addClass('opacity-StepOne');
    setTimeout(function() {
      $(".resetKeyword").removeClass('increasedSpacing').text('RESET PASSWORD').addClass('opacity-StepTwo');
    }, 250);
    setTimeout(function() {
      $(".resetKeyword").removeClass('opacity-StepOne').removeClass('opacity-StepTwo');
    }, 500)
  },
  show: function() {
    $('.endless-resetPassword').addClass('show-resetPassword');
    this.textMutate();
  },
  hide: function () {
    $('.endless-resetPassword').addClass('hide-resetPassword');
    this.textOriginal();
  },
  hideToRight: function() {
    $('.endless-resetPassword').addClass('hide-resetPasswordtoRight ');
    this.textOriginal();
    $('.endless-resetPassword').removeClass('show-resetPassword');
  },
  clear: function() {
    if($('.endless-resetPassword').hasClass('hide-resetPasswordtoRight')) {
      $('.endless-resetPassword').removeClass('hide-resetPasswordtoRight');
      $('.endless-resetPassword').removeClass('show-resetPassword');
    } else {
      $('.endless-resetPassword').removeClass('hide-resetPassword');
      $('.endless-resetPassword').removeClass('show-resetPassword');
    }
  }
}



//////////////////////////////////////
// Methods for 'To Be Continued...' //
//////////////////////////////////////

var toBeContinued = {
  show: function() {
    $('.endless-toBeContinued').addClass('show-toBeContinued');
  },
  hide: function() {
    $('.endless-toBeContinued').addClass('hide-toBeContinued');
  },
  hideToRight: function() {
    $('.endless-toBeContinued').addClass('hide-toBeContinuedtoRight');
  },
  clear: function () {
    $('.endless-toBeContinued').removeClass('show-toBeContinued');
    $('.endless-toBeContinued').removeClass('hide-toBeContinued');
    $('.endless-toBeContinued').removeClass('hide-toBeContinuedtoRight');
  }
}
