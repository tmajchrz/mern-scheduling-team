const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, 'Please add your first name'],
    },
    lname: {
      type: String,
      required: [true, 'Please add your last name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    hccid: {
      type: Number,
      required: [true, 'Please add your HCC ID'],
      unique: true,
    },
    level: {
      type: String,
      required: true,
      default: 'student',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
