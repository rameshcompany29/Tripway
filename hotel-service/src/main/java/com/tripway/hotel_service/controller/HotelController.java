package com.tripway.hotel_service.controller;

import com.tripway.hotel_service.dto.HotelRequest;
import com.tripway.hotel_service.dto.HotelResponse;
import com.tripway.hotel_service.service.HotelService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public ResponseEntity<List<HotelResponse>> getAllHotels() {

        return ResponseEntity.ok(
                hotelService.getAllHotels()
        );
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