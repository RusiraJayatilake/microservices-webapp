const mongoose = require('mongoose');
require('dotenv').config();

// Database connection
exports.connect = () => {
    mongoose.connect('mongodb://localhost:27017/login-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('DB Connected Successfully'))
    .catch((err) => {
        console.error('DB connection error:', err);
        process.exit(1)
    });
}
