package com.tripway.hotel_service.dto;

import java.math.BigDecimal;

public record HotelResponse(
        Long id,
        String name,
        String city,
        String address,
        BigDecimal pricePerNight,
        BigDecimal rating
) {
}
