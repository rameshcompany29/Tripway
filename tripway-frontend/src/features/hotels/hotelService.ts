import api from '../../services/api';
import type { HotelPageResponse } from './hotel.types';

export const getHotels = async (
  page = 0,
  size = 5,
): Promise<HotelPageResponse> => {
  const response = await api.get<HotelPageResponse>('/hotels', {
    params: {
      page,
      size,
    },
  });

  return response.data;
};