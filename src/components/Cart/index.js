import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CartList from './CartList';
import { CartContext } from '../../contexts/CartContext';
import { currencyChange } from '../../helpers/currencyChange';

const Wrapper = styled.div`
  h1 {
    font-size: 3rem;

    @media(max-width: 768px) {
      margin-bottom: 80px;
    }

    @media(max-width: 426px) {
      font-size: 2.5rem;
    }
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;

    button {
      outline: none;
      cursor: pointer;
      color: #fff;
      background-color: #1cb040;
      width: 12rem;
      padding: 0.8rem 0;
      border: 1px solid #0b7023;
      border-radius: 3px;

      &:hover,
      &:active {
        transition: background-color 0.3s ease;
        background-color: #0b7023;
      }
    }
  }
`;

const CartInfo = styled.p`
  font-size: 2rem;
  margin-bottom: 50px;
  color: ${props => (props.checkoutMsg ? "#1cb040" : "#667080")};
  text-align: center;
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: auto;
  margin-bottom: 80px;

  @media(max-width: 1024px) {
    width: 80%;
  }

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

const TotalInfo = styled.div`
  border: 1px solid #cccfcd;
  padding: 2rem;

  p {
    font-size: 2rem;
    margin: 0;
    color: #667080;
  }

  h3 {
    font-size: 2rem;
    margin-top: 1rem;
  }

  hr {
    height: 0.05rem;
    border: none;
    background-color: #cccfcd;
  }

  div {
    margin-top: 1rem;
  }

  button {
    outline: none;
    cursor: pointer;
    color: #fff;
    background-color: #1cb040;
    width: 10rem;
    padding: 0.8rem 0;
    border: 1px solid #0b7023;
    border-radius: 3px;
    transition: background-color 0.3s ease;

    &:hover,
    &:active {
      background-color: #0b7023;
    }

    &:last-child {
      margin-left: 1rem;
      border: 1px solid #ab1129;
      background-color: #eb1032;

      &:hover,
      &:active {
        background-color: #ab1129;
      }
    }
  }
`;

const Cart = (props) => {
  const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);

  const renderCart = () => {
    if (cartItems.length > 0) {
      return <CartList currency={props.currency} />;
    }

    if (checkout) {
      return (
        <div>
          <CartInfo checkoutMsg>Checkout successfull!</CartInfo>
          <Link to="/"><button>Back to Menu</button></Link>
        </div>
      );
    }

    return <CartInfo>Your cart is empty.</CartInfo>;
  };

  const renderTotal = () => {
    if (cartItems.length > 0) {
      return (
        <TotalInfo>
          <p>Total Items</p>
          <h3>{itemCount}</h3>
          <p>Total Payment</p>
          <h3>{currencyChange(total, props.currency)}</h3>
          <hr />
          <div>
            <button onClick={handleCheckout}>CHECKOUT</button>
            <button onClick={clearCart}>CLEAR</button>
          </div>
        </TotalInfo>
      );
    }
  };

  return (
    <Wrapper>
      <CartTotal>
        <h1>Shopping Cart</h1>
        <div>{renderTotal()}</div>
      </CartTotal>
      {renderCart()}
    </Wrapper>
  );
}

export default Cart;
