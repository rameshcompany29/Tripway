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
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

          <p className="text-gray-600">
            Finding the best hotels...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <h2 className="text-lg font-semibold text-red-700">
            Unable to load hotels
          </h2>

          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero/Search Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Find your perfect stay
          </h1>

          <p className="mt-2 text-blue-100">
            Discover comfortable hotels at the best prices.
          </p>

          {/* Search Box */}
          <div className="mt-8 rounded-2xl bg-white p-4 shadow-xl">
            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <label className="mb-1 block text-xs font-semibold text-gray-500">
                  DESTINATION
                </label>

                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-gray-500">
                  CHECK-IN
                </label>

                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-gray-500">
                  CHECK-OUT
                </label>

                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="button"
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Search Hotels
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Listing */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Heading */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Hotels in Hyderabad
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {hotels.length} hotels available
            </p>
          </div>

          {/* Sort */}
          <select
            className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500"
            defaultValue="recommended"
          >
            <option value="recommended">
              Recommended
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="rating">
              Highest Rated
            </option>
          </select>
        </div>

        {/* Cards */}
        {hotels.length === 0 ? (
          <div className="rounded-xl bg-white p-12 text-center shadow-sm">
            <p className="text-gray-500">
              No hotels found.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default HotelsPage;