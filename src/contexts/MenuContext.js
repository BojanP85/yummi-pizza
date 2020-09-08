import React, { createContext } from 'react';

import { menu } from '../api/menu';

export const MenuContext = createContext();

class MenuContextProvider extends React.Component {
  state = {
    menu: []
  }

  componentDidMount() {
    this.setState({ menu });
  }

  render() {
    return (
      <MenuContext.Provider value={this.state}>
        {this.props.children}
      </MenuContext.Provider>
    );
  }
}

export default MenuContextProvider;
