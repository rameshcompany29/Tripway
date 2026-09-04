import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchHotels } from '../hotelSlice';

import HotelCard from '../components/HotelCard';

function HotelsPage() {
  const dispatch = useAppDispatch();

  const {
    hotels,
    loading,
    error,
    currentPage,
    totalPages,
    totalElements,
  } = useAppSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(fetchHotels(0));
  }, [dispatch]);

  const handlePrevious = () => {
    if (currentPage > 0) {
      dispatch(fetchHotels(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      dispatch(fetchHotels(currentPage + 1));
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-red-500" />

          <p className="mt-4 text-sm text-gray-600">
            Finding the best hotels...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-xl rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <h2 className="font-semibold text-red-700">
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
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-600 to-red-500">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Find your perfect stay
          </h1>

          <p className="mt-2 text-red-100">
            Discover comfortable hotels at the best prices.
          </p>

          {/* Search */}
          <div className="mt-7 rounded-2xl bg-white p-4 shadow-xl">
            <div className="grid gap-3 md:grid-cols-4">
              <input
                type="text"
                placeholder="Where are you going?"
                className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-red-500"
              />

              <input
                type="date"
                className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-red-500"
              />

              <input
                type="date"
                className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-red-500"
              />

              <button
                type="button"
                className="rounded-lg bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                Search Hotels
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Listing */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Hotels in Hyderabad
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {totalElements} hotels available
            </p>
          </div>

          <select
            defaultValue="recommended"
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none"
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className="rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Previous
          </button>

          <span className="text-sm font-medium text-gray-600">
            Page {currentPage + 1} of {totalPages}
          </span>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="rounded-lg bg-red-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      </main>
    </div>
  );
}

export default HotelsPage;