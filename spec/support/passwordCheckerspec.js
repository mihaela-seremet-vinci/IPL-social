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
    it('should return false if doesnt contain a special character', () => {
        expect(validatePassword('Valid123')).toBe(false);

    });
    it('should return true if contains a special character', () => {
        expect(validatePassword('Valid12&')).toBe(true);
    });

    it('should return false if doesnt contain number', () => {
        expect(validatePassword('Validaaa')).toBe(false);
    });

    it('should return true if contains number', () => {
        expect(validatePassword('Valid1aa&')).toBe(true);
    });

    it('should return false if contains IPL', () => {
        expect(validatePassword('ValidIPL1!')).toBe(false);
    });

    
   
    
});