
class Utilities {
    static generateRandomString(length = 4) {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let randomString = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters[randomIndex];
        }
        return randomString;
    }

    static generateRandomPhoneNumber() {
        let phoneNumber = '';
        phoneNumber += Math.floor(Math.random() * 9) + 1; 
        for (let i = 0; i < 9; i++) {
            phoneNumber += Math.floor(Math.random() * 10);
        }
        return phoneNumber;
    }

    static generateRandomEmail() {
        return `${this.generateRandomString()}@example.com`;
    }
}

module.exports ={Utilities} ;
