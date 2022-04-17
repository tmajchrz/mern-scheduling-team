const mongoose = require("mongoose");

const slotSchema = mongoose.Schema(
  {
    vol1: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Vol1",
    },
    vol2: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Vol2",
    },
    startAt: {
      type: date,
      required: true,
    },
    endAt: {
      type: date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Slot", slotSchema);
