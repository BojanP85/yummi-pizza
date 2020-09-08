import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';
import { MenuContext } from '../../contexts/MenuContext';

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: auto;
  box-sizing: border-box;

  @media(max-width: 992px) {
    width: 90%;
    justify-content: space-around;
  }
`;

class MenuList extends React.Component {
  static contextType = MenuContext;

  renderMenu = () => {
    const { menu } = this.context;

    return menu.map(product => (
      <MenuItem key={product.id} product={product} currency={this.props.currency} />
    ));
  }

  render() {
    return (
      <Wrapper>
        {this.renderMenu()}
      </Wrapper>
    );
  }
}

export default MenuList;
