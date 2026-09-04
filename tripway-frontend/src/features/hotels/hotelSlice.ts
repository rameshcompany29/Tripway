import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getHotels } from './hotelService';
import type { Hotel } from './hotel.types';

interface HotelState {
  hotels: Hotel[];
  currentPage: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: HotelState = {
  hotels: [],
  currentPage: 0,
  pageSize: 5,
  totalElements: 0,
  totalPages: 0,
  last: false,
  loading: false,
  error: null,
};

export const fetchHotels = createAsyncThunk(
  'hotels/fetchHotels',
  async (page: number = 0, { rejectWithValue }) => {
    try {
      return await getHotels(page, 5);
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

        state.hotels = action.payload.content;
        state.currentPage = action.payload.pageable.pageNumber;
        state.pageSize = action.payload.pageable.pageSize;
        state.totalElements = action.payload.totalElements;
        state.totalPages = action.payload.totalPages;
        state.last = action.payload.last;
      })

      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default hotelSlice.reducer;