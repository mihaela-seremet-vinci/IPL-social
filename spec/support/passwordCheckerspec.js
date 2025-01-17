const Main = require('../../services/passwordChecker');
const validatePassword = new Main().isValid;

describe('Password Validation', () => {
    it('should validate a correct password', () => {
        expect(validatePassword('Valid123!')).toBe(true);
    });

    it('should return false if password is less than 8 characters', () => {
        expect(validatePassword('Valid1!')).toBe(false);
    });

    it('should return true if password is not less than 8 characters', () => {
        expect(validatePassword('12345678!')).toBe(true);
    });
    
});