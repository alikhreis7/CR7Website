import React, { useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-router-dom';
import NavBar from "../components/navbar";


const ShoppingCart = ({ items, cart, changeQuantity, removeItem }) => {
  const total = () => {
    let price = 0
    cart.forEach(item => {
      price += +((item.salePrice || item.originalPrice) * item.quantity)
    })
    return price
  }

  return (
    <div>
      {
        cart.map(item => {
          return (
            <div key={item.id} className="cart__item">
              <div className="cart__item">
                <img src={item.url} alt="" className="cart__item--img" />
                <div className="cart__item--info">
                  <span className="item__title">{item.title}</span>
                  <span className="cart__item--price">
                    ${(item.salePrice || item.originalPrice).toFixed(2)}
                  </span>
                  <button className="cart__item--remove" onClick={() => removeItem(item)}>
                    Remove
                  </button>
                </div>
              </div>
              <div className="cart__quantity">
                <input type="number"
                  min={0} max={99}
                  value={item.quantity}
                  className="cart__input"
                  onChange={(event) => changeQuantity(item, event.target.value)}
                />
              </div>
              <div className="cart__total">
                ${
                  ((item.salePrice || item.originalPrice) * item.quantity).toFixed(2)
                }
              </div>
            </div>
          )
        })
      }

      {cart.length === 0 && <div className="cart__empty">
        <h2>You don't have any items in your cart!</h2>
        <Link to="/Jerseys">
          <button className="btn__checkout">Browse Jerseys</button>
        </Link>
        <Link to="/Balls">
          <button className="btn__checkout">Browse Balls</button>
        </Link>
        <Link to="/Cleats">
          <button className="btn__checkout">Browse Cleats</button>
        </Link>
        <Link to="/Gloves">
          <button className="btn__checkout">Browse Gloves</button>
        </Link>
      </div>}
      {cart.length > 0 && <div className="total">
        <div className="total__item total__sub-total">
          <span>Subtotal</span>
          <span>${(total() * 0.9).toFixed(2)}</span>
        </div>
        <div className="total__item total__tax">
          <span>Tax</span>
          <span>${(total() * 0.1).toFixed(2)}</span>
        </div>
        <div className="total__item total__price">
          <span>Total</span>
          <span>${(total()).toFixed(2)}</span>
        </div>
        <Link to="/CheckOut">
        <button className="btn__checkout" >
          Proceed to checkout
        </button>
        </Link>
      </div>}
    </div>
  );
}

export default ShoppingCart;