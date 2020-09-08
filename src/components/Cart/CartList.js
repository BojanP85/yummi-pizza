import React, { useContext } from 'react';

import CartItem from './CartItem';
import { CartContext } from '../../contexts/CartContext';

const CartList = (props) => {
  const { cartItems } = useContext(CartContext);

  const renderCartItems = () => {
    return cartItems.map(product => (
      <CartItem key={product.id} product={product} currency={props.currency} />
    ));
  };

  return renderCartItems();
};

export default CartList;
