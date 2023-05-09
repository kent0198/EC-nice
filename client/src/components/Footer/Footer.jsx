import React from 'react'
import "./Footer.scss" 
import Canvar from "../Canvar/Canvar"

const Footer = () => {
  return (
   
      <div className='footer'>
        <div className='top'>
            <div className="item">
              <h1>Categories</h1>
              <span>Women</span>
              <span>Men</span>
              <span>Shoes</span>
              <span>Accessories</span>
              <span>New Arrivals</span>
            </div>
            <div className="item">
              <h1>Categories</h1>
              <span>Women</span>
              <span>Men</span>
              <span>Shoes</span>
              <span>Accessories</span>
              <span>New Arrivals</span>
            </div>
            <div className="item">
              <h1>About</h1>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda laudantium ea architecto, illo iusto corporis, magnam atque ratione sit vel vitae molestiae accusamus! Debitis dignissimos voluptate numquam velit ipsa cum!</span>
            </div>
            <div className="item">
              <h1>Contact</h1>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda laudantium ea architecto, illo iusto corporis, magnam atque ratione sit vel vitae molestiae accusamus! Debitis dignissimos voluptate numquam velit ipsa cum!</span>
            </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className='logo'>Lamastore</span>
            <span className='copyright'>Copyright 2023 .All Rights Reserved</span>
          </div>
          <div className="right">
              <img src="./img/payment.png" alt="" />
          </div>
        </div>
      </div>
   
  )
}

export default Footer