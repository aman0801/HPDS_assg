import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import Button from 'react-bootstrap/Button';
const Navbar = () => {
  const navigate = useNavigate();
  const {user} = useAuthContext();
  const {logout,isPending,error} = useLogout();
  const redirectToContact = () => {
    navigate("/contact");
  };
  const handleReroute = (e) => {
    e.preventDefault();
    navigate(e.target.getAttribute('href'));
};
  const redirectToCourse = () => {
    window.location.href = "https://hpdsx.com";
  };
  return (
    <>
      <div className="nav_bar">
        <div className="logo" onClick={redirectToContact}>Contact</div>
        <div className="search">
          <div className="left">{"  "}HPDSX</div>
          <div className="right">
            <span className="style1">Human</span> <span className="style2">Potential</span> <span className="style3">Development</span>
            <span className="style4">Science</span>
          </div>
        </div>
        <div className="seller" onClick={redirectToCourse}>Our Courses</div>
        {!user&&<div className="seller" onClick={handleReroute}href="/signup">signup</div>}
        {!user&&<div className="seller" onClick={handleReroute} href="/login">login</div>}
        {user&&!isPending&&<Button variant="danger"onClick={logout} className='nav-button'>Logout</Button>}
        {user&&isPending&&<Button variant="danger"onClick={logout} className='nav-button' disabled>Logging out</Button>}
      </div>
    </>
  );
};

export default Navbar;
