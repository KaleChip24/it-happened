import { Link } from 'react-router-dom';
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


const Nav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <nav className="navbar">
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Movie Meowtian
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem onClick={handleClose}>{
          <Link to="/">Home</Link>}</MenuItem>
        <MenuItem onClick={handleClose}>{<Link to="/new">Meow-vie Review</Link>}</MenuItem>
        <MenuItem onClick={handleClose}>{<Link to="/featured">Featured Feline</Link>}</MenuItem>
      </Menu>

    </nav>
  );
};

export default Nav;



{/* <nav className="navbar">
<Link to="/">Home</Link>
<Link to="/new">Add Purrfect Review</Link>
<Link to="/featured">Featured Feline</Link>
</nav> */}