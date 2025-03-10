import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, food_list, getTotalCartAmount, points } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        <br />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-items-item" key={item._id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p className="cross" onClick={() => removeFromCart(item._id)}>x</p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <hr />
      <div className="card-bottom">
        <div className="cart-total">
          <h2>Total points earned: {points}</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <button onClick={() => navigate('/order')}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
