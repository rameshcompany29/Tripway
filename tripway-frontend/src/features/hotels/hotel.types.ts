export interface Hotel {
  id: number;
  name: string;
  city: string;
  address: string;
  pricePerNight: number;
  rating: number;
}

export interface HotelPageResponse {
  content: Hotel[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
}