import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import slotService from './slotService'

const initialState = {
  slots: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new slot
export const createSlot = createAsyncThunk(
  'slots/create',
  async (slotData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await slotService.createSlot(slotData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user slots
export const getSlots = createAsyncThunk(
  'slots/getAll',
  async (_, thunkAPI) => {
    try {
      if (thunkAPI.getState().auth.user) {
        const token = thunkAPI.getState().auth.user.token;
        return await slotService.getSlots(token);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user slot
export const deleteSlot = createAsyncThunk(
  'slots/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await slotService.deleteSlot(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const slotSlice = createSlice({
  name: 'slot',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSlot.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createSlot.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.slots.push(action.payload)
      })
      .addCase(createSlot.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getSlots.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSlots.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.slots = action.payload
      })
      .addCase(getSlots.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteSlot.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteSlot.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.slots = state.slots.filter(
          (slot) => slot._id !== action.payload.id
        )
      })
      .addCase(deleteSlot.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = slotSlice.actions
export default slotSlice.reducer
