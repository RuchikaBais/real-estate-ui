import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import avatar from '/avatar.webp';



function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>RealEstate</span>
        </Link>
        <Link to="/">Home</Link>
          <Link to="/profile">About</Link>
          <Link to="/list">Services</Link>
          <Link to="/addpost">Affiliate with us</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src={avatar}
              alt=""
            />
            <span>John Doe</span>
            <Link to="/login" className="profile">
              {/* <div className="notification">3</div> */}
              <span>Login</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to='/login'>Sign in</Link>
            <Link to='/register' className="register">
              Sign up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/profile">About</Link>
          <Link onClick={() => setOpen(false)} to="/list">Services</Link>
          <Link onClick={() => setOpen(false)} to="/addpost">Affiliate with us</Link>
          <Link onClick={() => setOpen(false)} to="/login">Sign in</Link>
          <Link onClick={() => setOpen(false)} to="/register">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;