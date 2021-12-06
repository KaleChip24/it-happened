import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="../images/movie-ticket" alt="movie ticket" />
      <Link to="/">Home</Link>
      <Link to="/new">Add Purrfect Review</Link>
      <Link to="/featured">Featured Feline</Link>
    </nav>
  );
};

export default Navbar;