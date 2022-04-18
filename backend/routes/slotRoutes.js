const express = require('express')
const router = express.Router()
const {
  getSlots,
  setSlot,
  updateSlot,
  deleteSlot,
} = require('../controllers/slotController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getSlots).post(protect, setSlot)
router.route('/:id').delete(protect, deleteSlot).put(protect, updateSlot)

module.exports = router
