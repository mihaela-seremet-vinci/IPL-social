

class Main { 
    isValid(num) {
        return (
            num.length >= 8 &&
            (num.includes('&') ||
                num.includes('$') ||
                num.includes('!') ||
                num.includes('è') ||
                num.includes('§') ||
                num.includes('à') ||
                num.includes('_'))
        );

    }
    
      
}

module.exports = Main;