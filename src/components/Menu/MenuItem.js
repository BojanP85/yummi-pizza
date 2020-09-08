import React, { useContext } from 'react';
import styled from 'styled-components';

import { CartContext } from '../../contexts/CartContext';
import { currencyChange } from '../../helpers/currencyChange';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 30%;
  padding: 16px;
  margin-bottom: 4.5rem;
  text-align: center;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  box-sizing: border-box;

  @media(max-width: 992px) {
    width: 40%;
  }

  @media(max-width: 768px) {
    width: 80%;
  }

  p {
    font-size: 3rem;
    margin: 2rem 0 0 0;

    @media(max-width: 426px) {
      font-size: 2.5rem;
    }
  }

  img {
    width: 100%;
  }
`;

const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding: 0 1rem;

  @media(max-width: 325px) {
    padding: 0;
  }

  h3 {
    font-size: 3rem;
    margin: 0;

    @media(max-width: 426px) {
      font-size: 2.5rem;
    }
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

    &:hover,
    &:active {
      transition: background-color 0.3s ease;
      background-color: #0b7023;
    }
  }
`;

const MenuItem = ({ product, currency }) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = product => {
    return !!cartItems.find(item => item.id === product.id);
  };

  const renderButton = product => {
    if (isInCart(product)) {
      return <button onClick={() => increase(product)}>Add more</button>;
    }

    return <button onClick={() => addProduct(product)}>Add to cart</button>;
  };

  return (
    <Wrapper>
      <img src={product.image} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <OrderInfo>
          <h3>{currencyChange(product.price, currency)}</h3>
          {renderButton(product)}
        </OrderInfo>
      </div>
    </Wrapper>
  );
};

export default MenuItem;
