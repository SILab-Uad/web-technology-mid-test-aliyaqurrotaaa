// script.js
export const generatePassword = (length, options) => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let allChars = "";
    if (options.includeUppercase) allChars += uppercase;
    if (options.includeLowercase) allChars += lowercase;
    if (options.includeNumbers) allChars += numbers;
    if (options.includeSpecialChars) allChars += specialChars;

    // Throw an error if no character set are selected
    if (allChars.length === 0) {
        throw new Error("At least one character type must be selected.");
    }

    let password = "";

    // Generate the password based on the selected criteria
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password; 
};