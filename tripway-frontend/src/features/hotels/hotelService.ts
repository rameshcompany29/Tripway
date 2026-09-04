import api from '../../services/api';
import type {Hotel} from './hotel.types'
export const getHotels = async () => {
  const response = await api.get<Hotel[]>('/hotels');

  return response.data;
};