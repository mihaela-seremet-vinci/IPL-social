class Main {
  isValid(num) {
    if (num.length < 8) {
      return false;
    }

    var specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharacter.test(num)) {
      return false;
    }

    var number = /[0-9]/;
    if (!number.test(num)) {
      return false;
    }

    return true;
  }
}

module.exports = Main;
