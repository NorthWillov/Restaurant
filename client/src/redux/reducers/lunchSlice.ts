import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchLunches = createAsyncThunk(
  "lunches/fetchLunches",
  async () => {
    const res = await axios.get("/api/fetchLunches")
    return res.data
  }
)

export interface ILunch {
  _id: string
  name: string
  type: string
  price: number
  image: string
  first?: string
  second?: string
  meat?: string
}

export interface LunchesSliceState {
  isLoading: boolean
  lunches: ILunch[]
}

const initialState: LunchesSliceState = {
  isLoading: false,
  lunches: [],
}

const lunchesSlice = createSlice({
  name: "lunchSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLunches.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchLunches.fulfilled, (state, action: PayloadAction<[]>) => {
        state.lunches = action.payload
        state.isLoading = false
      })
  },
})

export const {} = lunchesSlice.actions

export default lunchesSlice.reducer
