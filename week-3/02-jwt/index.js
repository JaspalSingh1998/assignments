const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const z = require('zod');

const validationSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})

function signJwt(username, password) {
    const isValid = validationSchema.safeParse({ username, password });
    if (isValid.success) {
        const jwtToken = jwt.sign({ username, password }, jwtPassword);
        return jwtToken;
    }
    return null; // Return null explicitly if validation fails
}

function verifyJwt(token) {
    try {
        const decoded = jwt.verify(token, jwtPassword);
        return true; // Return true if verification is successful
    } catch (error) {
        return false; // Return false if verification fails
    }
}

function decodeJwt(token) {
    try {
        const decoded = jwt.decode(token);
        return decoded ? decoded : false; // Return decoded payload or false
    } catch (error) {
        return false;
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
