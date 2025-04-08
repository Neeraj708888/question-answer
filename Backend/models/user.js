const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        isAdmin: { type: Boolean, default: false},
    },
    { timestamps: true}
);

module.exports = mongoose.model('User', UserSchema );