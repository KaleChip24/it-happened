import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/new">Add Purrfect Review</Link>
      <Link to="/featured">Featured Feline</Link>
    </div>
  );
};

export default Navbar;