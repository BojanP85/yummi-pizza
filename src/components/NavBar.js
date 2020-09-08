import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CartContext } from '../contexts/CartContext';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  font-size: 2.5rem;
  transition: all 0.3s ease-out;
  border-bottom: ${props => (props.scroll ? "1px solid #629e08" : "")};
  background-color: ${props => (props.scroll ? "#71b806" : "#fff")};
  text-align: center;
  padding: ${props => (props.scroll ? "0.8rem 0 1.5rem 0" : "0.5rem 0 1.5rem 0")};

  @media(max-width: 425px) {
    font-size: 2rem;
  }

  a {
    text-decoration: none;
    color: ${props => (props.scroll ? "#fff" : "#000")};

    &:hover {
      color: #d40f12;
    }
  }

  span {
    color: ${props => (props.scroll ? "#fff" : "#000")};
  }

  span:first-child,
  span:nth-child(3n) {
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.1s ease-out;

    @media(max-width: 425px) {
      font-size: 1rem;
    }

    &:hover,
    &.active {
      color: #d40f12;
    }
  }
`;

const NavBar = (props) => {
  const { itemCount } = useContext(CartContext);
  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      setScroll(true);
    }
    if (window.scrollY === 0) {
      setScroll(false);
    }
  });

  return (
    <Wrapper scroll={scroll}>
      <Link to='/'>Yummi Pizza</Link>
      <Link to='/cart'>Cart ({itemCount})</Link>
      <div>
        <span onClick={() => props.onCurrencyChange("EUR")} className={props.activeUSD}>USD</span>
        <span> | </span>
        <span onClick={() => props.onCurrencyChange("USD")} className={props.activeEUR}>EUR</span>
      </div>
    </Wrapper>
  );
};

export default NavBar;
