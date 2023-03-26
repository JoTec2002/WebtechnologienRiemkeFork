const validateEmail = function (adress) {
    if (adress.includes('@'))
        return true;
    return false;
}
exports.validateEmail = validateEmail;