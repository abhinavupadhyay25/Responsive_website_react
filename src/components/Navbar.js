import React,{useState} from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Navbar() {

  const[nav,setNav]=useState(false);

  const handleNav=()=>{
    setNav(!nav);
  }



  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="menu" smooth={true} duration={500}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="shop" smooth={true} duration={500}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="new" smooth={true} duration={500}>
              Latest
            </Link>
          </li>
          <li>
            <Link to="clients" smooth={true} duration={500}>
              Feedback
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={handleNav}>
        <HiOutlineMenuAlt4 className="icon" />
      </div>
      <div className={nav?"mobile__menu active" : "mobile__menu"}>
        <ul className="mobile__ul">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="menu" smooth={true} duration={500}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="shop" smooth={true} duration={500}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="new" smooth={true} duration={500}>
              Latest
            </Link>
          </li>
          <li>
            <Link to="clients" smooth={true} duration={500}>
              Feedback
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
