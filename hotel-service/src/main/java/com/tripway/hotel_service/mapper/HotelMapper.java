package com.tripway.hotel_service.mapper;

import com.tripway.hotel_service.dto.HotelRequest;
import com.tripway.hotel_service.dto.HotelResponse;
import com.tripway.hotel_service.entity.Hotel;
import org.springframework.stereotype.Component;

@Component
public class HotelMapper {

    public Hotel toEntity(HotelRequest request) {

        return Hotel.builder()
                .name(request.name())
                .city(request.city())
                .address(request.address())
                .pricePerNight(request.pricePerNight())
                .rating(request.rating())
                .build();
    }

    public HotelResponse toResponse(Hotel hotel) {

        return new HotelResponse(
                hotel.getId(),
                hotel.getName(),
                hotel.getCity(),
                hotel.getAddress(),
                hotel.getPricePerNight(),
                hotel.getRating()
        );
    }

    public void updateEntity(
            Hotel hotel,
            HotelRequest request) {

        hotel.setName(request.name());
        hotel.setCity(request.city());
        hotel.setAddress(request.address());
        hotel.setPricePerNight(request.pricePerNight());
        hotel.setRating(request.rating());
    }
}
