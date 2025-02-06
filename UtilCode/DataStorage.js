class DataStorage {
    static email;
    static password;
    static firstName;
    static lastName;
    static phoneNumber;

    static setEmail(email) {
        DataStorage.email = email;
    }

    static getEmail() {
        return DataStorage.email;
    }

    static setPassword(password) {
        DataStorage.password = password;
    }

    static getPassword() {
        return DataStorage.password;
    }

    static setFirstName(firstName) {
        DataStorage.firstName = firstName;
    }

    static getFirstName() {
        return DataStorage.firstName;
    }

    static setLastName(lastName) {
        DataStorage.lastName = lastName;
    }

    static getLastName() {
        return DataStorage.lastName;
    }

    static setPhoneNumber(phoneNumber) {
        DataStorage.phoneNumber = phoneNumber;
    }

    static getPhoneNumber() {
        return DataStorage.phoneNumber;
    }
}

module.exports ={DataStorage} ;
