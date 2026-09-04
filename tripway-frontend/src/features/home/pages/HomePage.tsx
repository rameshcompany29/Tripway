import { useAppSelector } from '../../../store/hooks';

function HomePage() {
  const { user, isAuthenticated } = useAppSelector(
    (state) => state.auth,
  );

  return (
    <div>
      <h1>Tripway Home</h1>

      <p>
        Authenticated: {isAuthenticated ? 'Yes' : 'No'}
      </p>

      {user && <p>Welcome, {user.name}</p>}
    </div>
  );
}

export default HomePage;