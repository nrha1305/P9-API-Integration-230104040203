// src/middleware/notfound.middleware.js
module.exports = (req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
};