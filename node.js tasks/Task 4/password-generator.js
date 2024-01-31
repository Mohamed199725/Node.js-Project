// password-generator.js
const generatePassword = require('generate-password');

function generateRandomPassword() {
    const password = generatePassword.generate();
    console.log('Generated Password:', password);
}

generateRandomPassword();