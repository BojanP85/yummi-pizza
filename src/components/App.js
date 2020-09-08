import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MenuContextProvider from '../contexts/MenuContext';
import CartContextProvider from '../contexts/CartContext';
import ScrollToTop from '../helpers/scrollToTop';
import NavBar from './NavBar';
import MenuList from './Menu/MenuList';
import Cart from './Cart';

class App extends React.Component {
  state = {
    currency: "USD",
    activeUSD: "active",
    activeEUR: ""
  };

  onCurrencyChange = (currency) => {
    if (currency === "EUR") {
      this.setState({
        currency: "USD",
        activeUSD: "active",
        activeEUR: ""
      });
    }
    if (currency === "USD") {
      this.setState({
        currency: "EUR",
        activeUSD: "",
        activeEUR: "active"
      });
    }
  };

  render() {
    return (
    <MenuContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <ScrollToTop>
            <NavBar
              onCurrencyChange={this.onCurrencyChange}
              activeUSD={this.state.activeUSD}
              activeEUR={this.state.activeEUR}
            />
            <main style={{ marginTop: '120px', marginBottom: '50px' }}>
              <Switch>
                <Route
                  exact
                  path='/'
                  render={props => (
                    <MenuList {...props} currency={this.state.currency} />
                  )}
                />
                <Route
                  path='/cart'
                  render={props => (
                    <Cart {...props} currency={this.state.currency} />
                  )}
                />
              </Switch>
            </main>
          </ScrollToTop>
        </BrowserRouter>
      </CartContextProvider>
    </MenuContextProvider>
    );
  }
}

export default App;
