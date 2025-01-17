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

    // Vérifier que le mot de passe ne contient pas "IPL" (insensible à la casse)
    if (num.toLowerCase().includes("ipl")) {
        return false;
    }

    return true;
  }
}

module.exports = Main;
