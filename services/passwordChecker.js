class Main {
  isValid(password) {
    if (password.length < 8) {
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

    if (password.toLowerCase().includes("ipl")) {
        return false;
    }

    return true;
  }
}

module.exports = Main;
