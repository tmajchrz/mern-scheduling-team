const asyncHandler = require('express-async-handler')

const Slot = require('../models/slotModel')
const User = require('../models/userModel')

// @desc    Get slots
// @route   GET /api/slots
// @access  Private
const getSlots = asyncHandler(async (req, res) => {
  const slots = await Slot.find()

  res.status(200).json(slots)
})

// @desc    Set slot
// @route   POST /api/slots
// @access  Private
const setSlot = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const slot = await Slot.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(slot)
})

// @desc    Update slot
// @route   PUT /api/slots/:id
// @access  Private
const updateSlot = asyncHandler(async (req, res) => {
  const slot = await Slot.findById(req.params.id)

  if (!slot) {
    res.status(400)
    throw new Error('Slot not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the slot user
  if (slot.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedSlot = await Slot.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedSlot)
})

// @desc    Delete slot
// @route   DELETE /api/slots/:id
// @access  Private
const deleteSlot = asyncHandler(async (req, res) => {
  const slot = await Slot.findById(req.params.id)

  if (!slot) {
    res.status(400)
    throw new Error('Slot not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the slot user
  if (slot.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await slot.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getSlots,
  setSlot,
  updateSlot,
  deleteSlot,
}
