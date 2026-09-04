import { Link } from 'react-router-dom';

import type { Hotel } from '../hotel.types';

interface HotelCardProps {
  hotel: Hotel;
}

function HotelCard({ hotel }: HotelCardProps) {
  return (
    <article className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Hotel Image */}
      <div className="relative h-32 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          alt={hotel.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Rating */}
        <div className="absolute left-3 top-3 rounded-md bg-white px-2.5 py-1 text-xs font-bold text-gray-800 shadow">
          <span className="text-yellow-500">★</span>{' '}
          {hotel.rating}
        </div>

        {/* Favorite */}
        <button
          type="button"
          aria-label="Add hotel to favorites"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-gray-600 shadow transition hover:text-red-500"
        >
          ♡
        </button>
      </div>

      {/* Hotel Details */}
      <div className="p-4">
        {/* Name */}
        <h2 className="truncate text-lg font-bold text-gray-900">
          {hotel.name}
        </h2>

        {/* Location */}
        <p className="mt-1 truncate text-sm text-gray-500">
          📍 {hotel.city}, {hotel.address}
        </p>

        {/* Amenities */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
            Free WiFi
          </span>

          <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
            AC
          </span>

          <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
            Breakfast
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-4 flex items-end justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-500">
              Starting from
            </p>

            <p className="text-xl font-bold text-gray-900">
              ₹{hotel.pricePerNight.toLocaleString('en-IN')}
            </p>

            <p className="text-xs text-gray-500">
              per night
            </p>
          </div>

          <Link
            to={`/hotels/${hotel.id}`}
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default HotelCard;