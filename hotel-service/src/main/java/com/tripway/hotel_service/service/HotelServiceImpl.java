package com.tripway.hotel_service.service;

import com.tripway.hotel_service.dto.HotelRequest;
import com.tripway.hotel_service.dto.HotelResponse;
import com.tripway.hotel_service.entity.Hotel;
import com.tripway.hotel_service.exception.ResourceNotFoundException;
import com.tripway.hotel_service.mapper.HotelMapper;
import com.tripway.hotel_service.repository.HotelRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class HotelServiceImpl implements HotelService {

    private final HotelRepository hotelRepository;
    private final HotelMapper hotelMapper;

    public HotelServiceImpl(
            HotelRepository hotelRepository,
            HotelMapper hotelMapper) {

        this.hotelRepository = hotelRepository;
        this.hotelMapper = hotelMapper;
    }

    @Override
    @Transactional
    public HotelResponse createHotel(HotelRequest request) {

        Hotel hotel = hotelMapper.toEntity(request);

        Hotel savedHotel = hotelRepository.save(hotel);

        return hotelMapper.toResponse(savedHotel);
    }

    @Override
    public List<HotelResponse> getAllHotels() {

        return hotelRepository.findAll()
                .stream()
                .map(hotelMapper::toResponse)
                .toList();
    }

    @Override
    public HotelResponse getHotelById(Long id) {

        Hotel hotel = findHotelById(id);

        return hotelMapper.toResponse(hotel);
    }

    @Override
    @Transactional
    public HotelResponse updateHotel(
            Long id,
            HotelRequest request) {

        Hotel hotel = findHotelById(id);

        hotelMapper.updateEntity(hotel, request);

        Hotel updatedHotel = hotelRepository.save(hotel);

        return hotelMapper.toResponse(updatedHotel);
    }

    @Override
    @Transactional
    public void deleteHotel(Long id) {

        Hotel hotel = findHotelById(id);

        hotelRepository.delete(hotel);
    }

    private Hotel findHotelById(Long id) {

        return hotelRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Hotel not found with id: " + id
                        )
                );
    }
}