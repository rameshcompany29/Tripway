package com.tripway.hotel_service.controller;

import com.tripway.hotel_service.dto.HotelRequest;
import com.tripway.hotel_service.dto.HotelResponse;
import com.tripway.hotel_service.service.HotelService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Validated
@RestController
@RequestMapping("/api/v1/hotels")
public class HotelController {

    private final HotelService hotelService;

    public HotelController(HotelService hotelService) {
        this.hotelService = hotelService;
    }

    @PostMapping
    public ResponseEntity<HotelResponse> createHotel(
            @Valid @RequestBody HotelRequest request) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(hotelService.createHotel(request));
    }

    @GetMapping
    public Page<HotelResponse> getHotels(
            @RequestParam(defaultValue = "0")
            @Min(0) int page,

            @RequestParam(defaultValue = "10")
            @Min(1) @Max(100) int size,

            @RequestParam(defaultValue = "id")
            String sortBy,

            @RequestParam(defaultValue = "asc")
            String direction
    )
    {

        return hotelService.getHotels(page, size, sortBy, direction);
    }

    @GetMapping("/{id}")
    public ResponseEntity<HotelResponse> getHotelById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                hotelService.getHotelById(id)
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<HotelResponse> updateHotel(
            @PathVariable Long id,
            @Valid @RequestBody HotelRequest request) {

        return ResponseEntity.ok(
                hotelService.updateHotel(id, request)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHotel(
            @PathVariable Long id) {

        hotelService.deleteHotel(id);

        return ResponseEntity.noContent().build();
    }
}