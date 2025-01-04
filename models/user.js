const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/CoNest');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
});

module.exports = mongoose.model('user', UserSchema);