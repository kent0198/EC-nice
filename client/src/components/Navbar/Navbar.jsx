import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import Search from "../Search/Search";

const Navbar = () => {
  const [open, setOpen]=useState(false)
  const [openSearch, setOpenSearch]=useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
               <div className="item">
                  <img src="./img/en.png" alt="" />
                  <KeyboardArrowDownIcon className="arow"/>
               </div>
               <div className="item">
                   <span>USD</span>
                   <KeyboardArrowDownIcon />
               </div>
               <div className="item">
                  <Link className="link" to="/products/1">Women</Link>
               </div>
              <div className="item">
                  <Link className="link" to="/products/2">Men</Link>
              </div>
              <div className="item">
                  <Link className="link" to="/products/3">Children</Link>
              </div>
        </div>
        <div className="center">
          <Link className="link" to="/"><h2>LAMASTORE</h2></Link>
        </div>
        <div className="right">
               <div className="item">
                   <Link className="link" to="/">Home</Link>
               </div>
               <div className="item">
                  <Link className="link" to="/about" >About</Link>
               </div>
               <div className="item">
                  <Link className="link" to="/">Contact</Link>
              </div>  
               <div className="item"> 
                  <Link className="link" to="/">Stores</Link>
              </div>
              <div className="icons">
                  <SearchIcon className="cartIcon" onClick={()=>setOpenSearch(!openSearch)}/>
                  <PersonOutlineOutlinedIcon/>
                  <FavoriteBorderOutlinedIcon/>
                  <div className="cartIcon" onClick={()=>setOpen(!open)}>
                    <ShoppingCartOutlinedIcon/>
                    <span>0</span>
                  </div>
              </div>
        </div>
      </div>
      
      {open && <Cart/>}
      {openSearch && <Search/>}
    </div>
  );
};

export default Navbar;
