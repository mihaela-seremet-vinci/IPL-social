class Main {
  static MIN_PASSWORD_LENGTH = 8;
  static FORBIDDEN_WORD = 'ipl';

  isValid(password) {
    if (password.length < Main.MIN_PASSWORD_LENGTH) {
      return false;
    }

    var hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
    if (!hasSpecialCharacter.test(password)) {
      return false;
    }

    var hasNumber = /[0-9]/;
    if (!hasNumber.test(password)) {
      return false;
    }

    if (password.toLowerCase().includes(Main.FORBIDDEN_WORD)) {
        return false;
    }

    return true;
  }
}

module.exports = Main;
