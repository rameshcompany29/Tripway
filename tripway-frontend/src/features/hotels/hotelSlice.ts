import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getHotels } from './hotelService';
import type { Hotel } from './hotel.types';

interface HotelState {
  hotels: Hotel[];
  loading: boolean;
  error: string | null;
}

const initialState: HotelState = {
  hotels: [],
  loading: false,
  error: null,
};

export const fetchHotels = createAsyncThunk(
  'hotels/fetchHotels',
  async (_, { rejectWithValue }) => {
    try {
      return await getHotels();
    } catch (error) {
      console.error(error);

      return rejectWithValue('Failed to fetch hotels');
    }
  },
);

const hotelSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.hotels = action.payload;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default hotelSlice.reducer;