import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar ">
        <div className="navbar-container">
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            About
          </a>
          <a className="nav-link" href="#">
            Contact
          </a>
          <a className="nav-link" href="#">
            For You
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
