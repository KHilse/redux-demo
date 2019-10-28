import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Home from './pages/home';
import Cart from './pages/cart';
import Shelf from './pages/shelf';
import Wishlist from './pages/wishlist';


const App = props => {

  return (
    <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shelf">Shelf</Link>({Object.keys(props.shelf).length})</li>
                  <li><Link to="/cart">Cart</Link>({Object.keys(props.cart).reduce((acc, item) => acc + props.cart[item], 0)})</li>
                  <li><Link to="/wishlist">Wishlist</Link>({Object.keys(props.wishlist).reduce((acc, item) => acc + props.wishlist[item], 0)})</li>
                </ul>
              </nav>
            </header>
            <main className="content">
              <Route exact path="/" component={Home} />
              <Route exact path="/shelf" component={Shelf} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/wishlist" component={Wishlist} />
            </main>
          </div>
        </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    shelf: state.shelf,
    wishlist: state.wishlist
  }
}


export default connect(mapStateToProps, {})(App);
