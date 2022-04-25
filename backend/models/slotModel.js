const mongoose = require('mongoose');

const slotSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    startAt: {
      type: Date,
      required: [true, 'Please add a text value'],
    },
    endAt: {
      type: Date,
      required: [true, 'Please add a text value'],
    },
    vol1: {
      type: mongoose.Schema.Types.ObjectId,
    },
    vol2: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Slot', slotSchema);
