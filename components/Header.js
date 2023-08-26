import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { current } from "@reduxjs/toolkit";

const Header = () => {
  const items = useSelector((state) => state.cart.items);
  const [cartValue, setCartValue] = useState(0);
  useEffect(() => {
    const quantity = items
      .map(({ quantity }) => quantity)
      .reduce((acc, curr) => acc + curr, 0);
    setCartValue(quantity);
  }, [items]);
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/cart" className="cart-icon">
                <AiOutlineShoppingCart />
                {cartValue !== 0 && <div className="cart-val">{cartValue}</div>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
