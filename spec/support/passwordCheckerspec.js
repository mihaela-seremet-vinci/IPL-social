const Main = require('../../services/passwordChecker');
const validatePassword = new Main().isValid;

describe('Password Validation', () => {
    it('should validate a correct password', () => {
        expect(validatePassword('Valid123!')).toBe(true);
    });

    it('should return false if password is less than 8 characters', () => {
        expect(validatePassword('Valid1!')).toBe(false);
    });
    
});