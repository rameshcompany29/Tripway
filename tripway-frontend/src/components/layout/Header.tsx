import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-red-600"
        >
          Tripway
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? 'text-red-600'
                  : 'text-gray-600 hover:text-red-600'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/hotels"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? 'text-red-600'
                  : 'text-gray-600 hover:text-red-600'
              }`
            }
          >
            Hotels
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? 'text-red-600'
                  : 'text-gray-600 hover:text-red-600'
              }`
            }
          >
            Login
          </NavLink>

          <Link
            to="/register"
            className="rounded-lg bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Register
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;