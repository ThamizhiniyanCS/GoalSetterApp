const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            requierd: [true, 'Please add a Name'],
        },
        email: {
            type: String,
            requierd: [true, 'Please add a E-mail'],
            unique: true,
        },
        password: {
            type: String,
            requierd: [true, 'Please add a Password'],
        }
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)