package com.tripway.hotel_service.dto;

import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.math.BigDecimal;

public record HotelRequest(

        @NotBlank(message = "Hotel name is required")
        String name,

        @NotBlank(message = "City is required")
        String city,

        @NotBlank(message = "Address is required")
        String address,

        @NotNull(message = "Price per night is required")
        @Positive(message = "Price must be greater than zero")
        BigDecimal pricePerNight,

        @NotNull(message = "Rating is required")
        @DecimalMin(value = "0.0", message = "Rating cannot be less than 0")
        @DecimalMax(value = "5.0", message = "Rating cannot be greater than 5")
        BigDecimal rating
) {
}
