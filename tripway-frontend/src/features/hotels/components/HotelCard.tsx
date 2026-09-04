import { Link } from 'react-router-dom';
import type { Hotel } from '../hotel.types';

interface HotelCardProps {
  hotel: Hotel;
}

function HotelCard({ hotel }: HotelCardProps) {
  return (
    <article>
      <h2>{hotel.name}</h2>

      <p>
        {hotel.city} • {hotel.address}
      </p>

      <p>⭐ {hotel.rating}</p>

      <p>
        ₹{hotel.pricePerNight} / night
      </p>

      <Link to={`/hotels/${hotel.id}`}>
        View Details
      </Link>
    </article>
  );
}

export default HotelCard;