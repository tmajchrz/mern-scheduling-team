import axios from 'axios'

const API_URL = '/api/slots/'

// Create new slot
const createSlot = async (slotData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, slotData, config)

  return response.data
}

// Get user slots
const getSlots = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user slot
const deleteSlot = async (slotId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + slotId, config)

  return response.data
}

const slotService = {
  createSlot,
  getSlots,
  deleteSlot,
}

export default slotService
