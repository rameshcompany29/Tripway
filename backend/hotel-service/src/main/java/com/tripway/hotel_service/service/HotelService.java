package com.tripway.hotel_service.service;

import com.tripway.hotel_service.dto.HotelRequest;
import com.tripway.hotel_service.dto.HotelResponse;

import java.util.List;

public interface HotelService {

    HotelResponse createHotel(HotelRequest request);

    List<HotelResponse> getAllHotels();

    HotelResponse getHotelById(Long id);

    HotelResponse updateHotel(Long id, HotelRequest request);

    void deleteHotel(Long id);
}