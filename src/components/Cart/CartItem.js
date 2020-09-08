import React, { useContext } from 'react';
import styled from 'styled-components';
import { GoTrashcan } from 'react-icons/go';
import { TiPlus, TiMinus } from 'react-icons/ti';

import { CartContext } from '../../contexts/CartContext';
import { currencyChange } from '../../helpers/currencyChange';

const Wrapper = styled.div`
  border-bottom: 1px solid #cccfcd;
  width: 70%;
  margin: auto;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 1024px) {
    width: 80%;
  }

  @media(max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: 20%;

    @media(max-width: 768px) {
      width: 70%;
    }
  }
`;

const ProductInfo = styled.div`
  margin-left: 2rem;
  margin-bottom: 2rem;

  @media(max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-left: 0;
    margin-bottom: 0;
  }

  @media(max-width: 426px) {
    width: 90%;
  }

  p, h5 {
    font-size: 3rem;

    @media(max-width: 1024px) {
      font-size: 2rem;
    }

    @media(max-width: 768px) {
      font-size: 3rem;
    }

    @media(max-width: 500px) {
      font-size: 2rem;
    }
  }

  h5 {
    margin: 0;
  }
`;

const Quantity = styled.div`
  width: 30%;
  margin-left: 5rem;
  text-align: center;

  @media(max-width: 768px) {
    margin-left: 0;
    width: 50%;
  }

  p {
    font-size: 2rem;

    @media(max-width: 768px) {
      margin-top: 0;
    }

    @media(max-width: 500px) {
      font-size: 1.7rem;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;

  @media(max-width: 768px) {
    width: 100%;
  }

  button {
    display: flex;
    justify-content: center;
    outline: none;
    cursor: pointer;
    font-size: 2rem;
    color: #fff;
    background-color: #1cb040;
    width: 5rem;
    padding: 0.8rem 0;
    border: 1px solid #0b7023;
    border-radius: 3px;
    margin-left: 2rem;
    transition: background-color 0.3s ease;

    &:hover,
    &:active {
      background-color: #0b7023;
    }

    &:last-child {
      border: 1px solid #ab1129;
      background-color: #eb1032;

      &:hover,
      &:active {
        background-color: #ab1129;
      }
    }
  }
`;

const CartItem = ({ product, currency }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);

  const renderDecreaseButton = (product) => {
    if (product.quantity > 1) {
      return <button onClick={() => decrease(product)}><TiMinus /></button>;
    }

    if (product.quantity === 1) {
      return <button onClick={() => removeProduct(product)}><GoTrashcan /></button>;
    }
  };

  return (
    <Wrapper>
      <img src={product.image} alt={product.name} />
      <ProductInfo>
        <p>{product.name}</p>
        <h5>Price: {currencyChange(product.price, currency)}</h5>
      </ProductInfo>
      <Quantity>
        <p>Quantity: {product.quantity}</p>
      </Quantity>
      <Buttons>
        <button onClick={() => increase(product)}><TiPlus /></button>
        {renderDecreaseButton(product)}
      </Buttons>
    </Wrapper>
  );
};

export default CartItem;
