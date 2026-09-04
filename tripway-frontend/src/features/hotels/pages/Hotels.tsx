import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchHotels } from '../hotelSlice';

import HotelCard from '../components/HotelCard';

function HotelsPage() {
  const dispatch = useAppDispatch();

  const { hotels, loading, error } = useAppSelector(
    (state) => state.hotels,
  );

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  if (loading) {
    return <p>Loading hotels...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <h1>Hotels</h1>

      <div>
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
          />
        ))}
      </div>
    </section>
  );
}

export default HotelsPage;