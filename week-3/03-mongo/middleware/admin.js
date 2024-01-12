const { Admin } = require('../db/index');

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;

    if (!username || !password) return res.status(400).json({ message: 'Authentication is required' });

    try {
        const user = await Admin.findOne({ username });
        if (user) {
            // Assuming 'user' is an object containing username and password properties
            if (user.username === username && user.password === password) {
                // Successful authentication
                next();
            } else {
                return res.status(400).json({ msg: 'Please check email and password.' });
            }
        } else {
            return res.status(404).json({ msg: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Internal Server Error' });
    }
}

module.exports = adminMiddleware;
